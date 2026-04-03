'use client';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const mediaItems = [
  { 
    title: 'Governance & Youth Empowerment', 
    source: 'Internal Session', 
    type: 'video',
    url: 'https://drive.google.com/file/d/103n--oDaCRrsaNG0c5DuaVX0mDXFQyQ-/preview'
  },
  { title: 'Leadership in the Age of Disruption', source: 'Leadership Summit', type: 'placeholder' },
  { title: 'Public Service & Beyond', source: 'Conclave', type: 'placeholder' },
];
export default function Media() {
  return (
    <section id="media" className="py-16 md:py-28 relative" style={{ background: 'var(--bg-surface)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="section-tag justify-center">Media &amp; Talks</div>
          <h2 className="section-title mb-4">Conversations That <span className="text-gradient-teal">Inspire</span></h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Watch KK Singh share insights on leadership, governance, and entrepreneurship in conversations across top media platforms.
          </p>
        </motion.div>

        {/* Featured video */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden aspect-video flex items-center justify-center order-1 w-full"
            style={{ background: '#0f172a', border: '1px solid rgba(20,184,166,0.2)' }}
          >
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/9rloc81irMY" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 text-center md:text-left text-balance"
          >
            <div className="section-tag justify-center md:justify-start">Featured Talk</div>
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', color: 'var(--text-primary)' }}>
              &ldquo;Decoding the Success Journey of KK Singh&rdquo;
            </h3>
            <p className="leading-relaxed mb-6 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
              An insightful conversation on three decades of public service, lessons from governance, and the entrepreneurial leap post-retirement. Discover what it takes to build a lasting legacy.
            </p>
            <a href="https://youtu.be/9rloc81irMY" target="_blank" rel="noopener noreferrer" className="btn-primary justify-center w-full sm:w-auto inline-flex">
              <Play size={15} /> Watch on YouTube
            </a>
          </motion.div>
        </div>

        {/* More videos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mediaItems.map((m, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              key={i} className="card-dark rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, hsl(${200 + i * 20},40%,12%), hsl(${210 + i * 20},40%,8%))` }}>
                
                {m.url ? (
                  <iframe 
                    className="absolute inset-0 w-full h-full relative z-20"
                    src={m.url}
                    allow="autoplay"
                    title={m.title}
                  ></iframe>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300 relative z-10"
                      style={{ background: 'rgba(20,184,166,0.2)', border: '1px solid rgba(20,184,166,0.4)' }}>
                      <Play size={18} className="md:w-[20px] md:h-[20px]" style={{ color: 'var(--accent)', marginLeft: 3 }} />
                    </div>
                    <div className="absolute bottom-2 right-2 text-[10px] md:text-xs px-2 py-0.5 rounded z-10" style={{ background: 'rgba(0,0,0,0.7)', color: 'var(--text-muted)' }}>
                      Coming Soon
                    </div>
                  </>
                )}
              </div>
              <div className="p-4 md:p-5">
                <div className="text-sm md:text-base font-semibold text-white mb-1.5 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{m.title}</div>
                <div className="text-xs font-medium" style={{ color: 'var(--accent)' }}>{m.source}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
