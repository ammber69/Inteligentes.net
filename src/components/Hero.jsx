import React, { useEffect, useState } from 'react';
import { Search, MapPin, Bot, ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero = ({ onOpenModal }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 340;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section snap-section">
      <div className="hero-glow-bg"></div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Channel Tags */}
        <div className="channel-chips-row reveal-on-scroll is-visible">
          <span className="chip-tag chip-blue">
            <Search size={14} /> Google Search
          </span>
          <span className="chip-tag chip-green">
            <MapPin size={14} /> Google Maps
          </span>
          <span className="chip-tag chip-purple">
            <Bot size={14} /> Chats de IA
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-h1 reveal-on-scroll is-visible delay-1">
          Atrae leads.<br />
          <span className="gradient-text-multi">Google, Maps e IA.</span>
        </h1>

        {/* Hero Description */}
        <p className="hero-p reveal-on-scroll is-visible delay-2">
          Hacemos que tu negocio aparezca en los <strong>3 canales</strong> donde tus clientes buscan hoy, 
          sin depender de ads que se apagan cuando paras de pagar.
        </p>

        {/* Hero Actions */}
        <div className="hero-actions reveal-on-scroll is-visible delay-3">
          <button className="btn-primary" onClick={onOpenModal}>
            Diagnóstico gratis <ArrowRight size={18} />
          </button>
          <a href="#resultados" className="btn-secondary">
            Ver casos de éxito
          </a>
        </div>

        {/* Trust Metrics Bar */}
        <div className="trust-bar-grid reveal-on-scroll is-visible delay-4">
          <div className="trust-card">
            <span className="trust-number">+{count}%</span>
            <span className="trust-label">Leads en promedio</span>
          </div>

          <div className="trust-card">
            <span className="trust-number">3</span>
            <span className="trust-label">Canales posicionados</span>
          </div>

          <div className="trust-card">
            <span className="trust-number">90 días</span>
            <span className="trust-label">Primeros resultados</span>
          </div>

          <div className="trust-card">
            <span className="trust-number">98%</span>
            <span className="trust-label">Clientes que renuevan</span>
          </div>
        </div>
      </div>
    </section>
  );
};
