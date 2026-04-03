'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function QuickContact() {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend rate limiting (1 minute cooldown)
    if (typeof window !== 'undefined') {
      const lastSubmit = localStorage.getItem('lastFormSubmit');
      if (lastSubmit && Date.now() - parseInt(lastSubmit) < 60000) {
        toast.error("Please wait a minute before connecting again to prevent spam.");
        return;
      }
    }

    try {
      await fetch("https://formsubmit.co/ajax/contact.kk@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          _subject: "New Quick Connect Lead from KK Singh Portfolio"
        })
      });
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('lastFormSubmit', Date.now().toString());
      }

      toast.success("Details sent successfully! We'll reach out soon.");
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', phone: '' });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send details. Please try again later.");
    }
  };

  return (
    <section style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 60%, #134e4a 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-auto"
          >
            <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-2 md:mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>Quick Connect</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Take the First Step Towards Growth
            </h3>
            <p className="text-sm md:text-base px-4 lg:px-0" style={{ color: 'rgba(255,255,255,0.85)' }}>Leave your details and KK Singh&apos;s team will reach out within 24 hours.</p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
              maxLength={50}
              className="px-5 py-3.5 md:py-3 rounded md:rounded-lg text-sm md:text-base outline-none w-full sm:w-48 lg:w-56 transition-all focus:ring-2 focus:ring-white/50"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            />
            <input
              type="tel"
              placeholder="Phone Number (e.g. +91...)"
              value={form.phone}
              onChange={e => {
                // Strictly allow only numbers and a plus sign
                const val = e.target.value.replace(/[^0-9+]/g, '');
                setForm({ ...form, phone: val });
              }}
              required
              maxLength={15}
              className="px-5 py-3.5 md:py-3 rounded md:rounded-lg text-sm md:text-base outline-none w-full sm:w-48 lg:w-56 transition-all focus:ring-2 focus:ring-white/50"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            />
            <button type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 md:py-3 rounded md:rounded-lg font-bold text-sm md:text-base transition-all hover:-translate-y-0.5"
              style={{ background: 'white', color: '#0f766e', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 4px 14px 0 rgba(255,255,255,0.2)' }}>
              {sent ? '✓ Sent!' : <><Send size={16} /> Send</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
