'use client';
import { BookOpen, Lightbulb, Briefcase, Heart, Mic, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    icon: BookOpen,
    title: 'IAS & Civil Services Coaching',
    desc: 'Personalized guidance from a former IAS officer — strategy, interview prep, and the mindset required to serve India.',
    tag: 'Most Popular',
    tagColor: 'teal',
  },
  {
    icon: Lightbulb,
    title: 'Leadership Mentorship',
    desc: 'One-on-one sessions for corporate leaders, startup founders, and public sector professionals seeking clarity.',
    tag: null,
    tagColor: null,
  },
  {
    icon: Briefcase,
    title: 'Entrepreneurship Incubation',
    desc: "From idea to execution — KK Singh's policy expertise helps entrepreneurs navigate regulatory landscapes and scale fast.",
    tag: 'New',
    tagColor: 'gold',
  },
  {
    icon: Heart,
    title: 'Wellness & Mindset Programs',
    desc: 'Holistic workshops combining governance discipline with modern wellness principles for sustained peak performance.',
    tag: null,
    tagColor: null,
  },
  {
    icon: Mic,
    title: 'Public Speaking Masterclass',
    desc: 'Learn authoritative communication from someone who addressed UN assemblies and parliamentary sessions.',
    tag: null,
    tagColor: null,
  },
  {
    icon: Globe2,
    title: 'Policy & Governance Advisory',
    desc: 'Consulting for state governments, NGOs, and international bodies on governance, rural development, and welfare.',
    tag: null,
    tagColor: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-28" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="section-tag justify-center">What I Offer</div>
          <h2 className="section-title mb-4">Programs &amp; Services</h2>
          <p className="max-w-2xl mx-auto px-4" style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
            Drawing from 32+ years across administration, policy, and leadership — designed to create lasting impact.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((p, i) => (
            <motion.div key={i} variants={cardVariants} className="card-dark rounded-2xl p-6 relative overflow-hidden group">
              {p.tag && (
                <div className="absolute top-4 right-4 text-[10px] md:text-xs font-bold px-2 py-1 rounded-full"
                  style={{
                    background: p.tagColor === 'gold' ? 'rgba(245,158,11,0.15)' : 'rgba(20,184,166,0.15)',
                    color: p.tagColor === 'gold' ? '#f59e0b' : '#14b8a6',
                    border: `1px solid ${p.tagColor === 'gold' ? 'rgba(245,158,11,0.3)' : 'rgba(20,184,166,0.3)'}`,
                  }}>
                  {p.tag}
                </div>
              )}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)' }}>
                <p.icon size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              <a href="#contact" className="text-sm font-semibold transition-colors flex items-center gap-1"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--accent)')}>
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
