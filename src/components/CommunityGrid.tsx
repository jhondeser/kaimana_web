import CommunityCard from './CommunityCard';
import { communityData } from '@/data/products'; // Importar desde products.ts

export default function CommunityGrid() {
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
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, var(--color-highlight), var(--color-accent-secondary))',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          display: 'inline-block'
        }}>
          Eventos de Comunidad
        </h2>
        <p style={{ 
          fontSize: '1.3rem',
          color: 'var(--color-text-primary)',
          opacity: 0.8,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Conecta, comparte y crea recuerdos con nuestra familia KAIMANA
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2.5rem'
      }}>
        {communityData.map(event => (
          <CommunityCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}