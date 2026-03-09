import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaWind, FaHeart, FaMusic } from "react-icons/fa";

const exercises = [
  {
    title: "Box Breathing (4-4-4-4)",
    description:
      "Inhale for 4 seconds, hold for 4, exhale for 4, and pause for 4. Repeat 4–6 times to quickly calm your nervous system.",
    duration: "2–4 minutes",
  },
  {
    title: "5–4–3–2–1 Grounding",
    description:
      "Notice 5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell, and 1 you can taste to come back to the present.",
    duration: "3–5 minutes",
  },
  {
    title: "Shoulder Drop Release",
    description:
      "Gently tense your shoulders up towards your ears, hold for 5 seconds, then exhale and drop them. Repeat 5–7 times to release tension.",
    duration: "2–3 minutes",
  },
];

const meditations = [
  {
    title: "2-Minute Mini Reset",
    description:
      "Close your eyes, place a hand on your chest, and simply follow your breath in and out. Each exhale, silently repeat: “I am safe right now.”",
    duration: "2 minutes",
  },
  {
    title: "Body Scan Check-in",
    description:
      "Scan slowly from head to toes, noticing any tight or heavy areas without judgment. Breathe softness into each part you notice.",
    duration: "5–7 minutes",
  },
  {
    title: "Compassion Pause",
    description:
      "Place a hand over your heart and gently tell yourself what you’d say to a close friend going through the same thing.",
    duration: "3–5 minutes",
  },
];

const music = [
  {
    title: "Gentle Piano Focus",
    description: "Soft piano designed to lower stress and support gentle focus.",
    link: "https://www.youtube.com/results?search_query=gentle+piano+relaxing+music",
  },
  {
    title: "Rain & Nature Sounds",
    description: "Ambient rain, forest, and ocean sounds to help your body unwind.",
    link: "https://www.youtube.com/results?search_query=rain+sounds+for+relaxing",
  },
  {
    title: "Deep Calm Ambient",
    description: "Slow ambient tones that create a quiet, safe atmosphere.",
    link: "https://www.youtube.com/results?search_query=calm+ambient+music",
  },
];

const CalmSpace = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="absolute left-10 top-7 text-xl flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
      >
        <FaArrowLeft />
        Back
      </button>

      {/* Hero */}
      <main className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left content */}
          <div className="w-full md:w-3/5 p-10 flex flex-col justify-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0582e9] mb-3">
                Calm Space
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                A gentle corner inside SoulTalk with quick exercises, mini meditations,
                and peaceful music to help you soften anxiety and stress.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center">
                  <FaWind />
                </div>
                <span className="text-gray-700 font-medium">Breathing</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center">
                  <FaHeart />
                </div>
                <span className="text-gray-700 font-medium">Meditation</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0582e9] flex items-center justify-center">
                  <FaMusic />
                </div>
                <span className="text-gray-700 font-medium">Calm Music</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              You can come back here anytime you feel overwhelmed, restless, or just
              want a small moment of peace.
            </p>
          </div>

          {/* Right visual */}
          <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center p-8">
            <div className="relative w-full h-64 md:h-80 rounded-3xl bg-blue-50 shadow-inner flex items-center justify-center overflow-hidden">
              <div className="absolute -top-10 -left-10 h-40 w-40 bg-blue-200 rounded-full opacity-50" />
              <div className="absolute -bottom-16 -right-10 h-48 w-48 bg-green-200 rounded-full opacity-50" />
              <div className="relative z-10 text-center px-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#0582e9] mb-3">
                  breathe · release · reset
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Take a slow breath.
                </h2>
                <p className="text-gray-600 text-sm">
                  Even a few mindful minutes can gently shift your nervous system from
                  “fight or flight” into “rest and restore”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Content sections */}
      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-12 flex-1">
        {/* Exercises */}
        <div>
          <h2 className="text-2xl font-bold text-[#0582e9] mb-3">
            Quick Calm Exercises
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Use these when your thoughts feel fast, your body feels tense, or you just
            need a gentle reset.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {exercises.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md border border-blue-100 p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                </div>
                <span className="text-xs font-medium text-[#0582e9]">
                  Suggested time: {item.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Meditations */}
        <div>
          <h2 className="text-2xl font-bold text-[#0582e9] mb-3">
            Short Guided Meditations
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            You don&apos;t need to clear your mind—just notice, breathe, and let things
            soften a little.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {meditations.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md border border-blue-100 p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                </div>
                <span className="text-xs font-medium text-[#0582e9]">
                  Suggested time: {item.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Music */}
        <div>
          <h2 className="text-2xl font-bold text-[#0582e9] mb-3">
            Calm & Peaceful Music
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            These are safe starting points—feel free to explore and find sounds that
            feel soothing for you.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {music.map((track) => (
              <div
                key={track.title}
                className="bg-white rounded-xl shadow-md border border-blue-100 p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {track.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{track.description}</p>
                </div>
                <a
                  href={track.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-medium text-white bg-[#0582e9] px-4 py-2 rounded-full hover:bg-blue-600 transition text-center"
                >
                  Open playlist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CalmSpace;

