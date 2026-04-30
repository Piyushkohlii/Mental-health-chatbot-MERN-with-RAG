import React from 'react'
import { ChatData } from '../context/ChatContext'
import { FaRobot } from "react-icons/fa";

const Header = () => {
  const { chats } = ChatData()
  return (
    <div className='h-16 sm:h-[72px] flex bg-white items-center shadow-lg'>
      <div className='text-base sm:text-lg pl-3 sm:pl-5 flex items-center gap-2 sm:gap-3'>
        <span className='bg-green-100 p-2 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full text-green-600 text-xl sm:text-2xl'><FaRobot /></span>
        <div>
          <p className='text-lg sm:text-xl'>sOul Talk</p>
          {chats && chats.length !== 0 && <p className='text-xs sm:text-sm'>{"(Active now)"}</p>}
        </div>
      </div>
    </div>
  )
}

export default Header