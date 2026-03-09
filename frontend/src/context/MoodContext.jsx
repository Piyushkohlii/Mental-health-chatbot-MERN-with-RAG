import { createContext, useContext, useState } from "react";
import axios from "axios";
import { server } from "../main";
import { ChatData } from "./ChatContext";

const MoodContext = createContext()

export const MoodProvider = ({ children }) => {

    const { selected } = ChatData();

    const [dailyData, setDailyData] = useState([]);
    const [weeklyData, setWeeklyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);

    const buildChartData = (items, keyField) => {
        const map = {};

        items.forEach((item) => {
            const key = item[keyField];

            if (!map[key]) {
                map[key] = {
                    period: key,
                };
            }

            map[key][item.mood] = item.count;
        });

        return Object.values(map);
    };

    const fetchMoodAnalytics = async () => {

        if (!selected) {
            setDailyData([]);
            setWeeklyData([]);
            setMonthlyData([]);
            return;
        }

        try {
            const res = await axios.get(
                `${server}/api/v1/mood/analytics/${selected}`,
                { withCredentials: true }
            )
            const { daily, weekly, monthly } = res.data;

            setDailyData(buildChartData(daily, "date"));
            setWeeklyData(buildChartData(weekly, "label"));
            setMonthlyData(buildChartData(monthly, "label"));
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <MoodContext.Provider value={{ dailyData, weeklyData, monthlyData, fetchMoodAnalytics }}>
            {children}
        </MoodContext.Provider>
    )
}

export const MoodData = () => useContext(MoodContext);