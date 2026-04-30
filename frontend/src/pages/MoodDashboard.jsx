import React from "react";
import MoodAnalyticsCard from "../components/MoodAnalyticsCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MoodDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-[100dvh] flex flex-col px-3 sm:px-4 md:px-6">
            <div className="flex-1 flex items-start md:items-center justify-center py-16 sm:py-20">
                <button
                    onClick={() => navigate("/")}
                    className="absolute left-4 sm:left-8 md:left-10 top-5 sm:top-7 text-base sm:text-lg md:text-xl flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
                >
                    <FaArrowLeft />
                    Back
                </button>
                <div className="w-full max-w-6xl mx-auto my-6 sm:my-8 md:my-16 bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0582e9]">
                                Your Mood Dashboard
                            </h1>
                            <p className="text-gray-500 mt-2 text-sm sm:text-base">
                                Understand your emotional patterns across days, weeks, and months.
                            </p>
                        </div>
                    </div>

                    <MoodAnalyticsCard />
                </div>
            </div>
        </div>
    );
};

export default MoodDashboard;