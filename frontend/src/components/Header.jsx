import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
     <header className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          S<span className='text-3xl'>O</span>ulTalk
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link to="#" className="hover:text-gray-300 transition" >Home</Link>
          <Link to="#" className="hover:text-gray-300 transition">About</Link>
          <Link to="#"className="hover:text-gray-300 transition">Chat</Link>
          <Link to="#" className="hover:text-gray-300 transition">Resources</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="text-white hover:text-gray-300">
            Login
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
