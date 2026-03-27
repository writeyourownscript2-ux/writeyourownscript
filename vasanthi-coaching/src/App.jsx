import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProgramPage from './pages/ProgramPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/program/:id" element={<ProgramPage />} />
    </Routes>
  )
}

export default App
