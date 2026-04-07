'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  { label: 'Leadership Summit', image: '/WhatsApp Image 2026-03-30 at 8.15.26 PM (1).jpeg', color: '#1a3a4a' },
  { label: 'Mentorship Circle', image: '/WhatsApp Image 2026-03-30 at 8.15.27 PM (1).jpeg', color: '#1a2a3a' },
  { label: 'Youth Mentorship', image: '/WhatsApp Image 2026-03-30 at 8.15.27 PM.jpeg', color: '#1a3a3a' },
  { label: 'Leadership in Action', image: '/WhatsApp Image 2026-03-30 at 8.18.38 PM.jpeg', color: '#2a2a4a' },
  { label: 'Achievement Highlights', image: null, color: '#1a4a3a' },
  { label: 'Mentor Leadership Forum', image: null, color: '#2a3a4a' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-28" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="section-tag justify-center">Proud Moments</div>
          <h2 className="section-title mb-4">Gallery</h2>
          <p className="max-w-xl mx-auto px-4" style={{ color: 'var(--text-secondary)' }}>
            Glimpses from a journey of mentorship, leadership, and achievement.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <div className="w-full h-full relative" style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}aa)` }} />
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: 'radial-gradient(rgba(20,184,166,0.6) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity group-hover:opacity-10 pointer-events-none">
                      <div className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(20,184,166,0.8)' }}>KK</div>
                    </div>
                  </>
                )}

                {/* Teal hover overlay (always applicable) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.5), transparent)' }} />

                {/* Gradient bottom and label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0"
                  style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.9), rgba(2,6,23,0.5), transparent)' }}>
                  <div className="text-sm md:text-base font-medium text-white leading-tight">{item.label}</div>
                  {!item.image && (
                    <div className="text-[10px] md:text-xs mt-1 font-semibold tracking-wide" style={{ color: 'var(--accent)' }}>[ Photo Coming Soon ]</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
