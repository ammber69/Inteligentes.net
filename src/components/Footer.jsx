import React from 'react';
import { Zap, Mail, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export const Footer = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    const mainContainer = document.querySelector('.app-main-layout');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrap snap-section">
      <div className="container-custom">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <a href="#" className="brand-logo" style={{ marginBottom: '1rem', display: 'inline-flex' }} onClick={scrollToTop}>
              <img 
                src={logoImg} 
                alt="inteligentes.net logo" 
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '10px', 
                  objectFit: 'cover',
                  border: '1px solid var(--border-accent)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }} 
              />
              <span>inteligentes<span className="gradient-text-blue">.net</span></span>
            </a>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '300px' }}>
              Leads desde Google, Maps e IA.<br />
              Los 3 canales donde tus clientes buscan hoy.
            </p>
          </div>

          {/* Col 1: Servicios */}
          <div>
            <p className="footer-col-title">Servicios</p>
            <div className="footer-links-list">
              <a href="#servicios">SEO en Google Search</a>
              <a href="#servicios">Google Maps & SEO Local</a>
              <a href="#servicios">GEO / AEO: Chats de IA</a>
              <a href="#servicios">Auditoría Técnica SEO</a>
            </div>
          </div>

          {/* Col 2: Empresa */}
          <div>
            <p className="footer-col-title">Empresa</p>
            <div className="footer-links-list">
              <a href="#resultados">Casos de éxito</a>
              <a href="#pain-points">Nuestra metodología</a>
              <a href="#faq">Preguntas frecuentes</a>
              <a href="#contact">Contacto</a>
            </div>
          </div>

          {/* Col 3: Contacto directo */}
          <div>
            <p className="footer-col-title">Contacto Directo</p>
            <div className="footer-links-list">
              <a href="mailto:hola@inteligentes.net" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} /> hola@inteligentes.net
              </a>
              <a 
                href="https://wa.me/522299005333" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--green-brand)' }}
              >
                <MessageCircle size={16} /> WhatsApp Directo
              </a>
              <button 
                onClick={onOpenModal} 
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--blue-brand)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: 0,
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  marginTop: '0.2rem'
                }}
              >
                <Zap size={16} /> Diagnóstico Gratis
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-flex">
          <p>© {currentYear} inteligentes.net · Todos los derechos reservados</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Aviso de Privacidad</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
