import ProductCard from './ProductCard';
import { Product } from '../types';

const classes: Product[] = [
  {
    id: 1,
    title: "Clase de Slackline - Principiantes",
    type: 'class',
    category: 'slackline',
    price: 15,
    duration: "1.5 horas",
    level: "Principiante",
    schedule: "Lunes y Miércoles 18:00",
    location: "Parque Central, Valencia",
    image: "/images/classes/slackline-class.jpg",
    instructor: "Carlos Rodríguez",
    rating: 4.8,
    reviews: 89,
    description: "Aprende el arte del equilibrio en nuestra clase de slackline para principiantes. Una experiencia divertida y desafiante donde descubrirás cómo caminar sobre la cinta y mantener el balance.",
    highlights: [
      "Aprende técnicas básicas de equilibrio",
      "Material profesional incluido",
      "Grupos reducidos para atención personalizada",
      "En plena naturaleza en el Parque Central"
    ],
    images: [
      "/images/classes/slackline-1.jpg",
      "/images/classes/slackline-2.jpg",
      "/images/classes/slackline-3.jpg",
      "/images/classes/slackline-4.jpg"
    ],
    whatYouWillDo: [
      "Calentamiento y estiramientos específicos",
      "Técnicas básicas de equilibrio estático",
      "Primeros pasos en la cinta con apoyo",
      "Ejercicios de confianza y superación",
      "Juegos grupales para practicar lo aprendido"
    ],
    whatIsIncluded: [
      "Slackline profesional de 5cm",
      "Arnés de seguridad para principiantes",
      "Instructor certificado",
      "Seguro de responsabilidad civil",
      "Agua y fruta para recuperar energía"
    ],
    requirements: [
      "Ropa cómoda y deportiva",
      "Calzado deportivo o descalzo",
      "Edad mínima: 8 años",
      "No se requiere experiencia previa",
      "Ganas de divertirse y aprender"
    ],
    meetingPoint: "Fuente principal del Parque Central de Valencia",
    groupSize: 8,
    languages: ["Español", "Inglés"]
  },
  {
    id: 2,
    title: "Vinyasa Flow Yoga - Conexión Mindful",
    type: 'class',
    category: 'yoga',
    price: 12,
    duration: "1 hora",
    level: "Todos los niveles",
    schedule: "Martes y Jueves 19:00, Sábados 10:00",
    location: "Playa de la Malvarrosa, Valencia",
    image: "/images/classes/yoga-class.jpg",
    instructor: "Ana Martínez",
    rating: 4.9,
    reviews: 142,
    description: "Sumérgete en una práctica de Vinyasa Flow que sincroniza movimiento y respiración. En el escenario natural de la playa al atardecer, conecta contigo mismo mientras las olas marcan el ritmo de tu práctica.",
    highlights: [
      "Práctica al aire libre frente al mar",
      "Enfoque en la conexión mente-cuerpo",
      "Ajustes personalizados según tu nivel",
      "Ambiente relajante con sonido del mar",
      "Perfecto para reducir estrés y ganar flexibilidad"
    ],
    images: [
      "/images/classes/yoga-1.jpg",
      "/images/classes/yoga-2.jpg",
      "/images/classes/yoga-3.jpg",
      "/images/classes/yoga-4.jpg",
      "/images/classes/yoga-5.jpg"
    ],
    whatYouWillDo: [
      "Meditación guiada inicial con sonidos del mar",
      "Calentamiento suave con movimientos articulares",
      "Secuencia de Vinyasa Flow adaptada a todos los niveles",
      "Trabajo específico de respiración (Pranayama)",
      "Posturas de equilibrio y fortalecimiento central",
      "Estiramientos profundos y apertura de caderas",
      "Relajación final (Savasana) con visualización guiada"
    ],
    whatIsIncluded: [
      "Esterilla de yoga profesional",
      "Bloques y cinturones de yoga",
      "Mantas para la relajación final",
      "Instructora certificada RYT-500",
      "Té herbal relajante después de la clase",
      "Ambientación musical cuidadosamente seleccionada",
      "Aceites esenciales para la meditación"
    ],
    requirements: [
      "Ropa cómoda que permita movimiento",
      "Traer una toalla pequeña",
      "Hidratación personal (botella de agua)",
      "No comer 1-2 horas antes de la práctica",
      "Actitud abierta y mente curiosa",
      "Respeto por el espacio propio y ajeno"
    ],
    meetingPoint: "En la zona de arena frente al chiringuito 'La Paz', Playa de la Malvarrosa",
    groupSize: 12,
    languages: ["Español", "Inglés", "Francés"],
  },
  {
  id: 3,
  title: "Skate Park Session - Técnicas Urbanas",
  type: 'class',
  category: 'skate',
  price: 18,
  duration: "2 horas",
  level: "Intermedio",
  schedule: "Viernes 17:00, Domingos 11:00",
  location: "Skatepark Benimaclet, Valencia",
  image: "/images/classes/skate-class.jpg",
  instructor: "Javier 'Javi' López",
  rating: 4.7,
  reviews: 67,
  description: "Domina las técnicas esenciales del skateboarding en uno de los mejores skateparks de Valencia. Aprende trucos fundamentales, mejora tu estilo y gana confianza sobre la tabla en un ambiente seguro y divertido.",
  highlights: [
    "Instrucción en skatepark profesional",
    "Enfoque en seguridad y técnica correcta",
    "Grupos divididos por nivel de habilidad",
    "Equipo de protección incluido",
    "Video análisis para mejorar tu técnica",
    "Comunidad skater inclusiva y supportive"
  ],
  images: [
    "/images/classes/skate-1.jpg",
    "/images/classes/skate-2.jpg",
    "/images/classes/skate-3.jpg",
    "/images/classes/skate-4.jpg",
    "/images/classes/skate-5.jpg"
  ],
  whatYouWillDo: [
    "Revisión de equipo y ajustes personalizados de la tabla",
    "Calentamiento específico para skaters",
    "Técnicas de pushing y carving en rampas",
    "Aprendizaje de ollies y shove-its con progresiones",
    "Práctica en diferentes obstáculos: banks, ledges, rails",
    "Ejercicios de equilibrio y control de velocidad",
    "Sesión libre supervisada para practicar lo aprendido",
    "Cool down y estiramientos para prevenir lesiones"
  ],
  whatIsIncluded: [
    "Tabla de skate profesional (si no tienes propia)",
    "Casco certificado y equipo de protección completo",
    "Instructor con certificación en primeros auxilios",
    "Agua y bebidas isotónicas",
    "Acceso prioritario al skatepark",
    "Sesión de fotos y videos de tu progreso",
    "Kit básico de mantenimiento para tablas",
    "Seguro de accidentes deportivos"
  ],
  requirements: [
    "Ropa cómoda y resistente",
    "Zapatillas de skate o calzado plano",
    "Edad mínima: 10 años",
    "Conocimiento básico de equilibrio en tabla",
    "Actitud positiva y respeto por otros skaters",
    "Ganas de caerse y levantarse (¡parte del proceso!)"
  ],
  meetingPoint: "Entrada principal del Skatepark Benimaclet, junto a la zona de bancos",
  groupSize: 6,
  languages: ["Español", "Valenciano", "Inglés básico"],
  }
];

export default function ClassGrid() {
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
        Clases Regulares
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2rem'
      }}>
        {classes.map(classItem => (
          <ProductCard key={classItem.id} product={classItem} />
        ))}
      </div>
    </section>
  );
}