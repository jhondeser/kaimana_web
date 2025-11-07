import { Product, CommunityEvent } from '../types';

export const classesData: Product[] = [
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
    languages: ["Español", "Inglés"],
    instructorBio: "Carlos es instructor certificado de slackline con más de 5 años de experiencia. Apasionado por los deportes de equilibrio, ha enseñado a más de 500 personas a encontrar su balance tanto físico como mental."
  },
  {
    id: 2,
    title: "Yoga - Conexión Mindful",
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
      "Ambiente relajante con sonido del mar"
    ],
    images: [
      "/images/classes/yoga-1.jpg",
      "/images/classes/yoga-2.jpg",
      "/images/classes/yoga-3.jpg",
      "/images/classes/yoga-4.jpg"
    ],
    whatYouWillDo: [
      "Meditación guiada inicial con sonidos del mar",
      "Calentamiento suave con movimientos articulares",
      "Secuencia de Vinyasa Flow adaptada a todos los niveles",
      "Trabajo específico de respiración (Pranayama)",
      "Relajación final (Savasana) con visualización guiada"
    ],
    whatIsIncluded: [
      "Esterilla de yoga profesional",
      "Bloques y cinturones de yoga",
      "Mantas para la relajación final",
      "Instructora certificada RYT-500",
      "Té herbal relajante después de la clase"
    ],
    requirements: [
      "Ropa cómoda que permita movimiento",
      "Traer una toalla pequeña",
      "Hidratación personal",
      "No comer 1-2 horas antes de la práctica"
    ],
    meetingPoint: "En la zona de arena frente al chiringuito 'La Paz', Playa de la Malvarrosa",
    groupSize: 12,
    languages: ["Español", "Inglés", "Francés"],
    instructorBio: "Ana es instructora de yoga certificada RYT-500 con especialización en Vinyasa Flow y yoga terapéutico. Con más de 8 años de experiencia, su enfoque combina la tradición yogui con técnicas modernas de mindfulness."
  },
  {
    id: 3,
    title: "Skateboarding Urbano - Iniciación al Street",
    type: 'class',
    category: 'skate',
    price: 18,
    duration: "2 horas",
    level: "Principiante",
    schedule: "Viernes 17:00, Sábados 11:00 y 16:00",
    location: "Plaza del Ayuntamiento, Valencia",
    image: "/images/classes/skate-class.jpg",
    instructor: "Javi 'Flow' Morales",
    rating: 4.7,
    reviews: 76,
    description: "Descubre el mundo del skateboarding en el corazón de Valencia. Aprende los fundamentos del skate urbano en un ambiente seguro y divertido, guiado por instructores con años de experiencia en las calles valencianas.",
    highlights: [
        "Clases en ubicaciones urbanas emblemáticas",
        "Equipo de protección incluido",
        "Grupos reducidos por niveles",
        "Enfoque en seguridad y técnica correcta",
        "Comunidad skate inclusiva"
    ],
    images: [
        "/images/classes/skate-1.jpg",
        "/images/classes/skate-2.jpg",
        "/images/classes/skate-3.jpg",
        "/images/classes/skate-4.jpg"
    ],
    whatYouWillDo: [
        "Presentación y ajuste del equipo de protección",
        "Familiarización con la tabla: partes y mantenimiento básico",
        "Ejercicios de equilibrio y postura sobre la tabla",
        "Aprendizaje de empuje y dirección básica",
        "Primeras técnicas de frenado y control de velocidad",
        "Introducción a giros suaves y maniobras básicas"
    ],
    whatIsIncluded: [
        "Tabla de skate profesional para principiantes",
        "Kit completo de protección: casco, rodilleras, coderas",
        "Instructor certificado por la Federación Española de Skate",
        "Seguro de accidentes y responsabilidad civil",
        "Agua y bebidas isotónicas",
        "Stickers y merchandising de la escuela"
    ],
    requirements: [
        "Ropa cómoda y deportiva",
        "Calzado cerrado y antideslizante (zapatillas de skate)",
        "Edad mínima: 10 años (con autorización parental)",
        "No se requiere experiencia previa",
        "Actitud positiva y ganas de aprender"
    ],
    meetingPoint: "Plaza del Ayuntamiento, junto a la fuente circular - Zona de bancos de mármol",
    groupSize: 6,
    languages: ["Español", "Valenciano", "Inglés"],
    instructorBio: "Javi 'Flow' Morales lleva patinando desde los 12 años y es instructor certificado con más de 6 años de experiencia enseñando skate. Compagina su pasión por la enseñanza con competiciones locales y ha participado en eventos como el Valencia Street Contest. Especializado en iniciación, su filosofía es 'skate seguro, skate siempre'."
}
];

