import React from "react";
import { UserData } from "../context/UserContext";
import { ChatData } from "../context/ChatContext";
import { JournalData } from "../context/JournalContext";
import MoodAnalyticsCard from "../components/MoodAnalyticsCard";
import { FaArrowLeft, FaRegCalendarCheck, FaRegSmile, FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const { activeUser } = UserData();
    const { chats } = ChatData();
    const { journals } = JournalData();

    const totalChats = chats?.length || 0;
    const totalJournals = journals?.length || 0;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <button
                onClick={() => navigate("/")}
                className="absolute left-10 top-7 text-xl flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
            >
                <FaArrowLeft />
                Back
            </button>

            <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-6 my-16 bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                {/* Left: profile summary */}
                <div className="w-full md:w-2/5 bg-blue-50/70 border-r border-blue-100 p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center font-semibold text-3xl">
                                {activeUser?.fullName?.charAt(0) || "S"}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-[#0582e9]">
                                    {activeUser?.fullName || "SoulTalk User"}
                                </h1>
                                <p className="text-gray-500 text-sm">
                                    {activeUser?.email || "Your safe space for mental wellness"}
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            This is your personal wellbeing hub. Track your mood, reflect through journals,
                            and notice how your emotional patterns change over time with SoulTalk.
                        </p>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-3 bg-white rounded-xl border border-blue-100 px-4 py-3 shadow-sm">
                                <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center">
                                    <FaRegCalendarCheck />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-400">Chats</p>
                                    <p className="text-lg font-semibold text-gray-800">{totalChats}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-xl border border-blue-100 px-4 py-3 shadow-sm">
                                <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center">
                                    <FaBookOpen />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-400">Journals</p>
                                    <p className="text-lg font-semibold text-gray-800">{totalJournals}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-xl border border-blue-100 px-4 py-3 shadow-sm">
                                <div className="w-9 h-9 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center">
                                    <FaRegSmile />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-400">Wellness focus</p>
                                    <p className="text-sm font-semibold text-gray-800">
                                        Emotional awareness & reflection
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-xs text-gray-400">
                        Your conversations and journals are private and designed to support your mental wellbeing.
                    </div>
                </div>

                {/* Right: mood analytics */}
                <div className="w-full md:w-3/5 p-8">
                    <MoodAnalyticsCard />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;

