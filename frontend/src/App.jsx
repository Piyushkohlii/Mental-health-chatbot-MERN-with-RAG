import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Resources from './pages/Resources'
import Chat from './pages/chat'
import Journal from './pages/Journal'
import AuthChat from './components/AuthChat'
import CreateJournal from "./pages/CreateJournal"
import SingleJournal from "./pages/SingleJournal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<AuthChat><Chat/></AuthChat>} />
      <Route path="/journal" element={<AuthChat><Journal/></AuthChat>} />
      <Route path="/createJournal" element={<CreateJournal/>}/>
      <Route path="/journal/:id" element={<SingleJournal />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  )
}

export default App
