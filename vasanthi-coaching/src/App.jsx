import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProgramPage from './pages/ProgramPage'
import PhoenixPage from './pages/PhoenixPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/program/:id" element={<ProgramPage />} />
      <Route path="/phoenix-women" element={<PhoenixPage />} />
    </Routes>
  )
}

export default App
