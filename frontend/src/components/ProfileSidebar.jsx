import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { UserData } from "../context/UserContext";
import { ChatData } from "../context/ChatContext";
import { IoChevronDown } from "react-icons/io5";
import { JournalData } from "../context/JournalContext";
import { useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";

const ProfileSidebar = ({ sidebarOpen, setSidebarOpen, activeUser }) => {

    const { chats, setSelected } = ChatData()
    const { logoutUser } = UserData()
    const { journals } = JournalData()
    const [showHistory, setShowHistory] = useState(false);
    const [showJournal, setShowJournal] = useState(false);
    const navigate = useNavigate();

    const clickEvent = (id) => {
        navigate("/chat")
        setSelected(id)
        toggleSidebar()
    }

    return (
        <>
            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/10 z-40"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-74 bg-blue-100 shadow-xl z-70 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <button
                    className="absolute top-4 right-4 z-50 text-white text-2xl"
                    onClick={() => setSidebarOpen(false)}
                >
                    <IoClose />
                </button>
                <div className="flex flex-col  gap-6">

                    <div className="flex p-4 items-center text-lg w-full h-full bg-[#0582e9] gap-2 cursor-pointer text-white">

                        {/* Avatar */}
                        <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center font-semibold text-2xl">
                            {activeUser?.fullName?.charAt(0)}
                        </div>

                        {/* Name */}
                        <span className="hidden md:block text-white font-medium">
                            {activeUser?.fullName}
                        </span>

                    </div>

                    <div className="px-4 w-full text-lg h-full flex flex-col gap-5 cursor-pointer text-[#0582e9]">
                        <button
                            className="text-left hover:text-blue-500"
                            onClick={() => {
                                navigate("/profile");
                                setSidebarOpen(false);
                            }}
                        >
                            My Profile
                        </button>

                        <div>
                            <button className="text-left flex items-center gap-2 hover:text-blue-500"
                                onClick={() => setShowHistory(!showHistory)}>
                                Chat History
                                <IoChevronDown
                                    className={`transition ${showHistory ? "rotate-180" : ""}`}
                                />
                            </button>

                            {showHistory && (
                                <div className="py-2">

                                    <p className='text-lg pb-2 text-text-blue-500'>
                                        Recent Conversations
                                    </p>

                                    <div className='max-h-[500px] overflow-y-auto space-y-2 pr-1 thinScrollbar'>

                                        {
                                            chats && chats.length > 0 ? chats.map((chat) => (

                                                <div
                                                    key={chat._id}
                                                    className='w-full text-left py-3 px-3 bg-blue-200 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 rounded-xl flex justify-between items-center transition cursor-pointer shadow-sm'
                                                    onClick={() => clickEvent(chat._id)}
                                                >

                                                    <span className='text-sm text-[#0582e9] truncate max-w-[150px]'>
                                                        {chat.latestMessage.slice(0, 38) || "New chat"}...
                                                    </span>

                                                </div>

                                            )) : (

                                                <p className='text-gray-400 text-sm'>
                                                    No chats yet
                                                </p>

                                            )
                                        }

                                    </div>

                                </div>
                            )}
                        </div>

                        <div>
                            <button className="text-left flex items-center gap-2 hover:text-blue-500"
                                onClick={() => setShowJournal(!showJournal)}>
                                Journals
                                <IoChevronDown
                                    className={`transition ${showJournal ? "rotate-180" : ""}`}
                                />
                            </button>
                            {showJournal && (
                                < div className="py-2">

                                    <p className='text-lg pb-2 text-text-blue-500'>
                                        Recent Journals
                                    </p>

                                    <div className='max-h-[500px] overflow-y-auto space-y-2 pr-1 thinScrollbar'>

                                        {journals && journals.length > 0 ? (
                                            journals.map((journal) => (

                                                <div
                                                    key={journal._id}
                                                    onClick={() => navigate(`/journal/${journal._id}`)}
                                                    className="w-full text-left py-3 px-3 bg-blue-200 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 rounded-xl flex justify-between items-center transition cursor-pointer shadow-sm"
                                                >
                                                    <span>
                                                    {/* Title */}
                                                    <h2 className="text-sm font-semibold text-blue-700">
                                                        {journal.title}
                                                    </h2>

                                                    {/* Content */}
                                                    <p className="text-gray-600 text-sm line-clamp-1">
                                                        {journal.content}
                                                    </p>

                                                    {/* Footer */}
                                                    <div className="flex justify-between text-sm text-gray-400">

                                                        <span>
                                                            Mood: {journal.mood}
                                                        </span>

                                                        <span>
                                                            {new Date(journal.createdAt).toLocaleDateString()}
                                                        </span>

                                                    </div>
                                                    </span>

                                                </div>
                                            ))
                                        ) : (

                                            <p className="text-gray-400">
                                                No journals yet. Start writing your first journal ✨
                                            </p>

                                        )
                                        }
                                    </div>
                                </div>)
                            }
                        </div>

                        <button className="text-left flex items-center gap-2 absolute bottom-6 left-3 right-6 text-red-500 hover:text-red-700"
                            onClick={logoutUser}>
                            <span><RxExit/></span>Logout
                        </button>
                    </div>

                </div>
            </div >
        </>
    );
};

export default ProfileSidebar;