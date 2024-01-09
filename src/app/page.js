import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import Achievements from './components/Achievements';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bgs">
      <Navbar />
      <div className=" container  mx-auto mt-24 px-14 py-4">
        <HeroSection />
        <Achievements />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
