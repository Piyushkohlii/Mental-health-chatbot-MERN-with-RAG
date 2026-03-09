import React from "react";
import MoodAnalyticsCard from "../components/MoodAnalyticsCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MoodDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center">
                <button
                    onClick={() => navigate("/")}
                    className="absolute left-10 top-7 text-xl flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
                >
                    <FaArrowLeft />
                    Back
                </button>
                <div className="w-full max-w-6xl mx-6 my-16 bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#0582e9]">
                                Your Mood Dashboard
                            </h1>
                            <p className="text-gray-500 mt-2 text-sm md:text-base">
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