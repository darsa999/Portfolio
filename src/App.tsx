import React from 'react';
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

export const App: React.FC = () => {
  const { t } = useLanguage();

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
          <Hero />
          <UpworkBanner />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
};

export default App;
