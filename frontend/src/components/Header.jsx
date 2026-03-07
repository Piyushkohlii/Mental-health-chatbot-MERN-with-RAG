import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { UserData } from '../context/UserContext'


const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUser, setIsUser] = useState(true)

  const { activeUser, isActive , logoutUser } = UserData()

  const openSignup = () => {
    setIsUser(false)
    setIsModalOpen(true)
  }
  const openLogin = () => {
    setIsUser(true)
    setIsModalOpen(true)
  }

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          S<span className='text-3xl'>O</span>ulTalk
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-gray-300 transition" >Home</Link>
          <Link to="#" className="hover:text-gray-300 transition">About</Link>
          <Link to="/chat" className="hover:text-gray-300 transition">Chat</Link>
          <Link to="#" className="hover:text-gray-300 transition">Resources</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-4">
          {isActive ? (
            <div className=" relative group">

              {/* Profile Section */}
              <div className="flex items-center gap-2 cursor-pointer text-white">

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold text-2xl">
                  {activeUser?.fullName?.charAt(0)}
                </div>

                {/* Name */}
                <span className="hidden md:block font-medium">
                  {activeUser?.fullName}
                </span>

              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">

                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Profile
                </button>

                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Chat History
                </button>

                <button
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  onClick={logoutUser}
                >
                  Logout
                </button>

              </div>

            </div>
          ) : (
            <>
              <button className="text-white hover:text-gray-300"
                onClick={() => { setIsModalOpen(true); setIsUser(true) }}>
                Login
              </button>

              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200"
                onClick={() => { setIsModalOpen(true); setIsUser(false) }}>
                Sign Up
              </button>

              <Modal modalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
                {isUser
                  ? <Login openSignup={openSignup} closeModal={() => setIsModalOpen(false)} />
                  : <Register openLogin={openLogin} closeModal={() => setIsModalOpen(false)} />}
              </Modal>
            </>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header
