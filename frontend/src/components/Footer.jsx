import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
return ( <footer className="bg-[#0582e9] text-white mt-16"> <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Brand Section */}
    <div>
      <p className="text-lg font-semibold">
        S<span className="text-2xl">O</span>ulTalk
      </p>
      <p className="text-sm text-blue-100 mt-2 leading-relaxed">
        A supportive AI space to reflect, journal, and talk through your thoughts.
        SoulTalk helps you check in with your emotions and build healthier mental habits.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-3">Quick Links</h3>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/about" className="hover:text-gray-200 transition">About</Link>
        <Link to="/chat" className="hover:text-gray-200 transition">Chat</Link>
        <Link to="/journal" className="hover:text-gray-200 transition">Journal</Link>
        <Link to="/calm-space" className="hover:text-gray-200 transition">Calm Space</Link>
        <Link to="/moodDashboard" className="hover:text-gray-200 transition">Mood Dashboard</Link>
      </div>
    </div>

    {/* Support */}
    <div>
      <h3 className="font-semibold mb-3">Support</h3>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/privacy-policy" className="hover:text-gray-200 transition">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-gray-200 transition">Terms of Service</Link>
        <Link to="/help" className="hover:text-gray-200 transition">Help Center</Link>
        <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
      </div>
    </div>

    {/* Social / Contact */}
    <div>
      <h3 className="font-semibold mb-3">Connect</h3>
      <div className="flex items-center gap-4 text-xl">
        <a href="#" className="hover:text-gray-200 transition"><FaGithub /></a>
        <a href="#" className="hover:text-gray-200 transition"><FaLinkedin /></a>
        <a href="mailto:support@soultalk.com" className="hover:text-gray-200 transition"><FaEnvelope /></a>
      </div>

      <p className="text-xs text-blue-100 mt-4 leading-relaxed">
        Not a replacement for professional help, but a gentle space to check in
        with yourself.
      </p>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-blue-400 text-center py-4 text-xs text-blue-100 px-4">
    <p>
      © {new Date().getFullYear()} SoulTalk. All rights reserved.
    </p>
    <p className="mt-1">
      If you are in crisis or feel unsafe, please reach out to a trusted person
      or local emergency services immediately.
    </p>
  </div>
</footer>
);
};

export default Footer;
