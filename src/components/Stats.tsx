'use client';
import { TrendingUp, Award, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Award, value: '32+', label: 'Years of IAS Service', desc: 'Bihar & Central Cadre' },
  { icon: Users, value: '5,000+', label: 'Lives Mentored', desc: 'Across India & abroad' },
  { icon: Globe, value: '18', label: 'States Served', desc: 'Policy implementation' },
  { icon: TrendingUp, value: '300+', label: 'Talks & Seminars', desc: 'Leadership & governance' },
];

export default function Stats() {
  return (
    <section>
      <div style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 50%, #134e4a 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i} 
              className="text-center group"
            >
              <div className="flex justify-center mb-4 md:mb-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all bg-white/10 group-hover:bg-white/20 group-hover:scale-110 duration-300">
                  <s.icon size={24} className="md:w-[28px] md:h-[28px]" style={{ color: 'white' }} />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</div>
              <div className="font-semibold text-sm md:text-base mb-1 md:mb-2" style={{ color: '#ccfbf1' }}>{s.label}</div>
              <div className="text-xs md:text-sm px-4" style={{ color: 'rgba(167,243,208,0.7)' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
