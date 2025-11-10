import ProductCard from './ProductCard';
import { classesData } from '../data/products';

export default function ClassGrid() {
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
          Clases Regulares
        </h2>
        <p style={{ 
          fontSize: '1.3rem',
          color: 'var(--color-text-primary)',
          opacity: 0.8,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Domina el arte del movimiento con nuestros instructores certificados
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2.5rem'
      }}>
        {classesData.map(classItem => (
          <ProductCard key={classItem.id} product={classItem} />
        ))}
      </div>
    </section>
  );
}