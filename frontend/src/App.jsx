import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Chat from './pages/Chat'
import Resources from './pages/Resources'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  )
}

export default App
