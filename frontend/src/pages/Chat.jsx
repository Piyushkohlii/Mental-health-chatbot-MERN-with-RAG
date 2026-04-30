import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import { GiHamburgerMenu } from "react-icons/gi";
import ChatHeader from '../components/ChatHeader.jsx';
import { ChatData } from '../context/ChatContext.jsx';
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
      <div className='flex h-[100dvh] overflow-hidden bg-blue-100 text-gray-800 relative'>

        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {isOpen && (
          <div
            className='fixed inset-0 bg-black/30 z-30 md:hidden'
            onClick={toggleSidebar}
          />
        )}

        <div className='flex flex-1 flex-col min-w-0'>
          {/* Mobile menu */}
          <button
            onClick={toggleSidebar}
            className='md:hidden p-3 text-2xl text-gray-600 hover:text-blue-600 transition self-start'
          >
            <GiHamburgerMenu />
          </button>

          <div className='flex-1 min-h-0 flex flex-col'>
            <ChatHeader />
            {msgLoading ? (<LoadingBig />) : (

              <div
                className='flex-1 px-3 sm:px-4 md:px-6 pt-4 pb-28 md:pb-24 overflow-y-auto thin-scrollbar space-y-5'
                ref={messageContainerRef}
              >

                {
                  messages && messages.length > 0 ? messages.map((msg, index) => (
                    <div key={index} className='space-y-4'>

                      {/* User message */}
                      <div className='flex justify-end'>
                        <div className='flex items-start gap-2 sm:gap-3 max-w-[88%] sm:max-w-[80%] lg:max-w-[75%] bg-blue-500 text-white p-3 sm:p-4 rounded-2xl shadow-md'>
                          <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center font-semibold text-lg sm:text-xl">
                            {activeUser?.fullName?.charAt(0)}
                          </div>
                          <p className='text-sm sm:text-base break-words'>{msg.question}</p>
                        </div>
                      </div>

                      {/* AI message */}
                      <div className='flex justify-start'>
                        <div className='flex items-start gap-2 sm:gap-3 max-w-[88%] sm:max-w-[80%] lg:max-w-[75%] bg-white border border-gray-200 p-3 sm:p-4 rounded-2xl shadow-sm'>
                          <div className="bg-green-100 p-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full text-green-600 text-lg sm:text-xl">
                            <FaRobot />
                          </div>
                          <p
                            dangerouslySetInnerHTML={{ __html: msg.answer }}
                            className='leading-relaxed text-sm sm:text-base break-words'
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

            <div className='fixed bottom-0 left-0 right-0 md:left-[33.3333%] lg:left-[25%] p-3 sm:p-4 bg-gradient-to-t from-blue-100 via-blue-100/95 to-transparent'>

              <form
                onSubmit={submitHandeler}
                className='flex items-center backdrop-blur-md w-full bg-white/80 border border-gray-200 rounded-full shadow-lg overflow-hidden max-w-4xl mx-auto'
              >

                <input
                  type="text"
                  placeholder='Enter your message...'
                  className='flex-grow px-4 sm:px-6 py-3 sm:py-4 bg-transparent outline-none text-gray-700 text-sm sm:text-base'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />

                <button
                  className='px-4 sm:px-6 py-3 sm:py-4 bg-blue-500 text-white text-lg sm:text-xl hover:bg-blue-600 transition'
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