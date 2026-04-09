'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Media', href: '#media' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 md:py-4 glass border-b' : 'py-5 md:py-6 bg-transparent'}`}
      style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}>
      
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 style-none group" style={{ textDecoration: 'none' }}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 bg-transparent">
            <Image
              src="/KK Singh Growth Logo.png"
              alt="KK Singh Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="font-semibold text-lg md:text-xl text-white tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>KK Singh</div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} 
                className="text-sm font-medium transition-colors hover:!text-[var(--accent)]"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            Connect Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} 
          className="md:hidden p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-white hover:text-[var(--accent)] transition-colors">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-[var(--border)] overflow-hidden absolute top-full left-0 right-0 w-full"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[var(--text-secondary)] hover:!text-[var(--accent)] border-b border-[var(--border)] pb-3"
                  style={{ textDecoration: 'none' }}>
                  {l.label}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href="#contact" onClick={() => setMobileOpen(false)}
                className="btn-primary justify-center mt-2 w-full">
                Connect Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
