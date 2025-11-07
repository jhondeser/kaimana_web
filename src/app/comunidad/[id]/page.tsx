'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCommunityEventById } from '@/data/products';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CommunityDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const event = getCommunityEventById(parseInt(id));

  const [mainImage, setMainImage] = useState(event?.images[0] || '');
  const [isAttending, setIsAttending] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!event) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center', paddingTop: '4rem' }}>
        <h1>Evento no encontrado</h1>
        <Link href="/comunidad" style={{ color: 'var(--color-accent-primary)', textDecoration: 'none' }}>
          ← Volver a Comunidad
        </Link>
      </div>
    );
  }

  const attendancePercentage = (event.attendees / event.maxAttendees) * 100;

  const handleAttend = () => {
    setIsAttending(!isAttending);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <nav style={{ padding: isMobile ? '4rem 0' : '6rem 0', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
        <Link href="/comunidad" style={{ color: 'var(--color-accent-primary)', textDecoration: 'none' }}>
          ← Volver a Comunidad
        </Link>
      </nav>

      {/* Header del evento */}
      <header style={{ 
        textAlign: 'center', 
        marginBottom: isMobile ? '2rem' : '3rem', 
        padding: isMobile ? '1.5rem' : '2rem', 
        backgroundColor: 'var(--color-highlight)', 
        borderRadius: '12px' 
      }}>
        <div style={{ 
          backgroundColor: 'var(--color-accent-secondary)', 
          color: 'white', 
          padding: '0.5rem 1.5rem', 
          borderRadius: '20px', 
          display: 'inline-block', 
          marginBottom: '1rem', 
          fontWeight: 'bold',
          fontSize: isMobile ? '0.8rem' : '0.9rem'
        }}>
          EVENTO GRATUITO
        </div>
        <h1 style={{ 
          fontSize: isMobile ? '1.8rem' : '2.5rem', 
          fontWeight: 'bold', 
          color: 'var(--color-text-primary)', 
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          {event.title}
        </h1>
        <p style={{ 
          fontSize: isMobile ? '1rem' : '1.2rem', 
          color: 'var(--color-text-primary)', 
          opacity: 0.8, 
          maxWidth: '600px', 
          margin: '0 auto',
          lineHeight: '1.5'
        }}>
          {event.description}
        </p>
      </header>

      <div style={{ 
        display: isMobile ? 'flex' : 'grid', 
        gridTemplateColumns: isMobile ? 'none' : '2fr 1fr', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '2rem' : '4rem', 
        alignItems: 'start' 
      }}>
        
        {/* Columna izquierda - Información */}
        <div style={{ width: isMobile ? '100%' : 'auto' }}>
          {/* Galería de imágenes */}
          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <div style={{ 
              display: isMobile ? 'flex' : 'grid', 
              gridTemplateColumns: isMobile ? 'none' : '1fr 1fr', 
              flexDirection: isMobile ? 'column' : 'row',
              gap: '0.5rem', 
              height: isMobile ? 'auto' : '400px', 
              borderRadius: '12px', 
              overflow: 'hidden' 
            }}>
              <div style={{ 
                position: 'relative', 
                height: isMobile ? '250px' : '100%',
                width: isMobile ? '100%' : 'auto'
              }}>
                <Image src={mainImage} alt={event.title} fill style={{ objectFit: 'cover' }} />
              </div>
              
              {/* Grid de imágenes secundarias - solo en desktop */}
              {!isMobile && (
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr', 
                  gap: '0.5rem', 
                  height: '100%' 
                }}>
                  {event.images.slice(1, 3).map((image, index) => (
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
                      <Image src={image} alt={`${event.title} ${index + 2}`} fill style={{ objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Miniaturas para móvil */}
              {isMobile && (
                <div style={{
                  display: 'flex',
                  flexDirection:'column',
                  gap: '0.5rem',
                  overflowX: 'auto',
                  padding: '0.5rem 0',
                }}>
                  {event.images.map((image, index) => (
                    <button
                      key={index}
                      style={{ 
                        position: 'relative', 
                        height: '130px',
                        width: '100%',
                        flexShrink: 0,
                        border: mainImage === image ? '2px solid var(--color-accent-primary)' : '2px solid transparent',
                        padding: 0,
                        cursor: 'pointer',
                        borderRadius: '8px',
                        overflow: 'hidden'
                      }}
                      onClick={() => setMainImage(image)}
                    >
                      <Image
                        src={image}
                        alt={`${event.title} ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Qué harás */}
          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: isMobile ? '1rem' : '1.5rem', 
              color: 'var(--color-text-primary)' 
            }}>
              Actividades del evento
            </h2>
            <div style={{ display: 'grid', gap: isMobile ? '0.75rem' : '1rem' }}>
              {event.whatYouWillDo.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '0.75rem' : '1rem' }}>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--color-highlight)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--color-text-primary)', 
                    fontSize: '12px', 
                    fontWeight: 'bold', 
                    flexShrink: 0 
                  }}>
                    {index + 1}
                  </div>
                  <p style={{ 
                    margin: 0, 
                    lineHeight: '1.6', 
                    color: 'var(--color-text-primary)',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Organizador */}
          <section style={{ 
            marginBottom: isMobile ? '2rem' : '3rem', 
            padding: isMobile ? '1.5rem' : '2rem', 
            backgroundColor: 'var(--color-accent-primary)', 
            borderRadius: '12px', 
            color: 'white' 
          }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.2rem' : '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>
              Organizado por: {event.organizer}
            </h2>
            <p style={{ 
              lineHeight: '1.6', 
              opacity: 0.9,
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              {event.organizerBio}
            </p>
            {event.socialMedia && (
              <div style={{ marginTop: '1rem', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                <strong>Síguenos:</strong> {event.socialMedia.join(' • ')}
              </div>
            )}
          </section>
        </div>

        {/* Columna derecha - Información de asistencia */}
        <div style={{ 
          position: isMobile ? 'static' : 'sticky', 
          top: isMobile ? 'auto' : '2rem',
          width: isMobile ? '100%' : 'auto'
        }}>
          <div style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '12px', 
            padding: isMobile ? '1rem' : '1.5rem', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
            marginBottom: isMobile ? '1.5rem' : '2rem' 
          }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
              <div style={{ 
                fontSize: isMobile ? '1.5rem' : '2rem', 
                fontWeight: 'bold', 
                color: 'var(--color-accent-secondary)' 
              }}>
                GRATIS
              </div>
              <div style={{ 
                color: 'var(--color-text-primary)', 
                opacity: 0.8,
                fontSize: isMobile ? '0.8rem' : '0.9rem'
              }}>
                Evento comunitario
              </div>
            </div>

            {/* Información del evento */}
            <div style={{ marginBottom: isMobile ? '1rem' : '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>📅</span>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: isMobile ? '0.9rem' : '1rem' }}>{event.schedule}</div>
                  <div style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', opacity: 0.8 }}>Viernes</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>🕒</span>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: isMobile ? '0.9rem' : '1rem' }}>{event.duration}</div>
                  <div style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', opacity: 0.8 }}>Duración</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>📍</span>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: isMobile ? '0.9rem' : '1rem' }}>{event.location}</div>
                  <div style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', opacity: 0.8 }}>Punto de encuentro</div>
                </div>
              </div>
            </div>

            {/* Barra de asistencia */}
            <div style={{ marginBottom: isMobile ? '1rem' : '1.5rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                marginBottom: '0.5rem' 
              }}>
                <span>Asistentes confirmados:</span>
                <span>{event.attendees}/{event.maxAttendees}</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${attendancePercentage}%`, height: '100%', backgroundColor: attendancePercentage >= 80 ? '#E53E3E' : attendancePercentage >= 50 ? '#E68A00' : '#137A6B' }} />
              </div>
              <div style={{ 
                fontSize: isMobile ? '0.7rem' : '0.8rem', 
                color: 'var(--color-text-primary)', 
                opacity: 0.8, 
                marginTop: '0.5rem' 
              }}>
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
                padding: isMobile ? '0.75rem' : '1rem',
                borderRadius: '8px',
                fontSize: isMobile ? '1rem' : '1.1rem',
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
              padding: isMobile ? '0.5rem' : '0.75rem',
              borderRadius: '8px',
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Compartir Evento
            </button>
          </div>

          {/* Información adicional */}
          <div style={{ 
            backgroundColor: 'var(--color-highlight)', 
            padding: isMobile ? '1rem' : '1.5rem', 
            borderRadius: '12px' 
          }}>
            <h3 style={{ 
              marginBottom: '1rem', 
              fontWeight: 'bold', 
              color: 'var(--color-text-primary)',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              📝 Para tener en cuenta
            </h3>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '1.2rem', 
              color: 'var(--color-text-primary)', 
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              lineHeight: '1.4'
            }}>
              {event.requirements.slice(0, 5).map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}