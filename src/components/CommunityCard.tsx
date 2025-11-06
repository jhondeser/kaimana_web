import { CommunityEvent } from '../types';
import Image from 'next/image';
import Link from 'next/link';

interface CommunityCardProps {
  event: CommunityEvent;
}

export default function CommunityCard({ event }: CommunityCardProps) {
  

  const attendancePercentage = (event.attendees / event.maxAttendees) * 100;
  const getAttendanceColor = () => {
    if (attendancePercentage >= 80) return '#E53E3E';
    if (attendancePercentage >= 50) return '#E68A00';
    return '#137A6B';
  };

  return (
    <Link href={`/comunidad/${event.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Imagen del evento */}
        <div style={{ 
          position: 'relative', 
          height: '250px', 
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            style={{ 
              objectFit: 'cover'
            }}
          />
          
          {/* Overlay con categoría */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '1rem'
          }}>
            <div style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '0.5rem'
            }}>
            </div>
            <div style={{
              backgroundColor: 'var(--color-accent-secondary)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: 'bold',
              whiteSpace: 'nowrap'
            }}>
              EVENTO GRATUITO
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ 
          padding: '1.5rem',
          flex: '1',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ 
            marginBottom: '1rem',
            color: 'var(--color-text-primary)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)',
            textAlign: 'center',
            lineHeight: '1.3',
            minHeight: '2.8rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {event.title}
          </h3>

          {/* Descripción */}
          <p style={{
            marginBottom: '1.5rem',
            color: 'var(--color-text-primary)',
            opacity: 0.8,
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            textAlign: 'center',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: '1'
          }}>
            {event.description}
          </p>


          {/* Barra de progreso de asistencia */}
          <div style={{ marginBottom: '1.5rem', flexShrink: 0 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              marginBottom: '0.5rem',
              color: 'var(--color-text-primary)'
            }}>
              <span>Plazas disponibles</span>
              <span>{event.maxAttendees - event.attendees} restantes</span>
            </div>
            <div style={{
              width: '100%',
              height: '6px',
              backgroundColor: '#e0e0e0',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${attendancePercentage}%`,
                height: '100%',
                backgroundColor: getAttendanceColor(),
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          {/* Botón de acción */}
          <button style={{
            width: '100%',
            backgroundColor: 'var(--color-accent-primary)',
            color: 'white',
            border: 'none',
            padding: '0.75rem',
            borderRadius: '25px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}>
            Ver Detalles
          </button>
        </div>
      </div>
    </Link>
  );
}