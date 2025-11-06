import ProductCard from './ProductCard';
import { Product } from '../types';

const experiences: Product[] = [
  {
    id: 4,
    title: "Sunrise Experience - Yoga & Slackline",
    type: 'experience',
    category: 'combo',
    price: 35,
    duration: "3 horas",
    level: "Todos los niveles",
    schedule: "Sábados 7:00 AM",
    location: "Playa del Saler",
    image: "/images/sunrise-experience.jpg",
    instructor: "Equipo KAIMANA",
    rating: 4.9,
    reviews: 203,
    includes: ["Sesión de yoga al amanecer", "Clase de slackline", "Desayuno saludable", "Fotos profesionales"]
  },
  {
    id: 5,
    title: "Atardecer de Yoga & Meditación",
    type: 'experience',
    category: 'yoga',
    price: 28,
    duration: "2 horas",
    level: "Todos los niveles",
    schedule: "Viernes 19:00",
    location: "Mirador del Parque Natural",
    image: "/images/sunset-yoga.jpg",
    instructor: "Sofia Ramírez",
    rating: 4.8,
    reviews: 115,
    includes: ["Sesión de yoga", "Meditación guiada", "Té herbal", "Manta incluida"]
  }
];

export default function ExperienceGrid() {
  return (
    <section style={{ 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
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
        Experiencias KAIMANA
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2rem'
      }}>
        {experiences.map(experience => (
          <ProductCard key={experience.id} product={experience} />
        ))}
      </div>
    </section>
  );
}