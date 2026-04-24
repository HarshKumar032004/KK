'use client';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

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
            Watch KK Singh share insights on leadership, entrepreneurship, and business growth in conversations across top media platforms.
          </p>
        </motion.div>

        {/* Featured video */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
              An insightful conversation on three decades of leadership, lessons in people development, and the entrepreneurial leap post-retirement. Discover what it takes to build a lasting legacy.
            </p>
            <a href="https://youtu.be/9rloc81irMY" target="_blank" rel="noopener noreferrer" className="btn-primary justify-center w-full sm:w-auto inline-flex">
              <Play size={15} /> Watch on YouTube
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
