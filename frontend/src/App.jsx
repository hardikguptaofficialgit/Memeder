import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import LikedMemes from './pages/LikedMemes';
import DislikedMemes from './pages/DislikedMemes';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/liked" element={<LikedMemes />} />
        <Route path="/disliked" element={<DislikedMemes />} />
      </Routes>
    </div>
  )
}

export default App
