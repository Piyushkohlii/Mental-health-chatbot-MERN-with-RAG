import React from 'react'
import Header from '../components/Header'
import heroImage from '../assets/heroImage.jpg'

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative top-0 left-0 w-full z-20">
        <Header />
      </div>
      <img src={heroImage} className='absolute top-0 left-0 w-full h-full object-cover' />
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-5xl font-bold mb-6">
          Talk Freely. Feel Better.
        </h1>

        <p className="max-w-xl text-lg mb-8 text-gray-200">
          SoulTalk is your AI companion for mental wellness. 
          Share your thoughts, reduce stress, and find calm conversations anytime.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Start Chatting
        </button>
        </div>
    </div>
  )
}

export default Home
