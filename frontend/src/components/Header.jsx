import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { UserData } from '../context/UserContext'
import ProfileSidebar from './ProfileSidebar'


const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUser, setIsUser] = useState(true)

  const { activeUser, isActive } = UserData()

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSignup = () => {
    setIsUser(false)
    setIsModalOpen(true)
  }
  const openLogin = () => {
    setIsUser(true)
    setIsModalOpen(true)
  }

  return (
    <header className="absolute text-lg top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          S<span className='text-3xl'>O</span>ulTalk
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-gray-300 transition" >Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/chat" className="hover:text-gray-300 transition">Chat</Link>
          <Link to="/journal" className="hover:text-gray-300 transition">Journal</Link>
          <Link to="/moodDashboard" className="hover:text-gray-300 transition">Mood</Link>
          <Link to="/calm-space" className="hover:text-gray-300 transition">Calm Space</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-4">
          {isActive ? (
            <div className=" relative group">

              {/* Profile Section */}
              <div className="flex items-center gap-2 cursor-pointer text-white"
              onClick={() => setSidebarOpen(true)}>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center font-semibold text-2xl">
                  {activeUser?.fullName?.charAt(0)}
                </div>

                {/* Name */}
                <span className="hidden md:block font-medium">
                  {activeUser?.fullName}
                </span>
              </div>
              <ProfileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} activeUser={activeUser} />

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
