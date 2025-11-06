import { CommunityEvent } from '../types';
import Image from 'next/image';
import Link from 'next/link';

interface CommunityCardProps {
  event: CommunityEvent;
}

export default function CommunityCard({ event }: CommunityCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'slackline': return '';
      case 'yoga': return '';
      case 'skate': return '';
      default: return '';
    }
  };

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
        
      }}>
        {/* Imagen del evento */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
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
            background: 'linear-gradient(135deg, rgba(244, 198, 110, 0.8) 0%, rgba(230, 138, 0, 0.6) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '1rem'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '0.5rem'
            }}>
              {getCategoryIcon(event.category)}
            </div>
            <div style={{
              backgroundColor: 'var(--color-accent-secondary)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              EVENTO GRATUITO
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ 
            marginBottom: '1rem',
            color: 'var(--color-text-primary)',
            fontSize: '1.2rem',
            textAlign: 'center',
            lineHeight: '1.3'
          }}>
            {event.title}
          </h3>

          {/* Descripción */}
          <p style={{
            marginBottom: '1.5rem',
            color: 'var(--color-text-primary)',
            opacity: 0.8,
            fontSize: '0.9rem',
            textAlign: 'center',
            lineHeight: '1.4',
            height: "100px"
          }}>
            {event.description}
          </p>

          {/* Detalles del evento */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🕒</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Duración</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)' }}>{event.duration}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>📅</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Cuándo</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)' }}>{event.schedule}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>📍</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Lugar</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)' }}>{event.location}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>👥</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Asistentes</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)' }}>{event.attendees}/{event.maxAttendees}</div>
            </div>
          </div>

          {/* Barra de progreso de asistencia */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              marginBottom: '0.5rem',
              color: 'var(--color-text-primary)'
            }}>
              <span>Plazas disponibles</span>
              <span>{event.maxAttendees - event.attendees} restantes</span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
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
            transition: 'all 0.3s'
          }}>
            Ver Detalles del Evento
          </button>
        </div>
      </div>
    </Link>
  );
}