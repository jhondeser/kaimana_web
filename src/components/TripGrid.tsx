import ProductCard from './ProductCard';
import { Product } from '../types';

const trips: Product[] = [
  {
    id: 6,
    title: "Excursión a las Cascadas de Chulilla - Aventura en la Naturaleza",
    type: 'trip',
    category: 'adventure',
    price: 45,
    duration: "Día completo",
    level: "Moderado",
    schedule: "Domingos 8:00",
    location: "Chulilla, Valencia",
    image: "/images/trips/chulilla-trip.jpg",
    instructor: "David Fernández",
    rating: 4.9,
    reviews: 156,
    description: "Descubre uno de los paisajes más espectaculares de la Comunidad Valenciana. Recorreremos el cañón del río Turia en Chulilla, donde las aguas turquesas y las cascadas naturales te harán sentir en un paraíso escondido. Una aventura perfecta para conectar con la naturaleza y disfrutar de vistas impresionantes.",
    highlights: [
      "Ruta por el espectacular cañón del río Turia",
      "Baño en pozas naturales de aguas cristalinas",
      "Vistas panorámicas desde los miradores",
      "Puentes colgantes y pasarelas sobre el río",
      "Flora y fauna autóctona de la zona",
      "Fotos profesionales del paisaje"
    ],
    images: [
      "/images/trips/chulilla-1.jpg",
      "/images/trips/chulilla-2.jpg",
      "/images/trips/chulilla-3.jpg",
      "/images/trips/chulilla-4.jpg",
      "/images/trips/chulilla-5.jpg"
    ],
    whatYouWillDo: [
      "Encuentro en punto de recogida y presentación del grupo",
      "Traslado en furgoneta equipada hasta Chulilla",
      "Inicio de ruta con briefing de seguridad y normas",
      "Descenso por el cañón admirando las formaciones rocosas",
      "Parada en las principales cascadas para fotos y baño",
      "Cruce de puentes colgantes sobre el río Turia",
      "Almuerzo picnic en mirador con vistas panorámicas",
      "Tiempo libre para nadar en las pozas naturales",
      "Regreso por ruta alternativa con diferentes perspectivas",
      "Vuelta a Valencia compartiendo experiencias"
    ],
    whatIsIncluded: [
      "Transporte ida y vuelta desde Valencia en furgoneta climatizada",
      "Guía de montaña certificado UIAGM",
      "Seguro de accidentes y responsabilidad civil",
      "Picnic saludable: sándwiches, fruta, frutos secos y agua",
      "Chaleco salvavidas para zonas de baño profundas",
      "Botiquín de primeros auxilios completo",
      "Sesión fotográfica con cámara profesional",
      "Mapa de la ruta de recuerdo",
      "Snacks energéticos para el camino"
    ],
    requirements: [
      "Calzado de trekking impermeable o deportivo con buena suela",
      "Ropa cómoda y bañador debajo",
      "Toalla y muda de ropa seca",
      "Protección solar y gorra",
      "Mochila pequeña para objetos personales",
      "Botella de agua reutilizable (podemos rellenar)",
      "Edad mínima: 12 años (con acompañante)",
      "Condición física moderada (caminata de 4-5 horas)",
      "Saber nadar (para zonas de baño)"
    ],
    meetingPoint: "Plaza de toros de Valencia - Aparcamiento principal",
    groupSize: 12,
    languages: ["Español", "Inglés", "Valenciano"],
  },
  {
    id: 7,
    title: "Exploración Cuevas de San José - Viaje al Centro de la Tierra",
    type: 'trip',
    category: 'exploration',
    price: 38,
    duration: "6 horas",
    level: "Fácil",
    schedule: "Sábados 9:00",
    location: "Vall d'Uixó, Castellón",
    image: "/images/trips/caves-trip.jpg",
    instructor: "Laura Martínez",
    rating: 4.7,
    reviews: 98,
    description: "Embárcate en una aventura subterránea única por el río navegable subterráneo más largo de Europa. Las Cuevas de San José te transportarán a un mundo de formaciones milenarias, lagos cristalinos y galerías que parecen sacadas de un cuento de hadas. Una experiencia mágica para toda la familia.",
    highlights: [
      "Navegación en barca por el río subterráneo",
      "Galerías con estalactitas y estalagmitas únicas",
      "Lago Azul con aguas transparentes",
      "Formaciones rocosas de miles de años",
      "Temperatura constante todo el año (20°C)",
      "Accesible para todas las edades y condiciones"
    ],
    images: [
      "/images/trips/caves-1.jpg",
      "/images/trips/caves-2.jpg",
      "/images/trips/caves-3.jpg",
      "/images/trips/caves-4.jpg",
      "/images/trips/caves-5.jpg"
    ],
    whatYouWillDo: [
      "Recepción en el centro de visitantes con introducción geológica",
      "Equipamiento con cascos y chalecos salvavidas",
      "Inicio del recorrido a pie por las galerías secas",
      "Admiración de la 'Sala de los Murciélagos' y sus formaciones",
      "Embarque en las barcas para navegar el río subterráneo",
      "Navegación silenciosa por el 'Lago del Diablo'",
      "Caminata por la 'Galería de los Sifones'",
      "Parada en el espectacular 'Lago Azul' para fotos",
      "Explicación sobre la formación de las cuevas y su ecosistema",
      "Regreso al exterior y tiempo libre en los jardines"
    ],
    whatIsIncluded: [
      "Entrada completa a las Cuevas de San José",
      "Guía especializado en espeleología",
      "Transporte en barca por el río subterráneo",
      "Equipo de seguridad: casco y chaleco salvavidas",
      "Guía fotográfico de las formaciones más importantes",
      "Traslado ida y vuelta desde Valencia en autobús turístico",
      "Snack de bienvenida y agua durante el recorrido",
      "Seguro de actividad específico para cuevas",
      "Souvenir fotográfico del grupo"
    ],
    requirements: [
      "Calzado cerrado y antideslizante (importante)",
      "Jersey o chaqueta ligera (temperatura constante 20°C)",
      "Ropa cómoda que permita movimiento",
      "Cámara de fotos (permitido sin flash)",
      "Mochila pequeña para objetos personales",
      "Edad mínima: 3 años (acompañados)",
      "No recomendado para personas con claustrofobia severa",
      "Movilidad básica (hay escaleras y pasos estrechos)"
    ],
    meetingPoint: "Estación de Autobuses de Valencia - Andén 12",
    groupSize: 20,
    languages: ["Español", "Inglés", "Francés"],
  }
];

export default function TripGrid() {
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
        Excursiones y Viajes
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2rem'
      }}>
        {trips.map(trip => (
          <ProductCard key={trip.id} product={trip} />
        ))}
      </div>
    </section>
  );
}