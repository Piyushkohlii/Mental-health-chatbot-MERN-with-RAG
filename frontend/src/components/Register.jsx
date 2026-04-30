import React,{useState} from 'react'
import { UserData } from '../context/UserContext'

const Register = ({ openLogin , closeModal}) => {

    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { registerUser, btnLoading } = UserData()

    const submitHandler = async (e) => {
        e.preventDefault();
        const success = registerUser({ fullName, email, password, username});
        if(success){
            setTimeout(() => {
             closeModal()
      }, 3000) // wait for toast to appear
    }
    }
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Register</h2>
            <form onSubmit={submitHandler}>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Full name</label>
                    <input type="text" className='w-full px-3 py-2 border' placeholder='Enter Name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Username</label>
                    <input type="text" className='w-full px-3 py-2 border' placeholder='Enter Name'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input type="email" className='w-full px-3 py-2 border' placeholder='Enter Name' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Password</label>
                    <input type="password" className='w-full px-3 py-2 border' placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <button type='submit' className='w-full bg-[#0582e9] text-white py-2'
                    disabled={btnLoading}>
                        {btnLoading ? "Registering..." : "Sign up"}
                    </button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>Already have an Account</span>
                <button className='text-[#0582e9]' onClick={openLogin}>Login</button>
            </div>
        </div>
    )
}

export default Register