import React, { useEffect } from 'react'
import Header from '../components/Header'
import heroImage from '../assets/heroImage.jpg'
import { useNavigate } from 'react-router-dom'
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
      <div className="relative min-h-[100dvh] w-full overflow-hidden">
        <div className="relative top-0 left-0 w-full z-20">
          <Header />
        </div>
        <img src={heroImage} className='absolute top-0 left-0 w-full h-full object-cover' />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/30"></div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-black/20 to-white"></div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-4xl mx-auto text-center text-white pt-24 sm:pt-28 md:pt-24 pb-12 sm:pb-16 md:pb-20">

            <p className="inline-flex items-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6">
              Your safe space for mental wellness
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6">
              Talk Freely.
              <br />
              Feel Better.
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-100/95 leading-relaxed mb-7 sm:mb-9">
              SoulTalk is your AI companion for mental wellness. Share your thoughts,
              reduce stress, and find calm conversations anytime, anywhere.
            </p>

            <button
              className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:bg-gray-200 transition"
              onClick={() => navigate("/chat")}
            >
              Start Chatting
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-14">

        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden"
        data-aos="fade-right">

          {/* LEFT SIDE IMAGE */}
          <div className="w-full md:w-2/5 h-40 sm:h-52 md:h-auto">
            <img
              src={JournaHero}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full md:w-3/5 flex flex-col justify-center p-4 sm:p-8 md:p-12 text-center md:text-left gap-5 sm:gap-8">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0582e9] mb-3 sm:mb-4 leading-tight">
                <span>Your Journal</span><br />
                <span>for a Healthier Mind</span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                Daily reflections to lift your mood, ease stress, and find balance. Free and private.
              </p>
            </div>

            <button className="text-base sm:text-lg text-gray-700 px-6 py-3 rounded-full w-full sm:w-fit mx-auto md:mx-0 border-2 border-blue-400 hover:bg-blue-50 transition"
              onClick={() => navigate("/journal")}>
              Start now
            </button>

          </div>
        </div>
      </div>

      {/* Calm Space hero below Journal section */}
      <div className="bg-gray-100 flex justify-center px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-14">
        <div
          className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col-reverse md:flex-row overflow-hidden"
        data-aos="fade-left"
        >
          {/* LEFT: Text */}
          <div className="w-full md:w-3/5 flex flex-col justify-center p-5 sm:p-8 md:p-12 text-center md:text-left gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0582e9] mb-3 sm:mb-4 leading-tight">
                Calm Space
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                Short breathing exercises, gentle meditations, and peaceful music
                designed to soften anxiety and help you feel a little lighter.
              </p>
            </div>
            <button
              className="text-base sm:text-lg text-[#0582e9] px-6 py-3 rounded-full w-full sm:w-fit mx-auto md:mx-0 border-2 border-[#0582e9] hover:bg-blue-50 transition"
              onClick={() => navigate("/calm-space")}
            >
              Explore Calm Space
            </button>
          </div>

          {/* RIGHT: Visual (reusing journal image for consistent look) */}
          <div className="w-full md:w-2/5 h-40 sm:h-52 md:h-auto">
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
