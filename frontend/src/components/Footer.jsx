import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0582e9] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold">
            S<span className="text-2xl">O</span>ulTalk
          </p>
          <p className="text-xs text-blue-100 mt-1">
            Not a replacement for professional help, but a gentle space to check in
            with yourself.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link to="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link to="/chat" className="hover:text-gray-200 transition">
            Chat
          </Link>
          <Link to="/journal" className="hover:text-gray-200 transition">
            Journal
          </Link>
          <Link to="/calm-space" className="hover:text-gray-200 transition">
            Calm Space
          </Link>
          <Link to="/moodDashboard" className="hover:text-gray-200 transition">
            Mood
          </Link>
        </div>
        <p className="text-[11px] text-blue-100 text-center md:text-right">
          If you are in crisis or feel unsafe, please reach out to a trusted person or
          local emergency services immediately.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

