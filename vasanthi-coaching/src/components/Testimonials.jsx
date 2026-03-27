import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Marketing Professional',
    initials: 'PS',
    color: 'from-pink-500 to-rose-500',
    text: 'Working with Vasanthi completely changed how I see myself. I went from constantly second-guessing every decision to leading my team with confidence. The clarity I gained was life-changing.',
    stars: 5,
  },
  {
    name: 'Ananya R.',
    role: 'Engineering Student',
    initials: 'AR',
    color: 'from-purple-500 to-violet-500',
    text: 'I was so lost about my career path and couldn\'t stop overthinking. Vasanthi helped me find my direction and actually believe in myself. I got placed in my dream company after our sessions!',
    stars: 5,
  },
  {
    name: 'Meera K.',
    role: 'Entrepreneur',
    initials: 'MK',
    color: 'from-pink-600 to-purple-600',
    text: 'I was burned out, emotionally drained, and had completely lost myself. The Phoenix Women program gave me back my identity. I now run my business with joy instead of fear.',
    stars: 5,
  },
  {
    name: 'Divya M.',
    role: 'Teacher',
    initials: 'DM',
    color: 'from-rose-500 to-pink-600',
    text: 'I never thought I deserved to invest in myself. Vasanthi showed me that self-love isn\'t selfish — it\'s essential. My relationships, my work, my entire life improved.',
    stars: 5,
  },
  {
    name: 'Kavitha T.',
    role: 'MBA Student',
    initials: 'KT',
    color: 'from-violet-500 to-purple-600',
    text: 'The mindset shifts I experienced with Vasanthi are permanent. She doesn\'t just give you tools — she helps you understand WHY you think the way you do. That awareness transformed everything.',
    stars: 5,
  },
  {
    name: 'Lakshmi P.',
    role: 'Homemaker turned Coach',
    initials: 'LP',
    color: 'from-purple-500 to-pink-500',
    text: 'At 38, I thought it was too late to start over. Vasanthi proved me wrong. I discovered my purpose, built my confidence, and launched my own coaching practice.',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
