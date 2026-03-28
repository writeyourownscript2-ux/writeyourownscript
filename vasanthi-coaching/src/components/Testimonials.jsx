import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    name: 'Sivashankari',
    role: 'Vice President, IV Meditation School',
    initials: 'SS',
    color: 'from-pink-500 to-rose-500',
    text: 'I have learned how to set clear intentions. The session gave clarity on how to choose ambitions or role models and how to imbibe their qualities in us. I also learned about gratitude and I will practice it regularly.',
    stars: 5,
  },
  {
    name: 'Sahana',
    role: 'Student, Class 10 (Age 14)',
    initials: 'SA',
    color: 'from-purple-500 to-violet-500',
    text: 'After attending this session I learned how to fix the goal and vision of my life. I have learned to say gratitude and I now feel grateful for all the things I have received from God. Earlier I don\'t like to study — it was like "why should I study?" Now I have changed my mindset. Now I am choosing to study. I thank our life coach for giving us the clarity on what we should do and how we should do.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section id="testimonials" className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Success Stories</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Real People,{' '}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            These are the stories that fuel my purpose every single day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {Array(t.stars).fill(0).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-base italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                {/* Initials avatar — no fake photos */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{t.name}</div>
                  <div className="text-pink-500 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
