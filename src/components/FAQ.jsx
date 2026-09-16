import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿En qué se diferencia de SEO tradicional?',
      a: 'El SEO tradicional solo mira Google Search. Nosotros trabajamos los tres canales donde un comprador decide hoy: Google Search, Google Maps y los chats de IA. Un negocio que aparece en los tres genera significativamente más leads con la misma inversión.'
    },
    {
      q: '¿Cómo logran que aparezca en ChatGPT o Perplexity?',
      a: 'Los modelos de IA citan fuentes que consideran autoritativas y bien estructuradas. Optimizamos tu contenido, tus datos estructurados y tu autoridad de dominio para que seas la respuesta natural cuando alguien pregunta por tu servicio en un chat de IA.'
    },
    {
      q: '¿En cuánto tiempo veré resultados?',
      a: 'Los primeros movimientos en Google Maps y Search son visibles entre 30-60 días. Resultados sólidos en los tres canales en 90 días. La visibilidad en IA depende de la autoridad de tu sitio, generalmente entre 60-120 días.'
    },
    {
      q: '¿Necesito tener presencia en los 3 canales desde el inicio?',
      a: 'Depende de tu negocio. En el diagnóstico detectamos dónde está la mayor oportunidad para ti específicamente. Muchos negocios locales generan el 80% de sus leads desde Maps, por lo que empezamos donde el impacto es mayor.'
    },
    {
      q: '¿Cuánto cuesta y hay contratos anuales?',
      a: 'Los planes empiezan desde $497 USD/mes. Sin contratos anuales obligatorios: si no estás satisfecho, cancelas con 30 días de aviso. Ofrecemos garantía de resultados en 90 días.'
    },
    {
      q: '¿Cómo sé que están trabajando?',
      a: 'Acceso a dashboard en tiempo real con posiciones, tráfico y leads por canal. Reunión mensual de resultados. Total transparencia sobre cada acción ejecutada.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding section-dark-alt snap-section">
      <div className="container-narrow">
        <div className="section-header reveal-on-scroll">
          <span className="section-badge">FAQ</span>
          <h2 className="section-h2">Resolvemos tus dudas</h2>
          <p className="section-sub">Transparencia total sobre nuestra metodología y entregables.</p>
        </div>

        <div className="faq-stack">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item-box reveal-on-scroll">
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
