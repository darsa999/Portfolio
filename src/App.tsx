import React from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

export const AppContent: React.FC = () => {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={locale}
          initial={{ opacity: 0.92, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.92, y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <Hero />
          <UpworkBanner />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return <AppContent />;
};

export default App;
