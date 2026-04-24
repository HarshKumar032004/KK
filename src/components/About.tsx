'use client';
import { CheckCircle2, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const highlights = [
  { year: '1996', text: 'Joined the Administrative Service of Bihar, marking the beginning of a distinguished career in public administration.' },
  { year: '2010', text: 'Promoted to the position of Sub-Divisional Magistrate (SDM) in Jharkhand, taking on key responsibilities in governance and district administration.' },
  { year: '2015', text: 'Elevated to the role of Additional Collector, contributing significantly to revenue administration and public service delivery.' },
  { year: '2019', text: 'Promoted to the rank of Joint Secretary, Government of Jharkhand, playing a vital role in policy formulation and implementation at the state level.' },
  { year: '2022', text: 'Advanced to the position of Additional Secretary, Government of Jharkhand, further strengthening leadership in administrative governance.' },
  { year: '2026', text: 'Retired from the Indian Administrative Service (IAS) after years of dedicated and impactful service.' },
  { year: '2026', text: 'Embarked on a second innings of life by joining Vestige, embracing new opportunities in the field of business and personal growth.' },
];

const credentials = [
  'M.A. in Psychology, Delhi University',
  'Faculty of Law, Delhi University',
  'Post Graduate Diploma in Personnel Management and Industrial Relations, Bharatiya Vidya Bhavan, Delhi',
  'Netarhat School, Ranchi'
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 md:order-1"
          >
            <div className="relative w-full max-w-[280px] md:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(20,184,166,0.2)' }}>
              <Image
                src="/WhatsApp Image 2026-03-30 at 8.18.38 PM (1).jpeg"
                alt="KK Singh Portrait"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating award badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 md:-right-4 glass rounded-xl p-3 md:p-4 text-center z-10"
            >
              <div className="text-2xl md:text-3xl mb-1">🏆</div>
              <div className="text-[10px] md:text-xs font-semibold text-white">National Award</div>
              <div className="text-[10px] md:text-xs" style={{ color: 'var(--accent)' }}>Excellence in Administration</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <div className="section-tag justify-center md:justify-start">About KK Singh</div>
            <h2 className="section-title mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              A Lifetime of Service,{' '}
              <br className="hidden md:block" />
              <span className="text-gradient-teal">Now Empowering</span> Others
            </h2>
            <p className="leading-relaxed mb-5 text-sm md:text-base text-left" style={{ color: 'var(--text-secondary)' }}>
              K.K. Singh is a distinguished former IAS officer of the{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Jharkhand Cadre </strong> who spent over three decades shaping policy at State and Central Government levels. Known for his transformative approach to governance, he implemented landmark welfare schemes impacting millions.
            </p>
            <p className="leading-relaxed mb-8 text-sm md:text-base text-left" style={{ color: 'var(--text-secondary)' }}>
              Post-retirement, KK Singh mentors aspiring entrepreneurs,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>business owners</strong>, and corporate leaders, helping them build clarity, confidence, and sustainable growth across India.
            </p>

            <div className="space-y-3 mb-8 text-left">
              {credentials.map((c, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  key={i} className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }} className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  <span className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{c}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary justify-center">Connect With Me</a>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <div className="section-tag justify-center">Career Journey</div>
            <h2 className="section-title leading-tight mb-2 md:mb-0" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>Milestones of a Distinguished Career</h2>

            {/* Mobile swipe hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="md:hidden flex items-center justify-center gap-2 mt-4 bg-[rgba(20,184,166,0.1)] py-1.5 px-4 rounded-full w-fit mx-auto"
            >
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--accent)' }}>Swipe to explore</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={14} style={{ color: 'var(--accent)' }} />
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="relative">
            {/* Ambient background glow for the grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] md:h-[300px] rounded-full pointer-events-none opacity-[0.03] blur-3xl"
              style={{ background: 'var(--accent)' }} />

            <div className="-mx-6 px-6 md:mx-0 md:px-0 flex md:flex-wrap md:justify-center gap-4 lg:gap-6 relative z-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {highlights.map((h, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                  key={i}
                  className="relative group w-[82vw] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-12px)] lg:w-[260px] flex-shrink-0 snap-center"
                >
                  {/* Subtle background glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl" />

                  <div className="w-full h-full glass rounded-2xl p-6 md:p-8 min-h-[200px] md:min-h-0 md:aspect-square flex flex-col justify-center items-center text-center transition-all duration-500 hover:border-[rgba(20,184,166,0.3)] hover:shadow-[0_10px_40px_-10px_rgba(20,184,166,0.2)] hover:-translate-y-2 relative overflow-hidden"
                    style={{ border: '1px solid var(--border)' }}>

                    {/* Decorative glowing orb inside the card top right */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-all duration-700 opacity-20 group-hover:opacity-40 group-hover:scale-150"
                      style={{ background: 'var(--accent)' }} />

                    {/* Small grid pattern background for texture */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '12px 12px' }} />

                    {/* Content */}
                    <div className="text-3xl md:text-4xl font-bold font-mono tracking-tighter mb-4 relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 block" style={{ color: 'var(--accent)' }}>
                      {h.year}
                      {/* Subtle reflection under text */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>

                    <div className="text-sm md:text-[15px] leading-relaxed relative z-10 transition-colors duration-300 group-hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                      {h.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
