'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function QuickContact() {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [sent, setSent] = useState(false);

  const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/contact.iaskk@gmail.com';
  const WHATSAPP_GROUP_LINK = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK?.trim() || '';
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '';
  const joinLink = WHATSAPP_GROUP_LINK || (WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}` : '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\+?[1-9]\d{7,14}$/.test(form.phone)) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    // Frontend rate limiting (1 minute cooldown)
    if (typeof window !== 'undefined') {
      const lastSubmit = localStorage.getItem('lastFormSubmit');
      if (lastSubmit && Date.now() - parseInt(lastSubmit) < 60000) {
        toast.error("Please wait a minute before connecting again to prevent spam.");
        return;
      }
    }

    try {
      const payload: Record<string, string> = {
        name: form.name,
        phone: form.phone,
        source_form: 'Quick Contact',
        _subject: 'New Quick Connect Lead from KK Singh Portfolio',
      };

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
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

      toast.success("Details sent! KK Singh's team will reach out to you soon.");
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', phone: '' });
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : 'Failed to send details. Please try again later.';
      toast.error(message);
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
            className="w-full lg:w-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
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
                placeholder="WhatsApp Number (+91...)"
                value={form.phone}
                onChange={e => {
                  const raw = e.target.value.replace(/[^0-9+]/g, '');
                  const normalized = raw.startsWith('+') ? `+${raw.slice(1).replace(/\+/g, '')}` : raw.replace(/\+/g, '');
                  setForm({ ...form, phone: normalized });
                }}
                required
                maxLength={16}
                className="px-5 py-3.5 md:py-3 rounded md:rounded-lg text-sm md:text-base outline-none w-full sm:w-48 lg:w-56 transition-all focus:ring-2 focus:ring-white/50"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
              />
              <button type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 md:py-3 rounded md:rounded-lg font-bold text-sm md:text-base transition-all hover:-translate-y-0.5"
                style={{ background: 'white', color: '#0f766e', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 4px 14px 0 rgba(255,255,255,0.2)' }}>
                {sent ? '✓ Sent!' : <><Send size={16} /> Send</>}
              </button>
            </div>

            {joinLink && (
              <div className="mt-3 text-center lg:text-right">
                <a
                  href={joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold underline underline-offset-4 hover:opacity-90 transition-opacity"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                >
                  🟢 Join our WhatsApp Group
                </a>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
