import React, { useState, useEffect } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export const ValueProp = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const barData = [
    { month: 'Ene', height: '22%' },
    { month: 'Feb', height: '35%' },
    { month: 'Mar', height: '52%' },
    { month: 'Abr', height: '68%' },
    { month: 'May', height: '84%' },
    { month: 'Jun', height: '100%' },
  ];

  return (
    <section id="resultados" className="section-padding snap-section">
      <div className="container-custom">
        <div className="value-grid">
          {/* Left Column: Text & List */}
          <div className="reveal-on-scroll">
            <span className="section-badge">Nuestra propuesta de valor</span>
            <h2 className="section-h2">
              No solo SEO, <span className="gradient-text-blue">presencia total</span> donde tu cliente busca
            </h2>
            <p className="section-sub" style={{ marginTop: '1rem' }}>
              Mientras tu competencia solo piensa en Google, nosotros te posicionamos en los tres canales donde un comprador decide hoy: la búsqueda orgánica, el mapa local y los chats de IA.
            </p>

            <ul className="value-list">
              <li>
                <CheckCircle2 className="check-icon" size={20} />
                <span><strong>Google Search:</strong> palabras clave con intención de compra real</span>
              </li>
              <li>
                <CheckCircle2 className="check-icon" size={20} />
                <span><strong>Google Maps:</strong> ficha GBP optimizada para atraer clientes locales</span>
              </li>
              <li>
                <CheckCircle2 className="check-icon" size={20} />
                <span><strong>Chats de IA:</strong> contenido que ChatGPT y Perplexity citan</span>
              </li>
              <li>
                <CheckCircle2 className="check-icon" size={20} />
                <span><strong>Reportes mensuales:</strong> con leads reales, no solo tráfico vacuo</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Animated Chart & Testimonial */}
          <div className="chart-card-box reveal-on-scroll delay-2">
            <div className="chart-top-bar">
              <div>
                <span className="chart-title-sm">Leads mensuales generados</span>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>Crecimiento sostenido multi-canal</p>
              </div>
              <span className="chart-badge-green">+287%</span>
            </div>

            {/* Bars */}
            <div className="bar-chart-flex">
              {barData.map((item, index) => (
                <div key={index} className="bar-column">
                  <div
                    className="bar-pill"
                    style={{
                      height: animated ? item.height : '5%',
                    }}
                    title={`${item.month}: Crecimiento a ${item.height}`}
                  ></div>
                  <span>{item.month}</span>
                </div>
              ))}
            </div>

            {/* Testimonial footer */}
            <div className="testimonial-mini-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div className="avatar-circle">RS</div>
                <div className="testimonial-info">
                  <h4>Roberto Salinas</h4>
                  <p>Director, Clínica Dental Monterrey</p>
                </div>
              </div>
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
