'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Datos de ejemplo para experiencias
const experienceData = {
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
  instructorBio: "Nuestro equipo multidisciplinar está formado por instructores certificados en yoga y slackline con más de 5 años de experiencia combinando ambas prácticas. Especializados en crear experiencias transformadoras al aire libre, creemos en el poder de los amaneceres para resetear la mente y conectar con nuestra esencia más auténtica."
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ExperienceDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const product = experienceData;

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
      {/* Navegación */}
      <nav style={{ padding: isMobile ? '4rem 0' : '6rem 0', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
        <Link href="/experiencias" style={{ color: 'var(--color-accent-secondary)', textDecoration: 'none' }}>
          ← Volver a Experiencias
        </Link>
      </nav>

      {/* Galería de imágenes responsive */}
      <section style={{ 
        display: isMobile ? 'flex' : 'grid', 
        gridTemplateColumns: isMobile ? 'none' : '1fr 1fr', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: '0.5rem',
        height: isMobile ? 'auto' : '500px',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: isMobile ? '2rem' : '3rem'
      }}>
        {/* Imagen principal */}
        <div style={{ 
          position: 'relative', 
          height: isMobile ? '300px' : '100%',
          width: isMobile ? '100%' : 'auto'
        }}>
          <Image src={mainImage} alt={product.title} fill style={{ objectFit: 'cover' }} />
        </div>
        
        {/* Grid de imágenes secundarias - solo en desktop */}
        {!isMobile && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '0.5rem', 
            height: '100%' 
          }}>
            {product.images.slice(1, 5).map((image, index) => (
              <button
                key={index}
                style={{ 
                  position: 'relative', 
                  height: '100%', 
                  border: 'none', 
                  padding: 0, 
                  cursor: 'pointer', 
                  borderRadius: '8px', 
                  overflow: 'hidden' 
                }}
                onClick={() => setMainImage(image)}
              >
                <Image src={image} alt={`${product.title} ${index + 2}`} fill style={{ objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        )}

        {/* Miniaturas para móvil */}
        {isMobile && (
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            padding: '0.5rem 0'
          }}>
            {product.images.map((image, index) => (
              <button
                key={index}
                style={{ 
                  position: 'relative', 
                  height: '150px',
                  width: '150px',
                  flexShrink: 0,
                  border: mainImage === image ? '2px solid var(--color-accent-secondary)' : '2px solid transparent',
                  padding: 0,
                  cursor: 'pointer',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Contenido principal responsive */}
      <div style={{ 
        display: isMobile ? 'flex' : 'grid', 
        gridTemplateColumns: isMobile ? 'none' : '2fr 1fr', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '2rem' : '4rem', 
        alignItems: 'start' 
      }}>
        
        {/* Columna izquierda - Información */}
        <div style={{ width: isMobile ? '100%' : 'auto' }}>
          <header style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
            <h1 style={{ 
              fontSize: isMobile ? '1.8rem' : '2.5rem', 
              fontWeight: 'bold', 
              color: 'var(--color-text-primary)', 
              marginBottom: '0.5rem',
              lineHeight: '1.2'
            }}>
              {product.title}
            </h1>
            <div style={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '0.5rem' : '1rem', 
              marginBottom: '1rem' 
            }}>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.25rem', 
                fontWeight: 'bold', 
                color: 'var(--color-text-primary)' 
              }}>
                ★ {product.rating} ({product.reviews} reseñas)
              </span>
              <span style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold' }}>{product.location}</span>
            </div>
          </header>

          {/* Información del equipo */}
          <section style={{ 
            padding: isMobile ? '1.5rem 0' : '2rem 0', 
            borderTop: '1px solid #e0e0e0', 
            borderBottom: '1px solid #e0e0e0', 
            marginBottom: isMobile ? '1.5rem' : '2rem' 
          }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.3rem' : '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>
              Tu equipo: {product.instructor}
            </h2>
            <p style={{ 
              color: 'var(--color-text-primary)', 
              opacity: 0.8, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              {product.instructorBio}
            </p>
          </section>

          {/* Qué harás */}
          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              Qué experimentarás
            </h2>
            <div style={{ display: 'grid', gap: isMobile ? '0.75rem' : '1rem' }}>
              {product.whatYouWillDo.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '0.75rem' : '1rem' }}>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--color-accent-secondary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    fontSize: '12px', 
                    fontWeight: 'bold', 
                    flexShrink: 0 
                  }}>
                    {index + 1}
                  </div>
                  <p style={{ 
                    margin: 0, 
                    lineHeight: '1.6',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Qué incluye */}
          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              Qué incluye
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: isMobile ? '0.75rem' : '1rem' 
            }}>
              {product.whatIsIncluded.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent-secondary)', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Punto de encuentro */}
          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>
              🗺️ Dónde nos encontraremos
            </h2>
            <p style={{ 
              lineHeight: '1.6', 
              marginBottom: '1rem',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              {product.meetingPoint}
            </p>
            <div style={{ 
              backgroundColor: 'var(--color-highlight)', 
              padding: isMobile ? '1rem' : '1.5rem', 
              borderRadius: '12px' 
            }}>
              <h3 style={{ 
                marginBottom: '0.5rem', 
                fontWeight: 'bold',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>
                Recomendaciones para la experiencia:
              </h3>
              <ul style={{ 
                margin: 0, 
                paddingLeft: '1.2rem',
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                lineHeight: '1.5'
              }}>
                <li>Llega 15 minutos antes para disfrutar del amanecer</li>
                <li>Trae una muda por si quieres darte un baño después</li>
                <li>Grupo máximo: {product.groupSize} personas para experiencia premium</li>
                <li>Idiomas: {product.languages.join(', ')}</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Columna derecha - Widget de reserva */}
        <div style={{ 
          position: isMobile ? 'static' : 'sticky', 
          top: isMobile ? 'auto' : '2rem',
          width: isMobile ? '100%' : 'auto',
          border: '1px solid #e0e0e0', 
          borderRadius: '12px', 
          padding: isMobile ? '1rem' : '1.5rem', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
            <span style={{ 
              fontSize: isMobile ? '1.5rem' : '2rem', 
              fontWeight: 'bold', 
              color: 'var(--color-text-primary)' 
            }}>
              ${product.price}
            </span>
            <span style={{ 
              color: 'var(--color-text-primary)', 
              opacity: 0.8,
              fontSize: isMobile ? '0.8rem' : '0.9rem'
            }}>
              / persona
            </span>
          </div>

          <div style={{ marginBottom: isMobile ? '1rem' : '1.5rem' }}>
            <h3 style={{ 
              marginBottom: '0.5rem', 
              fontWeight: 'bold',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              Próximas fechas:
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              {['Sáb 19 Oct', 'Sáb 26 Oct', 'Sáb 2 Nov'].map((date, index) => (
                <button key={index} style={{ 
                  padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem', 
                  border: '1px solid var(--color-accent-secondary)', 
                  borderRadius: '8px', 
                  backgroundColor: 'white', 
                  color: 'var(--color-accent-secondary)', 
                  cursor: 'pointer', 
                  fontSize: isMobile ? '0.8rem' : '0.9rem' 
                }}>
                  {date}
                </button>
              ))}
            </div>
          </div>

          <button style={{ 
            width: '100%', 
            backgroundColor: 'var(--color-accent-secondary)', 
            color: 'white', 
            border: 'none', 
            padding: isMobile ? '0.75rem' : '1rem', 
            borderRadius: '8px', 
            fontSize: isMobile ? '1rem' : '1.1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            marginBottom: '1rem' 
          }}>
            Reservar experiencia
          </button>

          <div style={{ 
            fontSize: isMobile ? '0.8rem' : '0.9rem', 
            color: 'var(--color-text-primary)', 
            opacity: 0.8 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Duración:</span>
              <span>{product.duration}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Nivel:</span>
              <span>{product.level}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Grupo máximo:</span>
              <span>{product.groupSize} personas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}