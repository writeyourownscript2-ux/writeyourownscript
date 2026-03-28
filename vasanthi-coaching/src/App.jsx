import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProgramPage from './pages/ProgramPage'
import PhoenixPage from './pages/PhoenixPage'
import SplashScreen from './components/SplashScreen'

function App() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      <SplashScreen onDone={() => setSplashDone(true)} />
      {splashDone && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:id" element={<ProgramPage />} />
          <Route path="/phoenix-women" element={<PhoenixPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
