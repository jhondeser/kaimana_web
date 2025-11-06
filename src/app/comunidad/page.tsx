'use client';

import CommunityGrid from '../../components/CommunityGrid';

export default function ComunidadPage() {
  return (
    <div>
      {/* Hero Section para Comunidad */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-highlight) 0%, var(--color-accent-secondary) 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'var(--color-text-primary)'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem', 
          fontWeight: 'bold'
        }}>
          Comunidad KAIMANA
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '2rem', 
          maxWidth: '600px', 
          margin: '0 auto 2rem'
        }}>
          Únete a nuestra familia de amantes del deporte y la naturaleza
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent-primary)' }}>500+</div>
            <div>Miembros Activos</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent-primary)' }}>15</div>
            <div>Eventos Mensuales</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent-primary)' }}>100%</div>
            <div>Gratuito</div>
          </div>
        </div>
      </section>

      {/* Información de la comunidad */}
      <section style={{
        padding: '3rem 2rem',
        backgroundColor: 'var(--color-accent-primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '2rem' }}>
          ¿Por qué unirte a nuestra comunidad?
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>🤝 Conoce Gente Increíble</h3>
            <p style={{ opacity: 0.9 }}>Conecta con personas que comparten tu pasión por el deporte y la naturaleza</p>
          </div>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>🎉 Eventos Semanales</h3>
            <p style={{ opacity: 0.9 }}>Tardeos, quedadas y sesiones gratuitas cada semana</p>
          </div>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>💪 Mejora Tus Habilidades</h3>
            <p style={{ opacity: 0.9 }}>Aprende de otros miembros y comparte tus conocimientos</p>
          </div>
        </div>
      </section>

      {/* Grid de eventos comunitarios */}
      <CommunityGrid />

      {/* CTA para unirse */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'var(--color-highlight)',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          marginBottom: '1rem',
          color: 'var(--color-text-primary)'
        }}>
          ¿Listo para unirte?
        </h2>
        <p style={{ 
          marginBottom: '2rem',
          color: 'var(--color-text-primary)',
          opacity: 0.8,
          maxWidth: '500px',
          margin: '0 auto 2rem'
        }}>
          Forma parte de la comunidad más activa de deportes al aire libre en Valencia
        </p>
        <button style={{
          backgroundColor: 'var(--color-accent-primary)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '25px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          Unirse a la Comunidad
        </button>
      </section>
    </div>
  );
}