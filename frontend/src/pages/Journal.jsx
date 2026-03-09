import React from "react";
import Journalimg from "../assets/jorunalunsplash.jpg"
import { useNavigate } from "react-router-dom";
import { JournalData } from "../context/JournalContext";
import { FaPlus } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";

const Journal = () => {

  const navigate = useNavigate()
  const { journals } = JournalData()

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        
        <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center">
          <button
          onClick={() => navigate("/")}
          className="absolute left-10 top-7 text-xl flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
        >
          <FaArrowLeft />
          Back
        </button>
          <div className=" h-screen w-full mx-10 my-20 bg-white rounded-xl shadow-lg flex overflow-hidden">

            {/* LEFT SIDE IMAGE */}
            <div className="w-2/5">
              <img
                src={Journalimg}
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-3/5 flex flex-col my-30 justify-between p-12">
              <div>
                <h1 className="text-5xl font-bold text-[#0582e9]  mb-4">
                  <span>Your Journal</span><br />
                  <span>for a Healthier Mind</span>
                </h1>

                <p className="text-gray-500 mb-8 leading-relaxed">
                  Daily reflections to lift your mood, ease stress, and find balance. Free and private.
                </p>
              </div>

              <button className="text-lg text-[#0582e9] px-6 py-3 rounded-4xl w-fit border-2 border-[#0582e9]"
                onClick={() => navigate("/createJournal")}>
                Create New Journal
              </button>

            </div>
          </div>
        </div>

        <div className="mx-20 mt-16 mb-10 flex items-center gap-4">

          <div className="flex-grow h-[2px] bg--[#0582e9]"></div>

          <span className="text-[#0582e9] font-bold text-4xl">
            Your Journal Entries
          </span>

          <div className="flex-grow h-[2px] bg--[#0582e9]"></div>

        </div>

        <section className=" bg-gray-100 mx-20 mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-2">

          <div
            onClick={() => navigate("/createJournal")}
            className="bg-white rounded-xl w-60 h-64 shadow-md p-6 my-5 flex flex-col justify-center items-center cursor-pointer hover:shadow-lg hover:scale-105 transition border-2 border-dashed border-blue-300"
          >

            <span className="text-5xl text-blue-500 mb-4"><FaPlus className="text-4xl text-blue-500 mb-4" /></span>

            <h2 className="text-lg font-semibold text-gray-700">
              Create New Journal
            </h2>

            <p className="text-sm text-gray-400 text-center mt-2">
              Reflect on your day and track your emotions
            </p>

          </div>

          {journals && journals.length > 0 ? (

            journals.map((journal) => (

              <div
                key={journal._id}
                onClick={() => navigate(`/journal/${journal._id}`)}
                className="bg-white rounded-xl w-60 h-64 my-5 shadow-md p-6 hover:shadow-lg transition"
              >

                {/* Title */}
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {journal.title}
                </h2>

                {/* Content */}
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {journal.content}
                </p>

                {/* Footer */}
                <div className="flex justify-between text-sm text-gray-400">

                  <span>
                    Mood: {journal.mood}
                  </span>

                  <span>
                    {new Date(journal.createdAt).toLocaleDateString()}
                  </span>

                </div>

              </div>

            ))

          ) : (

            <p className="text-gray-400">
              No journals yet. Start writing your first journal ✨
            </p>

          )}
        </section>

        <Footer />
      </div>
    </>
  )

}

export default Journal;