import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoPng from '../assets/logo.png'

export default function SplashScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 600)
    }, 2500)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #1a0a1e 0%, #3b0764 50%, #1a0a1e 100%)',
          }}
        >
          {/* Soft glow */}
          <div className="absolute w-72 h-72 rounded-full bg-pink-500/20 blur-3xl" />

          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Logo */}
            <img
              src={logoPng}
              alt="Write Your Own Script"
              className="w-24 h-24 rounded-full object-cover border-4 border-pink-400/50 shadow-2xl"
            />

            {/* Brand name */}
            <div className="text-center">
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight">
                Write Your Own
              </h1>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 leading-tight">
                Script
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-pink-200/70 text-sm tracking-widest uppercase">
              Life Coaching
            </p>

            {/* Loading dots */}
            <div className="flex gap-2 mt-4">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-pink-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
