import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title:{
        type: String,
        required: true,
        default : "Untitled"
    },

    content:{
        type: String,
        required: true
    },

    mood:{
        type: String,
        enum:["Happy","Sad","Anxious","Calm","Neutral"],
        default:"Neutral"
    }

},{timestamps:true});

export const Journal = mongoose.model("Journal", journalSchema);