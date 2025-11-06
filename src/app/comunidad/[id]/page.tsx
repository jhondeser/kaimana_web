'use client';

import { useState } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Datos de ejemplo para eventos comunitarios
const communityData = {
  id: 1,
  title: "Tardeo de Slackline - Música en Vivo",
  type: 'community',
  category: 'slackline',
  price: 0,
  duration: "4 horas",
  schedule: "Viernes 17:00",
  location: "Jardines del Turia, Valencia",
  image: "/images/community/slackline-tardeo.jpg",
  description: "Únete a nuestra quedada gratuita de slackline seguida de una sesión de música en vivo y buen ambiente. Un espacio para practicar, aprender y conectar con otros amantes del equilibrio. Trae tu energía positiva y comparte una tarde inolvidable en el corazón de Valencia.",
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
  organizer: "Comunidad KAIMANA",
  organizerBio: "KAIMANA nace de la pasión por crear espacios de conexión a través del deporte y la música. Creemos en el poder de la comunidad para transformar ciudades en lugares más humanos y divertidos. Nuestros eventos son siempre gratuitos e inclusivos, porque el deporte y la amistad deberían ser accesibles para todos.",
  socialMedia: ["@kaimana_valencia", "#KAIMANATardeos"]
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CommunityDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const event = communityData;

  const [mainImage, setMainImage] = useState(event.images[0]);
  const [isAttending, setIsAttending] = useState(false);
  const attendancePercentage = (event.attendees / event.maxAttendees) * 100;

  const handleAttend = () => {
    setIsAttending(!isAttending);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <nav style={{ padding: '6rem 0', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
        <Link href="/comunidad" style={{ color: 'var(--color-accent-primary)', textDecoration: 'none' }}>
          ← Volver a Comunidad
        </Link>
      </nav>

      {/* Header del evento */}
      <header style={{ textAlign: 'center', marginBottom: '3rem', padding: '2rem', backgroundColor: 'var(--color-highlight)', borderRadius: '12px' }}>
        <div style={{ backgroundColor: 'var(--color-accent-secondary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1rem', fontWeight: 'bold' }}>
          EVENTO GRATUITO
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
          {event.title}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          {event.description}
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
        
        {/* Columna izquierda - Información */}
        <div>
          {/* Galería de imágenes */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '100%' }}>
                <Image src={mainImage} alt={event.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', height: '100%' }}>
                {event.images.slice(1, 3).map((image, index) => (
                  <button
                    key={index}
                    style={{ position: 'relative', height: '100%', border: 'none', padding: 0, cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                    onClick={() => setMainImage(image)}
                  >
                    <Image src={image} alt={`${event.title} ${index + 2}`} fill style={{ objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Qué harás */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>Actividades del evento</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {event.whatYouWillDo.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--color-highlight)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)', fontSize: '12px', fontWeight: 'bold', flexShrink: 0 }}>
                    {index + 1}
                  </div>
                  <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--color-text-primary)' }}>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Organizador */}
          <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'var(--color-accent-primary)', borderRadius: '12px', color: 'white' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Organizado por: {event.organizer}</h2>
            <p style={{ lineHeight: '1.6', opacity: 0.9 }}>{event.organizerBio}</p>
            <div style={{ marginTop: '1rem' }}>
              <strong>Síguenos:</strong> {event.socialMedia?.join(' • ')}
            </div>
          </section>
        </div>

        {/* Columna derecha - Información de asistencia */}
        <div style={{ position: 'sticky', top: '2rem' }}>
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent-secondary)' }}>GRATIS</div>
              <div style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>Evento comunitario</div>
            </div>

            {/* Información del evento */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📅</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{event.schedule}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Viernes</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🕒</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{event.duration}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Duración</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{event.location}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Punto de encuentro</div>
                </div>
              </div>
            </div>

            {/* Barra de asistencia */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <span>Asistentes confirmados:</span>
                <span>{event.attendees}/{event.maxAttendees}</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${attendancePercentage}%`, height: '100%', backgroundColor: attendancePercentage >= 80 ? '#E53E3E' : attendancePercentage >= 50 ? '#E68A00' : '#137A6B' }} />
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', opacity: 0.8, marginTop: '0.5rem' }}>
                {event.maxAttendees - event.attendees} plazas disponibles
              </div>
            </div>

            {/* Botones de acción */}
            <button
              onClick={handleAttend}
              style={{
                width: '100%',
                backgroundColor: isAttending ? 'var(--color-accent-secondary)' : 'var(--color-accent-primary)',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '1rem',
                transition: 'all 0.3s'
              }}
            >
              {isAttending ? '✓ Asistiré' : 'Confirmar Asistencia'}
            </button>

            <button style={{
              width: '100%',
              backgroundColor: 'transparent',
              border: '2px solid var(--color-accent-primary)',
              color: 'var(--color-accent-primary)',
              padding: '0.75rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Compartir Evento
            </button>
          </div>

          {/* Información adicional */}
          <div style={{ backgroundColor: 'var(--color-highlight)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>📝 Para tener en cuenta</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--color-text-primary)', fontSize: '0.9rem' }}>
              <li>Trae algo para compartir si quieres</li>
              <li>No es necesario tener experiencia</li>
              <li>Evento familiar-friendly</li>
              <li>Se suspende por lluvia</li>
              <li>Síguenos en redes para updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}