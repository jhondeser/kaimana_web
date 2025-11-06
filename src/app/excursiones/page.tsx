'use client';

import TripGrid from '../../components/TripGrid';

export default function ExcursionesPage() {
  return (
    <div>
      {/* Hero Section para Excursiones */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent-primary) 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem', 
          fontWeight: 'bold'
        }}>
          Excursiones KAIMANA
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '2rem', 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          opacity: 0.9
        }}>
          Descubre los lugares más espectaculares de la Comunidad Valenciana
        </p>
      
        
      </section>

      {/* Información adicional */}
      <section style={{
        padding: '3rem 2rem',
        backgroundColor: 'var(--color-highlight)',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '1.3rem',
          color: 'var(--color-text-primary)',
          opacity: 0.8,
          textAlign: "center",
          margin: '0 auto',
          marginBottom:"15px",
          lineHeight: '1.6'
        }}>
          ¿Qué incluyen nuestras excursiones?
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚐</div>
            <h3 style={{ color: 'var(--color-text-primary)' }}>Transporte Incluido</h3>
            <p style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>Recogida y regreso desde puntos céntricos de Valencia</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧭</div>
            <h3 style={{ color: 'var(--color-text-primary)' }}>Guías Expertos</h3>
            <p style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>Guías locales certificados y apasionados</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
            <h3 style={{ color: 'var(--color-text-primary)' }}>Fotos del Recuerdo</h3>
            <p style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>Sesión fotográfica incluida en cada excursión</p>
          </div>
        </div>
      </section>

      {/* Grid de excursiones */}
      <TripGrid />
    </div>
  );
}