export const experiencesData: Product[] = [
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
    description: "Vive el amanecer más mágico de Valencia combinando yoga en la playa con una sesión de slackline. Una experiencia multisensorial que despierta tus sentidos mientras el sol asoma por el horizonte.",
    highlights: [
      "Yoga al amanecer con sonido del mar",
      "Sesión de slackline con vistas al Mediterráneo",
      "Desayuno saludable con productos locales",
      "Sesión fotográfica profesional",
      "Meditación guiada con salida del sol"
    ],
    images: [
      "/images/experiences/sunrise-1.jpg",
      "/images/experiences/sunrise-2.jpg",
      "/images/experiences/sunrise-3.jpg",
      "/images/experiences/sunrise-4.jpg"
    ],
    whatYouWillDo: [
      "Llegada al amanecer y preparación del espacio",
      "Meditación guiada con los primeros rayos de sol",
      "Sesión de Hatha Yoga fluido adaptado a todos los niveles",
      "Transición suave hacia la práctica de slackline",
      "Desayuno comunitario con productos ecológicos"
    ],
    whatIsIncluded: [
      "Esterillas de yoga profesionales",
      "Slackline completa con equipo de seguridad",
      "Desayuno saludable",
      "Instructores certificados en ambas disciplinas",
      "Sesión fotográfica con cámara profesional"
    ],
    requirements: [
      "Ropa cómoda para yoga y deporte",
      "Toalla de playa o esterilla personal",
      "Abrigo ligero para la mañana",
      "Botella de agua reutilizable"
    ],
    meetingPoint: "Aparcamiento de la Playa del Saler, junto al chiringuito 'El Sur'",
    groupSize: 10,
    languages: ["Español", "Inglés", "Valenciano"],
    instructorBio: "Nuestro equipo multidisciplinar está formado por instructores certificados en yoga y slackline con más de 5 años de experiencia combinando ambas prácticas."
  },
  // ... más experiencias
];

export const tripsData: Product[] = [
  {
    id: 6,
    title: "Excursión a las Cascadas de Chulilla",
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
    description: "Descubre uno de los paisajes más espectaculares de la Comunidad Valenciana. Recorreremos el cañón del río Turia en Chulilla, donde las aguas turquesas y las cascadas naturales te harán sentir en un paraíso escondido.",
    highlights: [
      "Ruta por el espectacular cañón del río Turia",
      "Baño en pozas naturales de aguas cristalinas",
      "Vistas panorámicas desde los miradores",
      "Puentes colgantes y pasarelas sobre el río"
    ],
    images: [
      "/images/trips/chulilla-1.jpg",
      "/images/trips/chulilla-2.jpg",
      "/images/trips/chulilla-3.jpg",
      "/images/trips/chulilla-4.jpg"
    ],
    whatYouWillDo: [
      "Encuentro en punto de recogida y presentación del grupo",
      "Traslado en furgoneta equipada hasta Chulilla",
      "Inicio de ruta con briefing de seguridad y normas",
      "Descenso por el cañón admirando las formaciones rocosas"
    ],
    whatIsIncluded: [
      "Transporte ida y vuelta desde Valencia",
      "Guía de montaña certificado UIAGM",
      "Seguro de accidentes y responsabilidad civil",
      "Picnic saludable y agua"
    ],
    requirements: [
      "Calzado de trekking impermeable",
      "Ropa cómoda y bañador debajo",
      "Protección solar y gorra",
      "Condición física moderada"
    ],
    meetingPoint: "Plaza de toros de Valencia - Aparcamiento principal",
    groupSize: 12,
    languages: ["Español", "Inglés", "Valenciano"],
    instructorBio: "David es guía de montaña certificado con más de 10 años de experiencia en rutas por la Comunidad Valenciana. Especialista en geología y ecología local."
  },
  // ... más excursiones
];

