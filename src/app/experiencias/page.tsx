'use client';

import ExperienceGrid from '../../components/ExperienceGrid';

export default function ExperienciasPage() {
  return (
    <div>
      {/* Hero Section para Experiencias */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-accent-secondary) 0%, var(--color-highlight) 100%)',
        padding: '7rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem', 
          fontWeight: 'bold'
        }}>
          Experiencias KAIMANA
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '2rem', 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          opacity: 0.9
        }}>
          Vive momentos únicos que combinan deporte, naturaleza y conexión
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '1.5rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🌅</div>
            <div>Sunrise Experiences</div>
          </div>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '1.5rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🌇</div>
            <div>Atardeceres Mágicos</div>
          </div>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '1.5rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🎯</div>
            <div>Combos Especiales</div>
          </div>
        </div>
      </section>

      {/* Grid de experiencias */}
      <ExperienceGrid />
    </div>
  );
}