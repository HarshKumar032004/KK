'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { SocialIcon, socialLinks } from './SocialIcons';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/kksingh.iasofficer@gmail.com';
  const WHATSAPP_GROUP_LINK = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK?.trim() || '';
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '';
  const joinLink = WHATSAPP_GROUP_LINK || (WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}` : '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Strict frontend email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (form.phone && !/^\+?[1-9]\d{7,14}$/.test(form.phone)) {
      toast.error('Please enter a valid phone number (e.g. +918235514356).');
      return;
    }

    // Frontend rate limiting (1 minute cooldown)
    if (typeof window !== 'undefined') {
      const lastSubmit = localStorage.getItem('lastFormSubmit');
      if (lastSubmit && Date.now() - parseInt(lastSubmit) < 60000) {
        toast.error('Please wait 60 seconds before sending another message to prevent spam.');
        return;
      }
    }

    setSending(true);
    try {
      const payload: Record<string, string> = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        source_form: 'Footer Contact',
        _subject: 'New Message from KK Singh Portfolio',
      };

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      let result: { success?: string; message?: string } | null = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      const formSubmitSuccess = !!result && ['true', 'True', true].includes(result.success as string);
      if (!response.ok || !formSubmitSuccess) {
        throw new Error(result?.message || `Request failed with status ${response.status}`);
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('lastFormSubmit', Date.now().toString());
      }

      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', phone: '', message: '' });
      toast.success("Message sent successfully! KK Singh's team will be in touch soon.");
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
      toast.error(message);
    } finally {
      setSending(false);
    }
  };

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
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center mb-6 md:mb-8 bg-transparent">
            <Image
              src="/KK Singh Growth Logo.png"
              alt="KK Singh Logo"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.1 }}>
            Let&apos;s Build Something <br className="hidden lg:block" />
            <span style={{ color: 'var(--accent)' }}>Meaningful.</span>
          </h2>
          <p className="mb-8 md:mb-10 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
            Whether you&apos;re looking for business mentorship, entrepreneurship guidance, or a keynote speaker, I&apos;m always open to discussing new ideas.
          </p>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <Mail size={16} className="md:w-5 md:h-5" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Email</div>
                <div className="text-sm md:text-base font-medium text-white">kksingh.iasofficer@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <Phone size={16} className="md:w-5 md:h-5" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Phone</div>
                <div className="text-sm md:text-base font-medium text-white">+91 82355 14356</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <MapPin size={16} className="md:w-5 md:h-5" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>Location</div>
                <div className="text-sm md:text-base font-medium text-white">Ranchi, Jharkhand, India</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] md:text-xs tracking-wider uppercase font-semibold mb-4" style={{ color: 'var(--text-muted)' }}>Follow Me</div>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map(({ platform, href }) => (
                <a key={platform} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all bg-(--bg-card) border border-(--border) text-(--text-muted) hover:text-(--accent)! hover:bg-teal-500/10! hover:border-teal-500/40!">
                  <SocialIcon platform={platform} className="w-4.5 h-4.5 md:w-5 md:h-5" />
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
          className="card-dark rounded-2xl p-6 md:p-8 lg:p-10 border border-(--border)"
        >
          <h3 className="text-2xl font-bold mb-6 md:mb-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Send a Message</h3>
          <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-semibold px-1" style={{ color: 'var(--text-muted)' }}>FULL NAME</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  maxLength={50}
                  required
                  className="w-full bg-(--bg-surface) border border-(--border) rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-(--accent) focus:ring-1 focus:ring-(--accent) transition-all"
                  placeholder="John Doe" />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-semibold px-1" style={{ color: 'var(--text-muted)' }}>EMAIL ADDRESS</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  maxLength={100}
                  required
                  className="w-full bg-(--bg-surface) border border-(--border) rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-(--accent) focus:ring-1 focus:ring-(--accent) transition-all"
                  placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-xs font-semibold px-1" style={{ color: 'var(--text-muted)' }}>WHATSAPP NUMBER</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => {
                  const raw = e.target.value.replace(/[^0-9+]/g, '');
                  const normalized = raw.startsWith('+') ? `+${raw.slice(1).replace(/\+/g, '')}` : raw.replace(/\+/g, '');
                  setForm({ ...form, phone: normalized });
                }}
                maxLength={16}
                required
                className="w-full bg-(--bg-surface) border border-(--border) rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-(--accent) focus:ring-1 focus:ring-(--accent) transition-all"
                placeholder="+91XXXXXXXXXX"
              />
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-xs font-semibold px-1" style={{ color: 'var(--text-muted)' }}>MESSAGE</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                maxLength={500}
                required
                className="w-full bg-(--bg-surface) border border-(--border) rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-(--accent) focus:ring-1 focus:ring-(--accent) transition-all resize-none"
                placeholder="How can I help you?" />
            </div>
            <button disabled={sending || sent} type="submit" className="w-full btn-primary justify-center mt-2 group disabled:cursor-not-allowed" style={{ paddingTop: '14px', paddingBottom: '14px', opacity: sending ? 0.7 : 1 }}>
              {sent ? 'Message Sent Successfully!' : sending ? 'Sending...' : <>Send Message <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></>}
            </button>
            {joinLink && (
              <a
                href={joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold underline underline-offset-4 hover:opacity-90 transition-opacity mt-1"
                style={{ color: 'var(--accent)' }}
              >
                🟢 Join our WhatsApp Group
              </a>
            )}
          </form>
        </motion.div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t relative z-10" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-center md:text-left" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} KK Singh. All rights reserved.
          </div>
          <div className="flex gap-4 md:gap-6 text-xs text-center md:text-left flex-wrap justify-center">
            {[
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' },
              { name: 'Cookie Policy', href: '/cookies' }
            ].map(l => (
              <Link key={l.name} href={l.href} className="hover:text-(--accent)! transition-colors" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
