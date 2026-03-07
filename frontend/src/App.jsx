import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import Chat from './pages/chat'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  )
}

export default App
