import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6" style={{ background: '#020617', color: 'var(--text-secondary)' }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:text-[var(--accent)] transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Terms of Service</h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>Last updated: April 2026</p>
          
          <p>
            Welcome to the personal and professional portfolio website of K.K. Singh. 
            By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>1. Mentorship & Advisory Disclaimer</h2>
          <p>
            The content on this website, including business mentorship, governance advisory, and public speaking materials, is strictly for educational and informational purposes. 
            K.K. Singh provides guidance based on decades of public administration experience. However, <strong>no specific business outcomes, success metrics, or career guarantees are promised</strong> as a result of engaging in these mentorship programs. 
            Users assume full responsibility for their business and life decisions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>2. Intellectual Property</h2>
          <p>
            All content appearing on this website—including but not limited to text, photographs, timelines, program descriptions, and logos—is the intellectual property of K.K. Singh. 
            You may not reproduce, republish, distribute, or otherwise use any of this material for commercial purposes without prior written authorization.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>3. User Conduct</h2>
          <p>
            When utilizing the contact forms on this website, you agree not to submit:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Spam, promotional materials, or automated bot requests.</li>
            <li>Harassing, threatening, or abusive content.</li>
            <li>False identification or impersonation of another individual or entity.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>4. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Jharkhand, India, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>5. Contact Us</h2>
          <p>
            If you have any questions regarding these terms, please contact us at contact.kk@gmail.com.
          </p>
        </div>
      </div>
    </main>
  );
}
