import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import WaveDivider from './WaveDivider'

const BG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"

const steps = [
  {
    from: 'Confusion', to: 'Clarity', icon: '🌫️', toIcon: '🎯',
    desc: 'Stop spinning in circles. Get crystal-clear on who you are, what you want, and exactly how to get there.',
  },
  {
    from: 'Self-Doubt', to: 'Confidence', icon: '😔', toIcon: '💎',
    desc: 'Silence the inner critic. Build unshakeable belief in yourself that no one can take away.',
  },
  {
    from: 'Procrastination', to: 'Action', icon: '⏳', toIcon: '⚡',
    desc: 'Break the cycle of waiting for the "right time." Start moving toward your dreams today.',
  },
]

export default function Transformation() {
  const [ref, inView] = useInView()

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a4e 60%, #4a0a3e 100%)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${BG})` }} />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-4 border border-pink-500/30">
            ✨ Your Journey
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Transformation
            </span>{' '}
            Story
          </h2>
          <p className="text-pink-200/70 mt-4 text-lg max-w-xl mx-auto">
            Every journey begins with a single decision. This is what's possible for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.from}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2 mb-6">
                {/* From */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-14 h-14 rounded-full bg-white/15 border border-white/30 flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-2xl leading-none">{step.icon}</div>
                  </div>
                  <div>
                    <div className="text-pink-300/60 text-xs uppercase tracking-widest">From</div>
                    <div className="text-pink-200 font-semibold text-lg">{step.from}</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 py-1">
                  <div className="w-px h-4 bg-gradient-to-b from-pink-400 to-purple-400" />
                  <div className="text-pink-400 text-base">↓</div>
                  <div className="w-px h-4 bg-gradient-to-b from-purple-400 to-pink-400" />
                </div>

                {/* To */}
                <div className="flex items-center gap-3 w-full">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500/40 to-purple-500/40 border border-pink-400/40 flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-2xl leading-none">{step.toIcon}</div>
                  </div>
                  <div>
                    <div className="text-pink-300/60 text-xs uppercase tracking-widest">To</div>
                    <div className="text-white font-bold text-lg">{step.to}</div>
                  </div>
                </div>
              </div>
              <p className="text-pink-100/80 text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <blockquote className="font-playfair text-2xl md:text-3xl text-white/90 italic max-w-3xl mx-auto leading-relaxed">
            "The woman you are becoming will cost you people, habits, and comfort. But she is worth every sacrifice."
          </blockquote>
        </motion.div>
      </div>

      {/* Wave out — white below */}
    </section>
  )
}
