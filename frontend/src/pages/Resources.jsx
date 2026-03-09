import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="relative h-[40vh] w-full overflow-hidden">
        <div className="relative top-0 left-0 w-full z-20">
          <Header />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400" />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-black/10 to-white" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Gentle Resources
          </h1>
          <p className="max-w-xl text-sm md:text-base text-blue-100">
            A small collection of ideas, reminders, and supports that pair well with
            your chats and journaling.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-gray-100">
        <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Everyday check‑in prompts
            </h2>
            <p className="text-gray-600 text-sm">
              Try questions like &quot;What felt heavy today?&quot; or
              &quot;What is one small thing I&apos;m grateful for?&quot; in your journal
              or chat when you&apos;re not sure where to start.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Movement & body breaks
            </h2>
            <p className="text-gray-600 text-sm">
              Short walks, stretching, or even standing up for a minute can support what
              you&apos;re processing mentally.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              When to seek help
            </h2>
            <p className="text-gray-600 text-sm">
              If your thoughts feel too heavy to manage alone or you&apos;re worried
              about your safety, reaching out to a trusted person or professional is a
              strong and important step.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
