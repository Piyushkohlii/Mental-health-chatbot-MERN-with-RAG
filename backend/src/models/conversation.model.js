import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Chats",
        required : true,
    },
    question:{
        type:String,
        required : true
    },
    answer:{
        type:String,
        required : true
    },
    mood: {
      type: String,
      enum: ["happy", "sad", "anxiety", "anger", "neutral"],
      default: "neutral",
    },

},{timestamps:true})

export const Conversation = mongoose.model("Conversation",conversationSchema)