import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { ChatData } from '../context/ChatContext.jsx';
import { MdDelete } from "react-icons/md";
import { LoadingSpinner } from './Loading.jsx';
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { UserData } from '../context/UserContext.jsx';

const Sidebar = ({isOpen, toggleSidebar}) => {
  
  const navigate = useNavigate();

  const {chats, createLoading , createChat , setSelected , deleteChat} = ChatData()
  
  const deleteChatHandler = (id) =>{
    if(confirm("are you really want to delete this chat")){
      deleteChat(id)
    }
  }

  const clickEvent = (id)=>{
    setSelected(id)
    toggleSidebar()
  }

  return (
    <div
      className={`fixed z-40 h-[100dvh] inset-y-0 left-0 w-[85%] max-w-xs sm:w-72 backdrop-blur-md bg-[#0582e9] border-r border-gray-200 p-4 sm:p-6 transition-transform transform md:relative md:z-0 md:translate-x-0 md:w-1/3 lg:w-1/4 md:block shadow-lg
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >

      {/* close button mobile */}
      <button
        className='md:hidden p-2 mb-6 bg-gray-100 hover:bg-gray-200 rounded-full text-2xl text-gray-600 transition'
        onClick={toggleSidebar}
      >
        <IoCloseCircleSharp/>
      </button>

      {/* title */}
      <div className='text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10'>
        s<span className='text-2xl sm:text-3xl font-bold'>O</span>ulTalk
      </div>

      {/* new chat button */}
      <div className='mb-6'>
        <button
          className='w-full py-3 bg-blue-100 text-[#0582e9] font-bold text-base sm:text-lg rounded-xl hover:bg-white transition shadow-md'
          onClick={createChat}
        >
          {createLoading ? <LoadingSpinner/> : "New Chat +"}
        </button>
      </div>

      {/* recent chats */}
      <div>

        <p className='text-base sm:text-lg text-gray-100 mb-3 font-medium'>
          Recent Conversations
        </p>

        <div className='max-h-[55vh] md:max-h-[62vh] overflow-y-auto space-y-2 pr-1 thinScrollbar'>

          {
            chats && chats.length>0 ? chats.map((chat)=>(

              <div
                key={chat._id}
                className='w-full text-left py-3 px-3 bg-blue-100 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 rounded-xl flex justify-between items-center transition cursor-pointer shadow-sm'
                onClick={()=>clickEvent(chat._id)}
              >

                <span className='text-sm text-[#0582e9] truncate max-w-[140px] sm:max-w-[160px]'>
                  {chat.latestMessage.slice(0,38)|| "New chat"}...
                </span>

                <button
                  className='text-[#0582e9] hover:to-blue-600 text-2xl transition'
                  onClick={(e)=>{
                    e.stopPropagation()
                    deleteChatHandler(chat._id)
                  }}
                >
                  <MdDelete/>
                </button>

              </div>

            )) : (

              <p className='text-gray-400 text-sm'>
                No chats yet
              </p>

            )
          }

        </div>

      </div>

      {/* Exit button */}
      <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6'>

        <div
          className="flex gap-1 items-center cursor-pointer text-white py-3 text-2xl"
          onClick={() => navigate("/")}
        >
          <span><RxExit/></span>Exit
        </div>

      </div>

    </div>
  )
}

export default Sidebar