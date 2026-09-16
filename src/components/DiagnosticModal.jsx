import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export const DiagnosticModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    url: '',
    email: '',
    channel: 'Todos los 3 canales'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({ url: '', email: '', channel: 'Todos los 3 canales' });
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <img 
                src={logoImg} 
                alt="Logo" 
                style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'cover' }} 
              />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Diagnóstico Gratis de Visibilidad</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Analizamos tu negocio en Google Search, Maps e Inteligencia Artificial sin costo.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">URL de tu Sitio Web o Ficha de Google</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="ej. miempresa.com"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Correo Electrónico (donde enviar el informe)</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="tu@empresa.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">¿Cuál es tu prioridad principal?</label>
                <select 
                  className="form-input"
                  value={formData.channel}
                  onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                >
                  <option value="Todos los 3 canales">Presencia en los 3 Canales (Search, Maps, IA)</option>
                  <option value="Google Maps">Aparecer en los primeros puestos de Google Maps</option>
                  <option value="Google Search">Aumentar posiciones orgánicas en Google</option>
                  <option value="Chats de IA">Aparecer en recomendaciones de ChatGPT/Perplexity</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Solicitar Diagnóstico <ArrowRight size={18} />
              </button>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                🔒 Tus datos están protegidos. Sin compromiso ni llamadas de ventas molestas.
              </p>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div 
              style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.15)', 
                color: 'var(--green-brand)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              ¡Solicitud Recibida!
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: '1.6' }}>
              Estamos preparando tu análisis técnico y de visibilidad multicanal. Recibirás tu informe en <strong>{formData.email}</strong> dentro de las próximas 24 horas.
            </p>

            <button className="btn-secondary" onClick={handleReset} style={{ width: '100%' }}>
              Entendido, Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
