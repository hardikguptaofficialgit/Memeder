import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div>
      <nav className='flex gap-3 justify-center items-center bg-amber-700 p-3'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
