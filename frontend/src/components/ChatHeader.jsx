import React from 'react'
import { ChatData } from '../context/ChatContext'
import { FaRobot } from "react-icons/fa";

const Header = () => {
  const { chats } = ChatData()
  return (
    <div className='h-18 flex bg-white items-center shadow-lg'>
      <div className='text-lg  pl-5 flex items-center gap-2'>
        <span className='bg-green-100 p-2 h-12 w-12 flex items-center justify-center rounded-full text-green-600 text-2xl'><FaRobot /></span>
        <div>
          <p className='text-xl'>sOul Talk</p>
          {chats && chats.length !== 0 && <p className='text-sm'>{"(Active now)"}</p>}
        </div>
      </div>
    </div>
  )
}

export default Header