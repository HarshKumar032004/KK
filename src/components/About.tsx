'use client';
import { CheckCircle2, Download } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const highlights = [
  { year: '1985', text: 'Joined IAS – Bihar Cadre (1985 Batch)' },
  { year: '1998', text: 'District Collector, Bihar & Jharkhand' },
  { year: '2008', text: 'Additional Secretary, Government of India' },
  { year: '2017', text: 'Retired as Chief Secretary (Additional Charge)' },
  { year: '2018+', text: 'Founded mentorship & entrepreneurship ventures' },
];

const credentials = [
  'M.A. in Public Administration, Delhi University',
  'Fellow, Harvard Kennedy School of Government',
  'National Award for Excellence in Administration (2011)',
  'UN Global Policy Advisory Member (2012–2016)',
  'Padma Shri Nominee (2019)',
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
              <strong style={{ color: 'var(--text-primary)' }}>Bihar Cadre (1985 batch)</strong> who spent over three decades shaping policy at State and Central Government levels. Known for his transformative approach to governance, he implemented landmark welfare schemes impacting millions.
            </p>
            <p className="leading-relaxed mb-8 text-sm md:text-base text-left" style={{ color: 'var(--text-secondary)' }}>
              Post-retirement, KK Singh mentors aspiring civil servants,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>young entrepreneurs</strong>, and corporate leaders — bringing wisdom from decades of experience into boardrooms and classrooms across India.
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
              <a href="#" className="btn-outline justify-center"><Download size={14} /> Download Profile</a>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20 md:mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="section-tag justify-center">Career Journey</div>
            <h2 className="section-title leading-tight" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>Milestones of a Distinguished Career</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(20,184,166,0.3), transparent)' }} />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5 relative">
              {/* Mobile connecting line */}
              <div className="block md:hidden absolute left-4 top-0 bottom-0 w-px"
                style={{ background: 'rgba(20,184,166,0.3)' }} />
              
              {highlights.map((h, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i} className="relative pl-10 md:pl-0"
                >
                  <div className="absolute left-3 md:relative md:left-auto top-5 md:top-auto w-3 h-3 md:w-2.5 md:h-2.5 rounded-full md:mx-auto md:mb-4 md:flex items-center justify-center z-10" 
                    style={{ background: 'var(--accent)', boxShadow: '0 0 10px rgba(20,184,166,0.5)', transform: 'translate(-50%, -50%)', marginTop: '6px' }} />
                  <div className="card-dark rounded-xl p-4">
                    <div className="text-sm font-bold mb-1 md:mb-2" style={{ color: 'var(--accent)' }}>{h.year}</div>
                    <div className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{h.text}</div>
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
