import { Product } from '../types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'class': return 'var(--color-accent-primary)';
      case 'experience': return 'var(--color-accent-secondary)';
      case 'trip': return 'var(--color-text-primary)';
      default: return 'var(--color-accent-primary)';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'class': return 'Clase';
      case 'experience': return 'Experiencia';
      case 'trip': return 'Excursión';
      default: return 'Actividad';
    }
  };

  const getRoute = (type: string) => {
    switch (type) {
      case 'class': return 'clases';
      case 'experience': return 'experiencias';
      case 'trip': return 'excursiones';
      case 'community': return 'comunidad';
      default: return 'clases';
    }
  };

  return (
    <Link href={`/${getRoute(product.type)}/${product.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        {/* Badge de tipo */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: getTypeColor(product.type),
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          zIndex: 2
        }}>
          {getTypeLabel(product.type)}
        </div>

        {/* Imagen */}
        <div style={{ 
          position: 'relative', 
          height: '200px', 
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ 
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          
          {/* Overlay gradient */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.3))'
          }} />
          
          {/* Botón favorito */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s',
            zIndex: 2
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-highlight)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
          }}
          >
            ♡
          </div>
        </div>

        {/* Contenido - Esta parte crece para ocupar el espacio disponible */}
        <div style={{ 
          padding: '1.5rem',
          flex: '1',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ 
            marginBottom: '0.5rem',
            color: 'var(--color-text-primary)',
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            lineHeight: '1.3',
            minHeight: '2.6rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.title}
          </h3>
          
          {/* Información del instructor */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            flexShrink: 0
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-highlight)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: 'var(--color-text-primary)',
              flexShrink: 0
            }}>
              {product.instructor.split(' ').map(n => n[0]).join('')}
            </div>
            <span style={{ 
              fontSize: '0.9rem',
              color: 'var(--color-accent-primary)',
              fontWeight: '500',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {product.instructor}
            </span>
          </div>

          {/* Detalles - Grid responsive */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '0.75rem',
            marginBottom: '1rem',
            fontSize: '0.85rem'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--color-text-primary)',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>🕒</span>
              <span style={{ fontSize: '0.8rem' }}>{product.duration}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--color-text-primary)',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>📅</span>
              <span style={{ fontSize: '0.8rem' }}>{product.schedule.split(' ')[0]}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--color-text-primary)',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>📍</span>
              <span style={{ fontSize: '0.8rem' }}>{product.location.split(',')[0]}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--color-text-primary)',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>⚡</span>
              <span style={{ fontSize: '0.8rem' }}>{product.level}</span>
            </div>
          </div>

          {/* Rating */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #eee',
            flexShrink: 0
          }}>
            <span style={{ 
              fontWeight: 'bold',
              color: 'var(--color-text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.9rem'
            }}>
              <span style={{ color: 'var(--color-accent-secondary)' }}>★</span> 
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Incluye (solo para experiencias y trips) */}
          {product.includes && product.includes.length > 0 && (
            <div style={{ marginBottom: '1rem', flexShrink: 0 }}>
              <div style={{ 
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: 'var(--color-text-primary)'
              }}>
                Incluye:
              </div>
              <ul style={{ 
                fontSize: '0.8rem',
                paddingLeft: '1rem',
                color: 'var(--color-text-primary)',
                opacity: 0.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}>
                {product.includes.slice(0, 2).map((item, index) => (
                  <li key={index} style={{ 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {item}
                  </li>
                ))}
                {product.includes.length > 2 && (
                  <li style={{ 
                    fontWeight: 'bold', 
                    color: 'var(--color-accent-primary)',
                    fontSize: '0.75rem'
                  }}>
                    +{product.includes.length - 2} más...
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Precio y botón - Esta parte va al final */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            flexShrink: 0
          }}>
            <div>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                color: 'var(--color-text-primary)'
              }}>
                ${product.price}
              </span>
              {product.type === 'class' && (
                <span style={{ 
                  marginLeft: '0.5rem',
                  color: 'var(--color-text-primary)',
                  opacity: 0.8,
                  fontSize: '0.9rem'
                }}>
                  /clase
                </span>
              )}
            </div>
            <button style={{
              backgroundColor: 'var(--color-accent-primary)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1rem',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-text-primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}