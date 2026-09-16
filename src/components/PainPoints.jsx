import React from 'react';
import { MapPin, MessageSquare, Clock } from 'lucide-react';

export const PainPoints = () => {
  return (
    <section id="pain-points" className="section-padding section-dark-alt snap-section">
      <div className="container-custom">
        <div className="section-header reveal-on-scroll">
          <span className="section-badge">¿Te suena familiar?</span>
          <h2 className="section-h2">
            Los leads que pierdes cada día <span className="gradient-text-blue">sin visibilidad multi-canal</span>
          </h2>
          <p className="section-sub">
            La forma en que tus clientes descubren negocios ha cambiado drásticamente en el último año.
          </p>
        </div>

        <div className="cards-grid-3">
          {/* Card 1 */}
          <div className="pain-card reveal-on-scroll delay-1">
            <div className="card-accent-line" style={{ background: 'linear-gradient(90deg, #10b981, #3b82f6)' }}></div>
            <div className="card-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.12)', color: 'var(--green-brand)' }}>
              <MapPin size={26} />
            </div>
            <h3>Tu negocio es invisible en Google Maps</h3>
            <p>
              El 46% de las búsquedas en Google tienen intención local. Si tu ficha no está optimizada, estás regalando esos leads a tu competencia.
            </p>
            <span className="stat-pill">46% de búsquedas son locales</span>
          </div>

          {/* Card 2 */}
          <div className="pain-card reveal-on-scroll delay-2">
            <div className="card-accent-line" style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}></div>
            <div className="card-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--purple-brand)' }}>
              <MessageSquare size={26} />
            </div>
            <h3>ChatGPT y Perplexity no te mencionan</h3>
            <p>
              Los chats de IA ya responden preguntas de compra. Si tu negocio no aparece en sus respuestas, estás perdiendo la nueva generación de clientes.
            </p>
            <span className="stat-pill" style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--purple-brand)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
              1 de cada 3 búsquedas ya es en IA
            </span>
          </div>

          {/* Card 3 */}
          <div className="pain-card reveal-on-scroll delay-3">
            <div className="card-accent-line" style={{ background: 'linear-gradient(90deg, #ef4444, #f59e0b)' }}></div>
            <div className="card-icon-wrap" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' }}>
              <Clock size={26} />
            </div>
            <h3>Dependes de los ads para conseguir clientes</h3>
            <p>
              El día que paras de pagar en Google Ads o Meta, tu flujo de leads se detiene. Sin presencia orgánica no tienes un activo que trabaje solo.
            </p>
            <span className="stat-pill">$0 de leads al parar los ads</span>
          </div>
        </div>
      </div>
    </section>
  );
};
