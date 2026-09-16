import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { ValueProp } from './components/ValueProp';
import { Services } from './components/Services';
import { MidCTA } from './components/MidCTA';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import './App.css';

function MainApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const mainContainer = document.querySelector('.app-main-layout');
    const observerOptions = {
      root: mainContainer || null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="app-main-layout">
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <PainPoints />
        <ValueProp />
        <Services />
        <MidCTA onOpenModal={handleOpenModal} />
        <FAQ />
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>
      <Footer onOpenModal={handleOpenModal} />
      <DiagnosticModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
