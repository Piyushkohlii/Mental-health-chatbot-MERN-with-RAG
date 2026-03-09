import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JournalData } from "../context/JournalContext";
import { FaArrowLeft } from "react-icons/fa";

const SingleJournal = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { getSingleJournal } = JournalData();

  const [journal, setJournal] = useState(null);

  useEffect(() => {
    loadJournal();
  }, []);

  const loadJournal = async () => {

    const data = await getSingleJournal(id);

    if (data) {
      setJournal(data);
    }

  };

  if (!journal) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading journal...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <main className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10">

          {/* Back Button */}
          <button
            onClick={() => navigate("/journal")}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
          >
            <FaArrowLeft />
            Back
          </button>

          {/* Title */}
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            {journal.title}
          </h1>

          {/* Date */}
          <p className="text-gray-400 mb-6">
            {new Date(journal.createdAt).toLocaleString()}
          </p>

          {/* Mood */}
          <div className="mb-6">
            <span className="text-gray-500">Mood:</span>
            <span className="ml-2 text-blue-600 font-semibold">
              {journal.mood}
            </span>
          </div>

          {/* Divider */}
          <hr className="mb-6"/>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {journal.content}
          </p>

        </div>
      </main>
    </div>
  );
};

export default SingleJournal;