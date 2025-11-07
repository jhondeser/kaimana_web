import ProductCard from './ProductCard';
import { tripsData } from '../data/products';

export default function TripGrid() {
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
          Excursiones y Viajes
        </h2>
        <p style={{ 
          fontSize: '1.3rem',
          color: 'var(--color-text-primary)',
          opacity: 0.8,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Descubre los rincones más espectaculares de la Comunidad Valenciana
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2.5rem'
      }}>
        {tripsData.map(trip => (
          <ProductCard key={trip.id} product={trip} />
        ))}
      </div>
    </section>
  );
}