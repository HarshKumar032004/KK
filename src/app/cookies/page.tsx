import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6" style={{ background: '#020617', color: 'var(--text-secondary)' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:text-[var(--accent)] transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Cookie Policy</h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>Last updated: April 2026</p>
          
          <p>
            This Cookie Policy explains how K.K. Singh ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. 
            It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners 
            in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>2. How do we use cookies?</h2>
          <p>
            Currently, our website primarily uses <strong>Essential Cookies</strong>. These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as preventing spam in our contact forms or maintaining secure hosting sessions (such as Vercel or Next.js routing protocols).
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>3. Analytics & Third-Party Cookies</h2>
          <p>
            At this time, we do not deploy aggressive third-party marketing or tracking cookies (like Facebook Pixels). If we implement traffic analytics (such as Google Analytics) in the future to understand how visitors interact with our portfolio, this policy will be updated, and a cookie consent banner will be provided if required by your jurisdiction.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>4. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>5. Contact Us</h2>
          <p>
            If you have questions or comments regarding this Cookie Policy, you may email us at contact.kk@gmail.com.
          </p>
        </div>
      </div>
    </main>
  );
}
