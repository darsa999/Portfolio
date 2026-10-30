import React, { useEffect } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UpworkBanner } from './components/UpworkBanner';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { MobileCtaBar } from './components/MobileCtaBar';

export const App: React.FC = () => {
  const { t } = useLanguage();

  // The browser tries to jump to `#contact` before React has rendered the section, so deep links
  // shared from the nav (e.g. /?lang=en#projects) would otherwise always open at the top.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    // `strict` makes any stray full `motion.*` import a runtime error, so only the lighter `m.*` + domAnimation ship.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-[100] rounded-xl bg-brand-600 px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          {t.common.skipToContent}
        </a>

        <Navbar />

        <main id="main" tabIndex={-1} className="outline-none">
          {/* Ordered the way a client decides: what you offer → proof → how we'd work → who you are */}
          <Hero />
          <Services />
          <Projects />
          <Process />
          <UpworkBanner />
          <About />
          <Experience />
          <TechStack />
          <Education />
          <Contact />
        </main>

        <Footer />
        <MobileCtaBar />
      </MotionConfig>
    </LazyMotion>
  );
};

export default App;
