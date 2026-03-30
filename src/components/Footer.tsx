'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { SocialIcon } from './SocialIcons';
import { motion } from 'framer-motion';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <footer id="contact" className="relative border-t" style={{ background: '#020617', borderColor: 'var(--border)' }}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(20,184,166,1) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mb-6 md:mb-8"
            style={{ background: 'rgba(20,184,166,0.1)', border: '2px solid rgba(20,184,166,0.3)', fontFamily: 'Playfair Display, serif', color: '#5eead4' }}>
            KK
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.1 }}>
            Let&apos;s Build Something <br className="hidden lg:block"/>
            <span style={{ color: 'var(--accent)' }}>Meaningful.</span>
          </h2>
          <p className="mb-8 md:mb-10 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
            Whether you&apos;re looking for governance advisory, personal mentorship, or a keynote speaker, I&apos;m always open to discussing new ideas.
          </p>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <Mail size={16} className="md:w-[20px] md:h-[20px]" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Email</div>
                <div className="text-sm md:text-base font-medium text-white">contact@kksingh.in</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <Phone size={16} className="md:w-[20px] md:h-[20px]" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Phone</div>
                <div className="text-sm md:text-base font-medium text-white">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <MapPin size={16} className="md:w-[20px] md:h-[20px]" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Location</div>
                <div className="text-sm md:text-base font-medium text-white">New Delhi, India</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>Follow Me</div>
            <div className="flex gap-3 md:gap-4">
              {(['linkedin', 'twitter', 'youtube', 'instagram'] as const).map((s) => (
                <a key={s} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:!text-[var(--accent)] hover:!bg-teal-500/10 hover:!border-teal-500/40">
                  <SocialIcon platform={s} className="w-[18px] h-[18px] md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-dark rounded-2xl p-6 md:p-8 lg:p-10 border border-[var(--border)]"
        >
          <h3 className="text-2xl font-bold mb-6 md:mb-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Send a Message</h3>
          <form className="space-y-4 md:space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-semibold px-1" style={{ color: 'var(--text-muted)' }}>FULL NAME</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  placeholder="John Doe" />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-semibold px-1" style={{ color: 'var(--text-muted)' }}>EMAIL ADDRESS</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-xs font-semibold px-1" style={{ color: 'var(--text-muted)' }}>MESSAGE</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                placeholder="How can I help you?" />
            </div>
            <button className="w-full btn-primary justify-center mt-2 group" style={{ paddingTop: '14px', paddingBottom: '14px' }}>
              Send Message <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-center md:text-left" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} KK Singh. All rights reserved.
          </div>
          <div className="flex gap-4 md:gap-6 text-xs text-center md:text-left flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" className="hover:!text-[var(--accent)] transition-colors" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
