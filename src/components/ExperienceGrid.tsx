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
  location: "Playa del Saler, Valencia",
  image: "/images/experiences/sunrise-experience.jpg",
  instructor: "Equipo KAIMANA",
  rating: 4.9,
  reviews: 203,
  description: "Vive el amanecer más mágico de Valencia combinando yoga en la playa con una sesión de slackline. Una experiencia multisensorial que despierta tus sentidos mientras el sol asoma por el horizonte. Perfecta para empezar el día con energía positiva y conexión total con la naturaleza.",
  highlights: [
    "Yoga al amanecer con sonido del mar",
    "Sesión de slackline con vistas al Mediterráneo",
    "Desayuno saludable con productos locales",
    "Sesión fotográfica profesional",
    "Meditación guiada con salida del sol",
    "Grupo reducido para experiencia íntima"
  ],
  images: [
    "/images/experiences/sunrise-1.jpg",
    "/images/experiences/sunrise-2.jpg",
    "/images/experiences/sunrise-3.jpg",
    "/images/experiences/sunrise-4.jpg",
    "/images/experiences/sunrise-5.jpg"
  ],
  whatYouWillDo: [
    "Llegada al amanecer y preparación del espacio",
    "Meditación guiada con los primeros rayos de sol",
    "Sesión de Hatha Yoga fluido adaptado a todos los niveles",
    "Transición suave hacia la práctica de slackline",
    "Instrucción personalizada de equilibrio en la cinta",
    "Juegos de confianza y superación personal",
    "Desayuno comunitario con productos ecológicos",
    "Sesión fotográfica con la luz dorada del amanecer",
    "Compartir de experiencias y cierre energético"
  ],
  whatIsIncluded: [
    "Esterillas de yoga profesionales",
    "Slackline completa con equipo de seguridad",
    "Desayuno saludable: fruta, zumos y bollería integral",
    "Instructores certificados en ambas disciplinas",
    "Sesión fotográfica con cámara profesional",
    "Mantas y cojines para la meditación",
    "Tés e infusiones orgánicas",
    "Seguro de actividad al aire libre",
    "Souvenir digital de la experiencia"
  ],
  requirements: [
    "Ropa cómoda para yoga y deporte",
    "Toalla de playa o esterilla personal (opcional)",
    "Calzado deportivo o descalzo",
    "Abrigo ligero (las mañanas pueden ser frescas)",
    "Botella de agua reutilizable",
    "Actitud positiva y mente abierta",
    "No se requiere experiencia previa",
    "Ganas de vivir momentos únicos"
  ],
  meetingPoint: "Aparcamiento de la Playa del Saler, junto al chiringuito 'El Sur'",
  groupSize: 10,
  languages: ["Español", "Inglés", "Valenciano"],
  },
  {
    id: 5,
    title: "Sunrise set - Yoga & Ice bath",
    type: 'experience',
    category: 'combo',
    price: 35,
    duration: "3 horas",
    level: "Todos los niveles",
    schedule: "Sábados 7:00 AM",
    location: "Playa del Saler, Valencia",
    image: "/images/experiences/sunset-experience.jpg",
    instructor: "Equipo KAIMANA",
    rating: 4.9,
    reviews: 203,
    description: "Vive el amanecer más mágico de Valencia combinando yoga en la playa con una sesión de slackline. Una experiencia multisensorial que despierta tus sentidos mientras el sol asoma por el horizonte. Perfecta para empezar el día con energía positiva y conexión total con la naturaleza.",
    highlights: [
      "Yoga al amanecer con sonido del mar",
      "Sesión de slackline con vistas al Mediterráneo",
      "Desayuno saludable con productos locales",
      "Sesión fotográfica profesional",
      "Meditación guiada con salida del sol",
      "Grupo reducido para experiencia íntima"
    ],
    images: [
      "/images/experiences/sunrise-1.jpg",
      "/images/experiences/sunrise-2.jpg",
      "/images/experiences/sunrise-3.jpg",
      "/images/experiences/sunrise-4.jpg",
      "/images/experiences/sunrise-5.jpg"
    ],
    whatYouWillDo: [
      "Llegada al amanecer y preparación del espacio",
      "Meditación guiada con los primeros rayos de sol",
      "Sesión de Hatha Yoga fluido adaptado a todos los niveles",
      "Transición suave hacia la práctica de slackline",
      "Instrucción personalizada de equilibrio en la cinta",
      "Juegos de confianza y superación personal",
      "Desayuno comunitario con productos ecológicos",
      "Sesión fotográfica con la luz dorada del amanecer",
      "Compartir de experiencias y cierre energético"
    ],
    whatIsIncluded: [
      "Esterillas de yoga profesionales",
      "Slackline completa con equipo de seguridad",
      "Desayuno saludable: fruta, zumos y bollería integral",
      "Instructores certificados en ambas disciplinas",
      "Sesión fotográfica con cámara profesional",
      "Mantas y cojines para la meditación",
      "Tés e infusiones orgánicas",
      "Seguro de actividad al aire libre",
      "Souvenir digital de la experiencia"
    ],
    requirements: [
      "Ropa cómoda para yoga y deporte",
      "Toalla de playa o esterilla personal (opcional)",
      "Calzado deportivo o descalzo",
      "Abrigo ligero (las mañanas pueden ser frescas)",
      "Botella de agua reutilizable",
      "Actitud positiva y mente abierta",
      "No se requiere experiencia previa",
      "Ganas de vivir momentos únicos"
    ],
    meetingPoint: "Aparcamiento de la Playa del Saler, junto al chiringuito 'El Sur'",
    groupSize: 10,
    languages: ["Español", "Inglés", "Valenciano"],
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