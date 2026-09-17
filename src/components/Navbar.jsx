import React, { useState, useEffect } from 'react';
import { Search, MapPin, Bot, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoImg from '../assets/logo.jpeg';
import { ThemeToggleButton } from './ThemeToggleButton';

export const Navbar = ({ onOpenModal }) => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    const mainContainer = document.querySelector('.app-main-layout');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const mainContainer = document.querySelector('.app-main-layout');
    const handleScroll = () => {
      const scrollPos = mainContainer ? mainContainer.scrollTop : window.scrollY;
      setScrolled(scrollPos > 20);
    };
    
    if (mainContainer) {
      mainContainer.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (mainContainer) mainContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-custom nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={scrollToTop}>
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

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop">
          {/* Services Dropdown */}
          <div 
            className="nav-dropdown-wrap"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              className="dropdown-trigger" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Servicios <ChevronDown size={15} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>

            <div className={`dropdown-menu-box ${dropdownOpen ? 'open' : ''}`}>
              <a href="#servicios" className="dd-item" onClick={() => setDropdownOpen(false)}>
                <div className="dd-icon-box dd-icon-blue">
                  <Search size={18} />
                </div>
                <div>
                  <span className="dd-title">SEO en Google Search</span>
                  <span className="dd-desc">Posiciónate en búsquedas de alta intención de compra</span>
                </div>
              </a>

              <a href="#servicios" className="dd-item" onClick={() => setDropdownOpen(false)}>
                <div className="dd-icon-box dd-icon-green">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="dd-title">Google Maps & SEO Local</span>
                  <span className="dd-desc">Domina el mapa local y atrae clientes cercanos</span>
                </div>
              </a>

              <a href="#servicios" className="dd-item" onClick={() => setDropdownOpen(false)}>
                <div className="dd-icon-box dd-icon-purple">
                  <Bot size={18} />
                </div>
                <div>
                  <span className="dd-title">GEO / AEO: Chats de IA</span>
                  <span className="dd-desc">Aparece citado en ChatGPT, Perplexity y Gemini</span>
                </div>
              </a>
            </div>
          </div>

          <a href="#resultados" className="nav-item">Resultados</a>
          <a href="#pain-points" className="nav-item">Por qué nosotros</a>
          <a href="#faq" className="nav-item">FAQ</a>
          <a href="#contact" className="nav-item">Contacto</a>
        </nav>

        {/* Right CTA Actions & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <ThemeToggleButton />

          <button className="btn-primary desktop-only-btn" onClick={onOpenModal}>
            Diagnóstico Gratis <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button 
            className="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <nav className="mobile-drawer-links">
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
              <Search size={18} color="var(--blue-brand)" /> SEO en Google Search
            </a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
              <MapPin size={18} color="var(--green-brand)" /> Google Maps & SEO Local
            </a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
              <Bot size={18} color="var(--purple-brand)" /> GEO / AEO: Chats de IA
            </a>
            <a href="#resultados" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
              Resultados & Casos de Éxito
            </a>
            <a href="#pain-points" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
              Por Qué Nosotros
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">
              Preguntas Frecuentes (FAQ)
            </a>
            
            <button 
              className="btn-primary" 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              Diagnóstico Gratis <ArrowRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
