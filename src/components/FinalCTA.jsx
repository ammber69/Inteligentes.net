import React from 'react';
import { Zap, ArrowRight, MessageCircle } from 'lucide-react';

export const FinalCTA = ({ onOpenModal }) => {
  return (
    <section id="contact" className="section-padding snap-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container-narrow" style={{ textCenter: 'center', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div 
          className="reveal-on-scroll"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.35rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--bg-card)',
            border: '1px solid var(--amber-brand)',
            color: 'var(--amber-brand)',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}
        >
          <Zap size={15} /> Plazas limitadas: solo 5 nuevos clientes al mes
        </div>

        <h2 className="hero-h1 reveal-on-scroll delay-1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
          Tu competencia ya aparece<br />
          <span className="gradient-text-multi">en Maps y en los chats de IA</span>
        </h2>

        <p className="hero-p reveal-on-scroll delay-2" style={{ marginBottom: '2.5rem' }}>
          Cada mes sin visibilidad multi-canal son leads de alta intención que van directo a tu competidor.
        </p>

        <div className="hero-actions reveal-on-scroll delay-3" style={{ justifyContent: 'center' }}>
          <button className="btn-primary" onClick={onOpenModal}>
            Empezar ahora gratis <ArrowRight size={18} />
          </button>
          <a 
            href="https://wa.me/522299005333" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            <MessageCircle size={18} style={{ color: 'var(--green-brand)' }} /> Hablar con un experto
          </a>
        </div>

        <p className="reveal-on-scroll delay-4" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Sin tarjeta de crédito · Respuesta en menos de 24h · Garantía de 90 días
        </p>
      </div>
    </section>
  );
};
