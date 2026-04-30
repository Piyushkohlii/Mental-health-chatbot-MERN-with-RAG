import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-[100dvh] flex flex-col">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="relative top-0 left-0 w-full z-20">
          <Header />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-400" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-black/10 to-white" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Built for Gentle Check‑ins
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-blue-100">
            SoulTalk is designed to make it easier to talk about what&apos;s on your mind,
            track how you feel, and take small steps toward feeling lighter and more grounded.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-gray-100">
        <section className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0582e9] mb-4">
              What SoulTalk is about
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SoulTalk is a mental wellness companion that helps you express your thoughts
              through gentle conversations, private journaling, mood tracking, and calming
              practices. It&apos;s here for late‑night overthinking, heavy days, and small
              moments when you just need somewhere safe to put your feelings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              While SoulTalk uses AI, the intention behind every feature is human:
              more self‑awareness, kinder self‑talk, and practical tools you can use in
              real life when anxiety or stress show up.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-[#0582e9] mb-3">
              Important note
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              SoulTalk is <span className="font-semibold">not a crisis service</span> or
              a replacement for professional mental health care.
              If you ever feel unsafe, overwhelmed, or think you might hurt yourself or
              someone else, please contact a trusted person, local helpline, or emergency
              services right away.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16 grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Chat to unpack</h3>
            <p className="text-gray-600 text-sm">
              Share what&apos;s on your mind without judgment. The AI gently reflects,
              offers perspective, and helps you slow your thoughts down.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Journal to reflect</h3>
            <p className="text-gray-600 text-sm">
              Capture your days, name your emotions, and look back on how far you&apos;ve
              come through your own words.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Calm your body</h3>
            <p className="text-gray-600 text-sm">
              Use Calm Space to breathe, ground, and reset with small practices and calm
              sounds when stress feels heavy.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
