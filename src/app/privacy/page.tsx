import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6" style={{ background: '#020617', color: 'var(--text-secondary)' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:text-[var(--accent)] transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Privacy Policy</h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>Last updated: April 2026</p>
          
          <p>
            K.K. Singh ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, 
            please contact us at kksingh.iasofficer@gmail.com.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information 
            about our mentorship programs, consulting, or when you contact us via the online embedded forms.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the website. The personal information we collect may include the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Names</li>
            <li>Email Addresses</li>
            <li>Phone Numbers (if applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have.</li>
            <li><strong>To send administrative information to you.</strong> We may use your personal information to send you mentorship updates and scheduling details.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>3. Will Your Information Be Shared?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            We <strong>strictly do not</strong> sell or rent your personal information to third-party marketers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>4. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at kksingh.iasofficer@gmail.com or call us at +91 82355 14356.
          </p>
        </div>
      </div>
    </main>
  );
}
