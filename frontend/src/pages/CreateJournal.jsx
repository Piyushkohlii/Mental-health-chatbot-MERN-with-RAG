import React, { useState } from "react";
import { JournalData } from "../context/JournalContext";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CreateJournal = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("neutral");

  const {createJournal } = JournalData();
  const navigate=useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();

    if (!content.trim()) return;
    
    const finalTitle =
  title.trim() === ""
    ? `Journal - ${new Date().toLocaleDateString()}`
    : title;

    createJournal(finalTitle, content, mood);
    
    navigate("/journal")

    setTitle("");
    setContent("");
    setMood("Neutral");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
    <main className="flex-1 py-12 px-6">
      <button
                onClick={() => navigate("/journal")}
                className="absolute left-10 top-7 text-xl flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
              >
                <FaArrowLeft />
                Back
              </button>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold text-[#0582e9]">
            New Journal
          </h1>

          <button type="submit" className="bg-[#0582e9] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={submitHandler}
          >
            Save
          </button>

        </div>

        {/* Date */}
        <p className="text-gray-400 mb-6">
          {new Date().toDateString()}
        </p>

        {/* Title */}
        <input
          type="text"
          placeholder="Journal Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-semibold outline-none border-b pb-3 mb-6"
        />

        {/* Mood selector */}
        <div className="flex items-center gap-4 mb-6">

          <span className="text-gray-500">Mood</span>

          <div className="flex gap-3 text-xl">

            <button type="button" className="hover:scale-110 transition" onClick={(e)=>setMood("Happy")}>😊</button>
            <button type="button" className="hover:scale-110 transition" onClick={(e)=>setMood("Calm")}>😌</button>
            <button type="button" className="hover:scale-110 transition" onClick={(e)=>setMood("Neutral")}>😐</button>
            <button type="button" className="hover:scale-110 transition" onClick={(e)=>setMood("Sad")}>😔</button>
            <button type="button" className="hover:scale-110 transition" onClick={(e)=>setMood("Anxious")}>😰</button>

          </div>

        </div>

        {/* Content */}
        <textarea
          placeholder="Write about your day..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[350px] outline-none resize-none text-gray-700 leading-relaxed"
        />

      </div>

    </main>
    </div>
  );
};

export default CreateJournal;