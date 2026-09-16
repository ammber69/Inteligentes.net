import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MidCTA = ({ onOpenModal }) => {
  return (
    <section className="section-padding snap-section">
      <div className="container-custom">
        <div 
          className="reveal-on-scroll"
          style={{
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
            border: '1px solid var(--border-hover)',
            borderRadius: 'var(--radius-lg)',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--blue-brand)',
              marginBottom: '1.25rem'
            }}
          >
            <Sparkles size={16} /> Diagnóstico Personalizado 100% Gratuito
          </div>

          <h2 className="section-h2" style={{ maxWidth: '700px', margin: '0 auto 1rem auto' }}>
            ¿Cuántos leads estás dejando ir hoy?
          </h2>

          <p className="section-sub" style={{ maxWidth: '600px', margin: '0 auto 2.25rem auto' }}>
            Recibe un diagnóstico detallado y te mostramos exactamente en qué canales estás perdiendo clientes frente a tu competencia.
          </p>

          <button className="btn-primary" onClick={onOpenModal}>
            Quiero mi diagnóstico gratis <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