export const communityData: CommunityEvent[] = [
  {
    id: 1,
    title: "Tardeo de Slackline - Música en Vivo",
    type: 'community',
    category: 'slackline',
    price: 0,
    duration: "4 horas",
    schedule: "Viernes 17:00",
    location: "Jardines del Turia, Valencia",
    image: "/images/community/slackline-tardeo.jpg",
    description: "Únete a nuestra quedada gratuita de slackline seguida de una sesión de música en vivo y buen ambiente.",
    attendees: 45,
    maxAttendees: 60,
    highlights: [
      "Sesión libre de slackline para todos los niveles",
      "Música en vivo con artistas locales",
      "Zona de iniciación para principiantes",
      "Ambiente festivo y comunitario"
    ],
    images: [
      "/images/community/slackline-tardeo-1.jpg",
      "/images/community/slackline-tardeo-2.jpg",
      "/images/community/slackline-tardeo-3.jpg"
    ],
    whatYouWillDo: [
      "Encuentro y presentación de los participantes",
      "Sesión libre de slackline con diferentes niveles",
      "Inicio de la sesión musical con artistas locales",
      "Picnic comunitario"
    ],
    whatIsIncluded: [
      "Slacklines profesionales a disposición",
      "Equipo de seguridad para principiantes",
      "Música en vivo con sonido profesional",
      "Agua y bebidas refrescantes"
    ],
    requirements: [
      "Ropa cómoda para hacer deporte",
      "Algo para compartir en el picnic (opcional)",
      "Actitud positiva y respetuosa"
    ],
    meetingPoint: "Jardines del Turia, entre el Puente de las Flores y el Puente de la Exposición",
    organizer: "Carlos Rodríguez & Equipo KAIMANA",
    organizerBio: "Carlos es instructor de slackline con 5 años de experiencia y fundador de la comunidad KAIMANA."
  },
  {
    id: 2,
    title: "Skate Session Comunitaria - Plaza del Ayuntamiento",
    type: 'community',
    category: 'skate',
    price: 0,
    duration: "3 horas",
    schedule: "Sábados 16:00",
    location: "Plaza del Ayuntamiento, Valencia",
    image: "/images/community/skate-session.jpg",
    description: "Quedada semanal de skate abierta a todos los niveles. Comparte trucos, aprende nuevos movimientos y conecta con la comunidad skate de Valencia.",
    attendees: 35,
    maxAttendees: 50,
    highlights: [
      "Sesión libre de skate para todos los niveles",
      "Intercambio de trucos y técnicas",
      "Zona segura para principiantes",
      "Música urbana y buen rollo",
      "Photocall con fotógrafo profesional"
    ],
    images: [
      "/images/community/skate-session-1.jpg",
      "/images/community/skate-session-2.jpg",
      "/images/community/skate-session-3.jpg",
      "/images/community/skate-session-4.jpg"
    ],
    whatYouWillDo: [
      "Encuentro y presentación de skaters",
      "Sesión libre en diferentes zonas de la plaza",
      "Intercambio de trucos entre participantes",
      "Mini-taller de mantenimiento básico de tablas",
      "Sesión de fotos y videos para redes sociales",
      "Descanso con bebidas y snacks compartidos",
      "Círculo final para compartir experiencias"
    ],
    whatIsIncluded: [
      "Zona delimitada y segura para skating",
      "Equipo básico de protección disponible",
      "Música urbana con equipo de sonido",
      "Agua y bebidas refrescantes",
      "Kit básico de herramientas para mantenimiento",
      "Servicio de fotografía profesional",
      "Stickers y merchandising de la comunidad"
    ],
    requirements: [
      "Tabla de skate propia (o podemos prestarte una)",
      "Equipo de protección recomendado",
      "Ropa cómoda para deporte",
      "Actitud positiva y respetuosa",
      "Ganas de compartir y aprender",
      "Respetar las normas de seguridad",
      "Cualquier nivel es bienvenido"
    ],
    meetingPoint: "Plaza del Ayuntamiento, en la zona de bancos cerca de la fuente circular",
    organizer: "Javi 'Flow' Morales & Comunidad Skate Valencia",
    organizerBio: "Javi 'Flow' Morales es skater desde hace 12 años y fundador de la comunidad Skate Valencia. Con más de 6 años organizando eventos, su misión es crear espacios seguros e inclusivos para que todos puedan disfrutar del skateboarding."
  },
  {
    id: 3,
    title: "Yoga al Amanecer - Playa de la Malvarrosa",
    type: 'community',
    category: 'yoga',
    price: 0,
    duration: "2 horas",
    schedule: "Domingos 7:00",
    location: "Playa de la Malvarrosa, Valencia",
    image: "/images/community/yoga-amanecer.jpg",
    description: "Comienza tu domingo con energía positiva. Sesión comunitaria de yoga al amanecer frente al mar, seguida de un desayuno saludable compartido.",
    attendees: 25,
    maxAttendees: 40,
    highlights: [
      "Yoga al aire libre con salida del sol",
      "Sonido relajante de las olas del mar",
      "Meditación guiada con visualización",
      "Desayuno saludable comunitario",
      "Ambiente tranquilo y rejuvenecedor"
    ],
    images: [
      "/images/community/yoga-amanecer-1.jpg",
      "/images/community/yoga-amanecer-2.jpg",
      "/images/community/yoga-amanecer-3.jpg",
      "/images/community/yoga-amanecer-4.jpg"
    ],
    whatYouWillDo: [
      "Llegada al amanecer y preparación del espacio",
      "Meditación guiada con sonidos del mar",
      "Sesión de Hatha Yoga suave para todos los niveles",
      "Ejercicios de respiración consciente (Pranayama)",
      "Relajación profunda (Yoga Nidra) en la arena",
      "Desayuno saludable compartido en círculo",
      "Compartir de experiencias y cierre energético"
    ],
    whatIsIncluded: [
      "Esterillas de yoga profesionales",
      "Cojines de meditación y mantas",
      "Té herbal e infusiones relajantes",
      "Desayuno saludable con frutas y frutos secos",
      "Instructora certificada guiando la práctica",
      "Ambiente seguro y acogedor",
      "Kit de bienvenida con aceites esenciales"
    ],
    requirements: [
      "Ropa cómoda para yoga",
      "Abrigo ligero para la fresca mañana",
      "Toalla de playa o manta personal",
      "Botella de agua reutilizable",
      "Mentalidad abierta y respetuosa",
      "No se requiere experiencia previa",
      "Ganas de conectar con la naturaleza"
    ],
    meetingPoint: "Playa de la Malvarrosa, frente al chiringuito 'La Más Bonita'",
    organizer: "Ana Martínez & Comunidad Yoga Valencia",
    organizerBio: "Ana Martínez es instructora de yoga certificada RYT-500 con especialización en yoga terapéutico y mindfulness. Con más de 8 años de experiencia, organiza estos encuentros para compartir los beneficios del yoga en comunidad y en conexión con la naturaleza."
  }
  // ... más eventos comunitarios
];

// Función para obtener producto por ID
export const getProductById = (id: number): Product | undefined => {
  const allProducts = [...classesData, ...experiencesData, ...tripsData];
  return allProducts.find(product => product.id === id);
};

// Función para obtener evento comunitario por ID
export const getCommunityEventById = (id: number): CommunityEvent | undefined => {
  return communityData.find(event => event.id === id);
};