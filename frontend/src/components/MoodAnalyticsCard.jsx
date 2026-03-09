import React, { useEffect } from "react";
import { MoodData } from "../context/MoodContext";
import { ChatData } from "../context/ChatContext";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const MoodAnalyticsCard = () => {

    const { selected } = ChatData();
    const { dailyData, weeklyData, monthlyData, fetchMoodAnalytics } = MoodData();

    useEffect(() => {
        fetchMoodAnalytics();
    }, [selected, fetchMoodAnalytics]);

    const renderChart = (title, data, xLabel) => (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
            {data.length === 0 ? (
                <p className="text-gray-400 text-sm">No mood data available yet.</p>
            ) : (
                <div className="w-full h-64 md:h-72 bg-blue-50/40 rounded-xl border border-blue-100 px-2 py-3">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis
                                dataKey="period"
                                tick={{ fontSize: 11 }}
                                label={{ value: xLabel, position: "insideBottom", offset: -5, fontSize: 11 }}
                            />
                            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                            <Tooltip />
                            <Legend wrapperStyle={{ fontSize: 11 }} />
                            <Line type="monotone" dataKey="happy" stroke="#22c55e" strokeWidth={2} dot={false} name="Happy" />
                            <Line type="monotone" dataKey="sad" stroke="#3b82f6" strokeWidth={2} dot={false} name="Sad" />
                            <Line type="monotone" dataKey="anxiety" stroke="#f97316" strokeWidth={2} dot={false} name="Anxiety" />
                            <Line type="monotone" dataKey="anger" stroke="#ef4444" strokeWidth={2} dot={false} name="Anger" />
                            <Line type="monotone" dataKey="neutral" stroke="#6b7280" strokeWidth={2} dot={false} name="Neutral" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#0582e9]">Mood Analytics</h2>
            <p className="text-sm text-gray-500 mb-6">
                Track how your emotions shift over time across your conversations.
            </p>
            {renderChart("Daily Mood (per day)", dailyData, "Date")}
            {renderChart("Weekly Mood (per ISO week)", weeklyData, "Week")}
            {renderChart("Monthly Mood (per month)", monthlyData, "Month")}
        </div>
    );
};

export default MoodAnalyticsCard;

