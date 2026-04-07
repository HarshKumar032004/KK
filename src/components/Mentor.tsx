'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Play } from 'lucide-react';

const mentorHighlights = [
  'Motivational speaker known for practical mindset transformation.',
  'Life and business coach focused on disciplined growth.',
  'Author and mentor guiding people toward purpose-driven success.',
];

const mentorStats = [
  { value: '20+', label: 'Years of experience' },
  { value: '1M+', label: 'Lives inspired' },
  { value: '2021', label: 'Champions of Change recognition' },
];

const MENTOR_WEBSITE = 'https://www.spbharill.com/';
const MENTOR_YOUTUBE = 'https://youtu.be/oYlwO22Uvdc';
const MENTOR_VIDEO_EMBED = 'https://www.youtube.com/embed/oYlwO22Uvdc';

export default function Mentor() {
  return (
    <section id="mentor" className="py-16 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="section-tag justify-center">My Mentor</div>
          <h2 className="section-title mb-4">SP Bharill</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A guiding force in my leadership journey, known for inspiring people to build discipline, purpose, and lasting achievement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden w-full max-w-[460px] mx-auto aspect-[4/5]"
            style={{ border: '1px solid rgba(20,184,166,0.25)' }}
          >
            <Image
              src="/sp-bharill-mentor.jpg"
              alt="SP Bharill"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm md:text-base text-white font-medium leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                &ldquo;Take it easy and let&apos;s celebrate.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Mentor. Coach. Author.
            </h3>
            <p className="leading-relaxed mb-5 text-sm md:text-base text-left" style={{ color: 'var(--text-secondary)' }}>
              SP Bharill has deeply influenced how I think about growth, leadership, and contribution. His journey and teachings continue to shape my approach to mentoring others with clarity, confidence, and compassion.
            </p>

            <div className="space-y-3 mb-7 text-left">
              {mentorHighlights.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>{point}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-7">
              {mentorStats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-3 text-center">
                  <div className="text-lg md:text-2xl font-bold" style={{ color: 'var(--accent-light)', fontFamily: 'Playfair Display, serif' }}>{s.value}</div>
                  <div className="text-[11px] md:text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={MENTOR_YOUTUBE} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                <Play size={15} /> Watch on YouTube
              </a>
              <a href={MENTOR_WEBSITE} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center">
                Visit Website <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-14 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-3 md:p-4" style={{ border: '1px solid rgba(20,184,166,0.2)' }}>
            <div className="text-xs uppercase tracking-[0.18em] mb-3 text-center" style={{ color: 'var(--accent)' }}>
              Featured Mentor Video
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden" style={{ background: '#0f172a' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={MENTOR_VIDEO_EMBED}
                title="Power Of Mind by SP Bharill"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
