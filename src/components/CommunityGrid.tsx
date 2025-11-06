import CommunityCard from './CommunityCard';
import { CommunityEvent } from '../types';

const communityEvents: CommunityEvent[] = [
  {
    id: 1,
    title: "Slackline - Música en Vivo",
    type: 'community',
    category: 'slackline',
    price: 0,
    duration: "4 horas",
    schedule: "Viernes 17:00",
    location: "Jardines del Turia, Valencia",
    image: "/images/community/slackline-tardeo.jpg",
    description: "Únete a nuestra quedada gratuita de slackline seguida de una sesión de música en vivo y buen ambiente. Un espacio para practicar, aprender y conectar con otros amantes del equilibrio.",
    attendees: 45,
    maxAttendees: 60,
    highlights: [
      "Sesión libre de slackline para todos los niveles",
      "Música en vivo con artistas locales",
      "Zona de iniciación para principiantes",
      "Intercambio de trucos y técnicas",
      "Ambiente festivo y comunitario",
      "Comida y bebida para compartir"
    ],
    images: [
      "/images/community/slackline-tardeo-1.jpg",
      "/images/community/slackline-tardeo-2.jpg",
      "/images/community/slackline-tardeo-3.jpg",
      "/images/community/slackline-tardeo-4.jpg"
    ],
    whatYouWillDo: [
      "Encuentro y presentación de los participantes",
      "Sesión libre de slackline con diferentes niveles",
      "Taller básico para principiantes (opcional)",
      "Intercambio de trucos y técnicas entre participantes",
      "Inicio de la sesión musical con artistas locales",
      "Picnic comunitario (trae algo para compartir)",
      "Juegos grupales y dinámicas de conexión",
      "Cierre con círculo de agradecimiento y próximos eventos"
    ],
    whatIsIncluded: [
      "Slacklines profesionales a disposición",
      "Equipo de seguridad para principiantes",
      "Música en vivo con sonido profesional",
      "Zona de descanso con mantas y cojines",
      "Agua y bebidas refrescantes",
      "Snacks saludables para compartir",
      "Fotógrafo del evento",
      "Ambiente seguro e inclusivo"
    ],
    requirements: [
      "Ropa cómoda para hacer deporte",
      "Calzado deportivo o descalzo",
      "Algo para compartir en el picnic (opcional)",
      "Actitud positiva y respetuosa",
      "Ganas de conocer gente nueva",
      "No se requiere experiencia previa",
      "Todas las edades son bienvenidas"
    ],
    meetingPoint: "Jardines del Turia, entre el Puente de las Flores y el Puente de la Exposición",
    organizer: "Carlos Rodríguez & Equipo KAIMANA",
    organizerBio: "Carlos es instructor de slackline con 5 años de experiencia y fundador de la comunidad KAIMANA. Apasionado por crear espacios donde el deporte se convierte en excusa para construir amistades y momentos memorables.",
    socialMedia: ["@kaimana_valencia", "#KAIMANATardeos"]
  },
  {
    id: 2,
    title: "Skate & Chill Session",
    type: 'community',
    category: 'skate',
    price: 0,
    duration: "3 horas",
    schedule: "Sábados 16:00",
    location: "Skatepark Benimaclet, Valencia",
    image: "/images/community/skate-community.jpg",
    description: "Sesión libre de skate con música, refrescos y buena vibra. Un espacio seguro para skaters de todos los niveles compartir trucos, experiencias y pasar un rato increíble juntos.",
    attendees: 32,
    maxAttendees: 50,
    highlights: [
      "Sesión libre en skatepark profesional",
      "Música seleccionada por la comunidad",
      "Zona de principiantes con instructores voluntarios",
      "Intercambio de tablas y equipo",
      "Refrescos y snacks gratuitos",
      "Competencia amistosa de trucos"
    ],
    images: [
      "/images/community/skate-community-1.jpg",
      "/images/community/skate-community-2.jpg",
      "/images/community/skate-community-3.jpg",
      "/images/community/skate-community-4.jpg"
    ],
    whatYouWillDo: [
      "Calentamiento grupal y estiramientos",
      "Sesión libre por niveles: principiante, intermedio, avanzado",
      "Rueda de presentaciones y objetivos personales",
      "Taller de mantenimiento básico de tablas",
      "Sesión de trucos con feedback comunitario",
      "Competencia amistosa con premios simbólicos",
      "Tiempo de networking y conexión",
      "Cierre con planes futuros de la comunidad skater"
    ],
    whatIsIncluded: [
      "Acceso prioritario al skatepark",
      "Equipo de protección disponible (cascos, rodilleras)",
      "Música ambiente con equipo de sonido",
      "Refrescos, agua y snacks energéticos",
      "Kit básico de herramientas para mantenimiento",
      "Instructores voluntarios para principiantes",
      "Fotógrafo capturando los mejores momentos",
      "Zona de descanso con sombra"
    ],
    requirements: [
      "Tabla de skate (tenemos algunas de préstamo)",
      "Equipo de protección recomendado",
      "Ropa cómoda y resistente",
      "Zapatillas de skate o calzado plano",
      "Actitud de respeto y apoyo mutuo",
      "Ganas de compartir y aprender",
      "Edad mínima: 8 años (con supervisión)"
    ],
    meetingPoint: "Entrada principal del Skatepark Benimaclet, junto a la rampa principal",
    organizer: "Javi López & Comunidad Skater Valencia",
    organizerBio: "Javi lleva patinando desde los 12 años y es el coordinador de la comunidad skater de KAIMANA. Su misión es hacer del skate un deporte más accesible y crear una red de apoyo entre skaters de todos los niveles.",
    socialMedia: ["@kaimana_skate", "#KAIMANASkate"]
  },
  {
    id: 3,
    title: "Yoga Comunitario en el Parque",
    type: 'community',
    category: 'yoga',
    price: 0,
    duration: "1.5 horas",
    schedule: "Domingos 10:00",
    location: "Parque de Cabecera, Valencia",
    image: "/images/community/community-yoga.jpg",
    description: "Clase de yoga gratuita al aire libre para todos los niveles. Conecta con tu respiración, estira tu cuerpo y comparte esta práctica milenaria en comunidad. Trae tu esterilla y tu mejor energía.",
    attendees: 28,
    maxAttendees: 40,
    highlights: [
      "Yoga al aire libre en entorno natural",
      "Adaptado a todos los niveles y edades",
      "Enfoque en comunidad y conexión",
      "Práctica inclusiva y no competitiva",
      "Meditación guiada grupal",
      "Espacio para compartir experiencias"
    ],
    images: [
      "/images/community/community-yoga-1.jpg",
      "/images/community/community-yoga-2.jpg",
      "/images/community/community-yoga-3.jpg",
      "/images/community/community-yoga-4.jpg"
    ],
    whatYouWillDo: [
      "Llegada y preparación del espacio personal",
      "Meditación guiada de conexión con la naturaleza",
      "Pranayama (ejercicios de respiración consciente)",
      "Secuencia de Hatha Yoga adaptada a todos los niveles",
      "Trabajo en parejas para ajustes suaves",
      "Tiempo para preguntas y dudas sobre posturas",
      "Relajación final (Savasana) con sonidos naturales",
      "Círculo de compartir y agradecimiento",
      "Té herbal y conversación post-clase"
    ],
    whatIsIncluded: [
      "Esterillas de yoga para quien no tenga",
      "Bloques, cinturones y mantas de yoga",
      "Instructores certificados voluntarios",
      "Agua infusionada con hierbas frescas",
      "Tés e infusiones orgánicas post-clase",
      "Ambientación musical suave y relajante",
      "Guía digital de yoga para principiantes",
      "Espacio seguro y respetuoso"
    ],
    requirements: [
      "Esterilla de yoga (tenemos de préstamo)",
      "Ropa cómoda que permita movimiento",
      "Botella de agua personal",
      "Toalla pequeña (opcional)",
      "Mente abierta y corazón dispuesto",
      "Respeto por el silencio durante la práctica",
      "No se requiere experiencia previa",
      "Todas las edades y condiciones son bienvenidas"
    ],
    meetingPoint: "Zona verde central del Parque de Cabecera, cerca del estanque",
    organizer: "Ana Martínez & Sangha Yoga Valencia",
    organizerBio: "Ana es instructora de yoga certificada RYT-500 y fundadora de la comunidad de yoga gratuita de KAIMANA. Cree firmemente que el yoga debería ser accesible para todos y que la práctica en comunidad potencia sus beneficios transformadores.",
    socialMedia: ["@kaimana_yoga", "#KAIMANAYoga"]
  }
];

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
        {communityEvents.map(event => (
          <CommunityCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}