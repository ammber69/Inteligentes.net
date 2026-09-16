import React from 'react';
import { Search, MapPin, Bot, Zap, BarChart3, Target } from 'lucide-react';

export const Services = () => {
  const servicesList = [
    {
      icon: <Search size={24} />,
      title: 'SEO en Google Search',
      desc: 'Atacamos las palabras clave donde el usuario ya tiene la intención de comprar, no solo de curiosear.',
      color: 'var(--blue-brand)',
      bg: 'rgba(59, 130, 246, 0.12)'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Google Maps y SEO local',
      desc: 'Optimizamos tu ficha de Google Business Profile para que aparezcas en el mapa cuando alguien busca lo que vendes cerca.',
      color: 'var(--green-brand)',
      bg: 'rgba(16, 185, 129, 0.12)'
    },
    {
      icon: <Bot size={24} />,
      title: 'Visibilidad en chats de IA',
      desc: 'Estructuramos tu contenido para que ChatGPT, Perplexity y Gemini te mencionen cuando alguien pregunte por tu servicio.',
      color: 'var(--purple-brand)',
      bg: 'rgba(139, 92, 246, 0.12)'
    },
    {
      icon: <Zap size={24} />,
      title: 'Auditoría técnica completa',
      desc: 'Velocidad, estructura y datos correctos para que Google y los modelos de IA entiendan perfectamente tu negocio.',
      color: 'var(--blue-brand)',
      bg: 'rgba(59, 130, 246, 0.12)'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Reportes de leads reales',
      desc: 'Dashboard en tiempo real con leads, posiciones y conversiones por canal. Sin letra pequeña.',
      color: 'var(--green-brand)',
      bg: 'rgba(16, 185, 129, 0.12)'
    },
    {
      icon: <Target size={24} />,
      title: 'Contenido que convierte',
      desc: 'Creamos contenido que responde las preguntas que tus clientes le hacen a Google y a los chats de IA.',
      color: 'var(--purple-brand)',
      bg: 'rgba(139, 92, 246, 0.12)'
    },
  ];

  return (
    <section id="servicios" className="section-padding section-dark-alt snap-section">
      <div className="container-custom">
        <div className="section-header reveal-on-scroll">
          <span className="section-badge">Por qué elegirnos</span>
          <h2 className="section-h2">
            Todo lo que necesitas para <span className="gradient-text-multi">atraer leads en los 3 canales</span>
          </h2>
          <p className="section-sub">
            Estrategias integradas y orientadas 100% a la conversión de clientes potenciales.
          </p>
        </div>

        <div className="cards-grid-3">
          {servicesList.map((srv, i) => (
            <div key={i} className={`pain-card reveal-on-scroll delay-${(i % 3) + 1}`}>
              <div className="card-icon-wrap" style={{ background: srv.bg, color: srv.color }}>
                {srv.icon}
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
