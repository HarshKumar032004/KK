import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Mentor from '@/components/Mentor';
import Programs from '@/components/Programs';
import Media from '@/components/Media';
import Gallery from '@/components/Gallery';
import QuickContact from '@/components/QuickContact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Mentor />
      <Programs />
      <Media />
      <Gallery />
      <QuickContact />
      <Footer />
    </main>
  );
}
