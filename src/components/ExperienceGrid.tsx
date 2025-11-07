import ExperienceCard from './ExperienceCard'; // Asegúrate de tener este componente
import { experiencesData } from '../data/products';

export default function ExperienceGrid() {
  return (
    <section style={{ 
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'var(--color-text-primary)',
          marginBottom: '1rem'
        }}>
          Experiencias Únicas
        </h2>
        <p style={{ 
          fontSize: '1.3rem',
          color: 'var(--color-text-primary)',
          opacity: 0.8,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Vive momentos inolvidables con nuestras experiencias especiales
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2.5rem'
      }}>
        {experiencesData.map(experience => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}