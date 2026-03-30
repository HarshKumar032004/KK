'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Play, Award, Users, MapPin, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '32+', label: 'Years in IAS', icon: Award },
  { value: '5,000+', label: 'Lives Mentored', icon: Users },
  { value: '18', label: 'States Served', icon: MapPin },
  { value: '300+', label: 'Talks Delivered', icon: Mic2 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-32 md:pb-0 md:pt-0">
      {/* BG */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #020617 0%, #0b1120 50%, #071626 100%)' }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(20,184,166,1) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      {/* Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full pointer-events-none opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/5 w-64 h-64 rounded-full pointer-events-none opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 w-full grid md:grid-cols-2 gap-16 md:gap-12 items-center flex-1">
        {/* Left */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <div className="section-tag justify-center md:justify-start">
            <span style={{ width: 32, height: 1.5, background: 'var(--accent)', display: 'inline-block' }} />
            Retired IAS Officer · Mentor · Entrepreneur
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="section-title mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.08 }}
          >
            Shaping India&apos;s{' '}
            <span className="text-gradient-teal">Future.</span>
            <br />One Mind at a Time.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}
          >
            With over three decades in the Indian Administrative Service,{' '}
            <strong style={{ color: 'var(--text-primary)' }}>KK Singh</strong> now dedicates his expertise to mentoring the next generation of leaders, entrepreneurs, and changemakers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 justify-center md:justify-start"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto justify-center">Schedule a Meeting <ArrowRight size={15} /></a>
            <a href="#media" className="btn-outline w-full sm:w-auto justify-center">
              <span style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={10} style={{ color: 'var(--accent)', marginLeft: 2 }} />
              </span>
              Watch My Journey
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass rounded-xl p-4 inline-flex items-center gap-3"
          >
            <div className="flex" style={{ gap: -8 }}>
              {['R', 'A', 'S'].map((l, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold text-white relative z-10"
                  style={{ background: `hsl(${170 + i * 25}, 55%, 35%)`, borderColor: 'var(--bg-card)', marginLeft: i > 0 ? -8 : 0 }}>
                  {l}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white">Trusted by 5,000+ professionals</div>
              <div className="flex gap-0.5 mt-0.5">{[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — portrait placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center mt-6 md:mt-0"
        >
          <div className="relative w-full max-w-[280px] md:max-w-[360px] aspect-[3/4]">
            <div className="absolute -inset-4 md:-inset-5 rounded-2xl" style={{ border: '1px solid rgba(20,184,166,0.15)' }} />
            <div className="absolute -inset-8 md:-inset-10 rounded-3xl" style={{ border: '1px solid rgba(20,184,166,0.07)' }} />
            <div className="w-full h-full rounded-2xl overflow-hidden relative"
              style={{ border: '1px solid rgba(20,184,166,0.2)' }}>
              <Image 
                src="/WhatsApp Image 2026-03-30 at 8.15.26 PM.jpeg" 
                alt="KK Singh" 
                fill 
                style={{ objectFit: 'cover' }} 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
            </div>
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 md:-left-8 top-1/4 glass rounded-xl px-3 md:px-4 py-2 md:py-3 z-10"
            >
              <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--accent-light)' }}>32+</div>
              <div className="text-[10px] md:text-xs" style={{ color: 'var(--text-muted)' }}>Years IAS</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-8 bottom-1/3 glass rounded-xl px-3 md:px-4 py-2 md:py-3 z-10"
            >
              <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}>5K+</div>
              <div className="text-[10px] md:text-xs" style={{ color: 'var(--text-muted)' }}>Mentored</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar - relative on mobile, absolute on desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full relative md:absolute bottom-0 left-0 right-0 glass border-t mt-12 md:mt-0 z-20" 
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)' }}>
                <s.icon size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold text-white leading-none mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
