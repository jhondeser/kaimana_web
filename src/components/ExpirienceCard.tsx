import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}>
      {/* Imagen de la experiencia */}
      <div style={{ position: 'relative' }}>
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'var(--color-accent-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold'
        }}>
          {experience.title}
        </div>
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: 'white',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}>
          ♡
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ 
          marginBottom: '0.5rem',
          color: 'var(--color-text-primary)',
          fontSize: '1.1rem'
        }}>
          {experience.title}
        </h3>
        
        <p style={{ 
          marginBottom: '1rem',
          color: 'var(--color-accent-primary)',
          fontSize: '0.9rem'
        }}>
          Anfitrión: {experience.instructor}
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '1rem',
          fontSize: '0.9rem',
          color: 'var(--color-text-primary)'
        }}>
          <span style={{
            backgroundColor: 'var(--color-highlight)',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontWeight: 'bold'
          }}>
            {experience.duration}
          </span>
          <span style={{ fontWeight: 'bold' }}>
            ★ {experience.rating} ({experience.reviews})
          </span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'baseline',
          borderTop: '1px solid #eee',
          paddingTop: '1rem'
        }}>
          <span style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            color: 'var(--color-text-primary)'
          }}>
            ${experience.price}
          </span>
          <span style={{ 
            marginLeft: '0.5rem',
            color: 'var(--color-text-primary)',
            opacity: 0.8
          }}>
            por persona
          </span>
        </div>
      </div>
    </div>
  );
}