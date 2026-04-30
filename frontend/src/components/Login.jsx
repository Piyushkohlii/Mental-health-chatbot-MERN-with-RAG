import React,{useState} from 'react'
import { UserData } from '../context/UserContext'

const Login = ({openSignup , closeModal}) => {

  const [identifier,setIdentifier] = useState("")
  const [password,setPassword] = useState("")

  const {loginUser,btnLoading} = UserData()

  const submitHandler= async (e)=>{
    e.preventDefault();
    const success = await loginUser(identifier,password);
    if(success){setTimeout(() => {
        closeModal()
      }, 3000) // wait for toast to appear
    } 
  }

  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <form onSubmit={submitHandler}>
            <div className='mb-4'>
                <label className='block text-gray-700'>Email or Username</label>
                <input type="text" className='w-full px-3 py-2 border' placeholder='Enter Email or Username' 
                value={identifier}
                onChange={(e)=>setIdentifier(e.target.value)}/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input type="password" className='w-full px-3 py-2 border' placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='mb-4 flex items-center justify-between'>
                <label className='inline-flex items-center'>
                    <input type="checkbox" className='form-checkbox'/>
                    <span className='ml-2 text-gray-700'>Remember Me</span>
                </label>
                <a href="#" className='text-[#0582e9]'>Forgot Password</a>
            </div>
            <div className='mb-4'>
                <button type='submit' className='w-full bg-[#0582e9] text-white py-2'
                disabled={btnLoading}>
                    {btnLoading ? "Logging..." : "Login"}
                </button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Dont have an Account</span>
            <button className='text-[#0582e9]' onClick={openSignup}>Sign Up</button>
        </div>
    </div>
  )
}

export default Login