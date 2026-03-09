import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import jwt from 'jsonwebtoken'

const generateAccessAndRefreshTokens = async(userId)=>{
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false})  //we saved teh refreshtoken in the user database
   
        return {accessToken,refreshToken}
    }catch (error) {
        throw new ApiError(500,"Something went wrong while generating refresh and access token")
    }                                                  
}        

const registerUser = asyncHandler(async(req , res)=>{

    const {fullName , username , email , password} = req.body;
    if([fullName,email,username,password].some((field)=> field?.trim()==="")){
        throw new ApiError(400,"All fields are required")
    }
    if(!email.includes("@gmail.com")){
        throw new ApiError(400,"type a proper email")
    }

    const existedUser = await User.findOne({
        $or:[{ username },{ email }]
    })

    if (existedUser) {
    if (existedUser.username === username) {
        throw new ApiError(409, "Username already exists");
    }
    if (existedUser.email === email) {
        throw new ApiError(409, "Email already exists");
    }
}

    const user = await User.create({ 
        fullName,
        email,
        password,
        username:username.toLowerCase()
    })
   
    const createdUser =  await User.findById(user._id).select(
        "-password -refreshToken"
    )
    
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    await createdUser.save({ validateBeforeSave: false });

    const loggedInUser = await User.findById(user._id)
    .select("-password -refreshToken")

    const options = {
        httpOnly : true,
        secure : true
    }

    return res
    .status(201)
    .cookie("accessToken", accessToken , options)
    .cookie("refreshToken",refreshToken ,options)
    .json(
        new ApiResponse(
            200, //status code
            { //data 
                user : loggedInUser,accessToken,refreshToken
            },
            "User registered Successfully" //message 
        )
    )

})

const loginUser = asyncHandler(async(req,res)=>{

    const {identifier,password} = req.body
    
    if(!identifier){
        throw new ApiError(400,"Username or email is required")
    }

    if (!password) {
        throw new ApiError(400, "Password is required")
    }
    
    const user = await User.findOne({
        $or: [
        { username: identifier },
        { email: identifier }
    ]
    })

    if(!user){
        throw new ApiError(404,"User does not exist")
    }
     
    const isPasswordValid = await user.isPasswordCorrect(password)
    
    if(!isPasswordValid){
        throw new ApiError(401,"Password Incorrect")
    }
    
    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)
    
    const loggedInUser = await User.findById(user._id)
    .select("-password -refreshToken")

    const options = {
        httpOnly : true,
        secure : true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken , options)
    .cookie("refreshToken",refreshToken ,options)
    .json(
        new ApiResponse(
            200, //status code
            { //data 
                user : loggedInUser,accessToken,refreshToken
            },
            "User logged In Successfully" //message 
        )
    )
})

const logoutUser= asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {
            new: true // it is used to update changes in the mongodb
        }
    )
    const options = {
        httpOnly : true,
        secure : true
    }
    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"User logged Out"))
})

const refreshAccessToken = asyncHandler(async(req,res)=>{
   const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
   if(!incomingRefreshToken){
    throw new ApiError(401,"Unauthorised request")
   }
   try {
    const decodedToken = jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET) //it will return the payload data of the refreshToken that is ._id
    
    const user = await User.findById(decodedToken?._id)
    if(!user){
     throw new ApiError(401,"Invalid refresh Token")
    }
 
    if(incomingRefreshToken !== user?.refreshToken){
     throw new ApiError(401, "Refresh token is expired or used")
    }
 
    const options = {
     httpOnly :  true,
     secure:true
    }
    
    const {accessToken , newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
 
    return res
    .status(200)
    .cookie("accessToken", accessToken ,options)
    .cookie("refreshToken", newRefreshToken,options)
    .json(
         new ApiResponse(
             200,
             {accessToken,refreshToken : newRefreshToken}
         )
    )
    }catch (error){
        throw new ApiError(401,error?.message || "Invalid refresh token")
    }
})

export const myProfile = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id)
        .select("-password -refreshToken");
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
}


export {registerUser , loginUser , logoutUser, refreshAccessToken }