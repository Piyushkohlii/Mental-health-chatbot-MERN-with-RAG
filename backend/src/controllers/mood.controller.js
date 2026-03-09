import mongoose from "mongoose";
import { Conversation } from "../models/conversation.model.js";

export const getMoodAnalytics = async (req, res) => {
  try {

    const chatId = req.params.chatId;

    if (!mongoose.Types.ObjectId.isValid(chatId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid chat id",
      });
    }

    const matchStage = {
      chat: new mongoose.Types.ObjectId(chatId),
    };

    const [dailyAgg, weeklyAgg, monthlyAgg] = await Promise.all([
      // Daily moods per day
      Conversation.aggregate([
        { $match: matchStage },
        {
          $group: {
            _id: {
              date: {
                $dateToString: {
                  format: "%Y-%m-%d",
                  date: "$createdAt",
                },
              },
              mood: "$mood",
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.date": 1 } },
      ]),
      // Weekly moods (ISO week)
      Conversation.aggregate([
        { $match: matchStage },
        {
          $group: {
            _id: {
              year: { $isoWeekYear: "$createdAt" },
              week: { $isoWeek: "$createdAt" },
              mood: "$mood",
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.year": 1, "_id.week": 1 } },
      ]),
      // Monthly moods
      Conversation.aggregate([
        { $match: matchStage },
        {
          $group: {
            _id: {
              year: { $year: "$createdAt" },
              month: { $month: "$createdAt" },
              mood: "$mood",
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } },
      ]),
    ]);

    const daily = dailyAgg.map((item) => ({
      date: item._id.date,
      mood: item._id.mood,
      count: item.count,
    }));

    const weekly = weeklyAgg.map((item) => ({
      year: item._id.year,
      week: item._id.week,
      label: `W${item._id.week}-${item._id.year}`,
      mood: item._id.mood,
      count: item.count,
    }));

    const monthly = monthlyAgg.map((item) => ({
      year: item._id.year,
      month: item._id.month,
      label: `${item._id.year}-${String(item._id.month).padStart(2, "0")}`,
      mood: item._id.mood,
      count: item.count,
    }));

    res.status(200).json({
      success: true,
      daily,
      weekly,
      monthly,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching mood analytics",
    });
  }
};