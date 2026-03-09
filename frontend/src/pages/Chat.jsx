import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import { GiHamburgerMenu } from "react-icons/gi";
import ChatHeader from '../components/ChatHeader.jsx';
import { ChatData } from '../context/ChatContext.jsx';
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from '../components/Loading.jsx';
import { IoSend } from "react-icons/io5";
import { UserData } from '../context/UserContext.jsx';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeUser } = UserData()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const { fetchResponse, messages, text, setText, newRequestLoading, msgLoading, chats } = ChatData()

  const submitHandeler = (e) => {
    e.preventDefault();
    fetchResponse()
  }

  const messageContainerRef = useRef()

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [messages])

  return (
    <>
      
      <div className='flex h-screen bg-blue-100 text-gray-800'>

        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />


        <div className='flex flex-1 flex-col'>
          {/* Mobile menu */}
          <button
            onClick={toggleSidebar}
            className='md:hidden p-4 text-2xl text-gray-600 hover:text-blue-600 transition'
          >
            <GiHamburgerMenu />
          </button>

          <div className='flex-1 mb-20 md:mb-0'>
            <ChatHeader />
            {msgLoading ? (<LoadingBig />) : (

              <div
                className='flex-1 p-6 max-h-[600px] overflow-y-auto mb-20 md:mb-0 thin-scrollbar space-y-6'
                ref={messageContainerRef}
              >

                {
                  messages && messages.length > 0 ? messages.map((msg, index) => (
                    <div key={index} className='space-y-4'>

                      {/* User message */}
                      <div className='flex justify-end'>
                        <div className='flex items-start gap-3 max-w-[75%] bg-blue-500 text-white p-4 rounded-2xl shadow-md'>
                          <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center font-semibold text-2xl">
                            {activeUser?.fullName?.charAt(0)}
                          </div>
                          <p>{msg.question}</p>
                        </div>
                      </div>

                      {/* AI message */}
                      <div className='flex justify-start'>
                        <div className='flex items-start gap-3 max-w-[75%] bg-white border border-gray-200 p-4 rounded-2xl shadow-sm'>
                          <div className="bg-green-100 p-2 w-9 h-9 rounded-full text-green-600 text-xl">
                            <FaRobot />
                          </div>
                          <p
                            dangerouslySetInnerHTML={{ __html: msg.answer }}
                            className='leading-relaxed'
                          ></p>
                        </div>
                      </div>

                    </div>
                  )) : (
                    <p className="text-center text-gray-400 mt-10">
                      Start a conversation to begin your wellness journey 🌿
                    </p>
                  )
                }

                {newRequestLoading && <LoadingSmall />}

              </div>

            )}
          </div>
        </div>
        </div>

        {/* Input area */}
        {
          chats && chats.length === 0 ? ("") : (

            <div className='fixed flex justify-center bottom-0 right-0 left-auto p-4 md:left-[25%]'>

              <form
                onSubmit={submitHandeler}
                className='flex items-center backdrop-blur-md w-full bg-white/80 border border-gray-200 rounded-full shadow-lg overflow-hidden '
              >

                <input
                  type="text"
                  placeholder='Enter your message...'
                  className='flex-grow px-6 py-4  bg-transparent outline-none text-gray-700'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />

                <button
                  className='px-6 py-4 bg-blue-500 text-white text-xl hover:bg-blue-600 transition'
                >
                  <IoSend />
                </button>

              </form>

            </div>

          )
        }

      
    </>
  )
}

export default Chat