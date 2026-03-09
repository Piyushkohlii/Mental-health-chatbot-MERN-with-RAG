import React, { useEffect } from 'react'
import Header from '../components/Header'
import heroImage from '../assets/heroImage.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import SoulTalkHelps from '../components/SoulTalkHelps'
import SoulTalkWorks from '../components/SoulTalkWorks'
import SoulTalkBenefits from '../components/SoulTalkBenifits'
import SoulTalkCTA from '../components/SoulTalkCTA'
import Footer from '../components/Footer'
import JournaHero from "../assets/journalHero.jpg"
import AOS from "aos";
import CalmSpace from "../assets/calmSpace.jpg"



const Home = () => {
  useEffect(() => {
          AOS.init({
              duration: 1000,
              once: false
          });
      }, []);
  const navigate = useNavigate()
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="relative top-0 left-0 w-full z-20">
          <Header />
        </div>
        <img src={heroImage} className='absolute top-0 left-0 w-full h-full object-cover' />
        {/* Dark overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div> */}

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-black/20 to-white"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

          <h1 className="text-5xl font-bold mb-6">
            Talk Freely. Feel Better.
          </h1>

          <p className="max-w-xl text-lg mb-8 text-gray-200">
            SoulTalk is your AI companion for mental wellness.
            Share your thoughts, reduce stress, and find calm conversations anytime.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            onClick={() => navigate("/chat")}>
            Start Chatting
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-100"></div>

      <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center">

        <div className=" h-screen w-full mx-10 my-20 bg-white rounded-xl shadow-lg flex overflow-hidden"
        data-aos="fade-right">

          {/* LEFT SIDE IMAGE */}
          <div className="w-2/5">
            <img
              src={JournaHero}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-3/5 flex flex-col my-30 justify-between p-12">
            <div>
              <h1 className="text-5xl font-bold text-[#0582e9] mb-4">
                <span>Your Journal</span><br />
                <span>for a Healthier Mind</span>
              </h1>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Daily reflections to lift your mood, ease stress, and find balance. Free and private.
              </p>
            </div>

            <button className="text-lg text-gray-600 px-6 py-3 rounded-4xl w-fit border-2 border-blue-400"
              onClick={() => navigate("/journal")}>
              Start now
            </button>

          </div>
        </div>
      </div>

      {/* Calm Space hero below Journal section */}
      <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center">
        <div
          className="h-screen w-full mx-10 my-20 bg-white rounded-xl shadow-lg flex overflow-hidden"
        data-aos="fade-left"
        >
          {/* LEFT: Text */}
          <div className="w-3/5 flex flex-col my-30 justify-between p-12">
            <div>
              <h2 className="text-5xl font-bold text-[#0582e9] mb-4">
                Calm Space
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Short breathing exercises, gentle meditations, and peaceful music
                designed to soften anxiety and help you feel a little lighter.
              </p>
            </div>
            <button
              className="text-lg text-[#0582e9] px-6 py-3 rounded-4xl w-fit border-2 border-[#0582e9] hover:bg-blue-50 transition"
              onClick={() => navigate("/calm-space")}
            >
              Explore Calm Space
            </button>
          </div>

          {/* RIGHT: Visual (reusing journal image for consistent look) */}
          <div className="w-2/5">
            <img
              src={CalmSpace}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <SoulTalkHelps />
      <SoulTalkWorks />
      <SoulTalkBenefits />
      <SoulTalkCTA />
      <Footer />
    </>
  )
}

export default Home
