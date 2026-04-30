import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { UserData } from '../context/UserContext'
import ProfileSidebar from './ProfileSidebar'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUser, setIsUser] = useState(true)

  const { activeUser, isActive } = UserData()

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          S<span className='text-2xl sm:text-3xl'>O</span>ulTalk
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

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileNavOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <GiHamburgerMenu />
        </button>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
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
            </>
          )}
        </div>

      </div>

      {mobileNavOpen && (
        <div className="md:hidden mx-4 sm:mx-6 mb-3 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg space-y-3">
          <Link to="/" className="block text-gray-700" onClick={() => setMobileNavOpen(false)}>Home</Link>
          <Link to="/about" className="block text-gray-700" onClick={() => setMobileNavOpen(false)}>About</Link>
          <Link to="/chat" className="block text-gray-700" onClick={() => setMobileNavOpen(false)}>Chat</Link>
          <Link to="/journal" className="block text-gray-700" onClick={() => setMobileNavOpen(false)}>Journal</Link>
          <Link to="/moodDashboard" className="block text-gray-700" onClick={() => setMobileNavOpen(false)}>Mood</Link>
          <Link to="/calm-space" className="block text-gray-700" onClick={() => setMobileNavOpen(false)}>Calm Space</Link>

          {isActive ? (
            <div
              className="flex items-center gap-3 pt-2 border-t border-gray-200 text-gray-800"
              onClick={() => {
                setSidebarOpen(true)
                setMobileNavOpen(false)
              }}
            >
              <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center font-semibold text-2xl">
                {activeUser?.fullName?.charAt(0)}
              </div>
              <span className="font-medium">{activeUser?.fullName}</span>
            </div>
          ) : (
            <div className="pt-2 border-t border-gray-200 space-y-2">
              <button
                className="w-full text-left text-gray-700"
                onClick={() => {
                  setIsModalOpen(true)
                  setIsUser(true)
                  setMobileNavOpen(false)
                }}
              >
                Login
              </button>
              <button
                className="w-full text-left bg-[#0582e9] text-white px-4 py-2 rounded-lg font-medium"
                onClick={() => {
                  setIsModalOpen(true)
                  setIsUser(false)
                  setMobileNavOpen(false)
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}

      <Modal modalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
        {isUser
          ? <Login openSignup={openSignup} closeModal={() => setIsModalOpen(false)} />
          : <Register openLogin={openLogin} closeModal={() => setIsModalOpen(false)} />}
      </Modal>

      {isActive && (
        <ProfileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} activeUser={activeUser} />
      )}
    </header>
  )
}

export default Header
