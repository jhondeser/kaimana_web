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

  // Función getRoute que faltaba
  const getRoute = (type: string) => {
    switch (type) {
      case 'class': return 'clases';
      case 'experience': return 'experiencias';
      case 'trip': return 'excursiones';
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
        position: 'relative'
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

        {/* Imagen real */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
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

        {/* Contenido */}
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ 
            marginBottom: '0.5rem',
            color: 'var(--color-text-primary)',
            fontSize: '1.1rem',
            minHeight: '3rem',
            lineHeight: '1.3'
          }}>
            {product.title}
          </h3>
          
          {/* Información del instructor */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem'
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
              color: 'var(--color-text-primary)'
            }}>
              {product.instructor.split(' ').map(n => n[0]).join('')}
            </div>
            <span style={{ 
              fontSize: '0.9rem',
              color: 'var(--color-accent-primary)',
              fontWeight: '500'
            }}>
              {product.instructor}
            </span>
          </div>

          {/* Detalles */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
            marginBottom: '1rem',
            fontSize: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-primary)' }}>
              <span style={{ marginRight: '0.5rem', fontSize: '1rem' }}>🕒</span>
              {product.duration}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-primary)' }}>
              <span style={{ marginRight: '0.5rem', fontSize: '1rem' }}>📅</span>
              {product.schedule}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-primary)' }}>
              <span style={{ marginRight: '0.5rem', fontSize: '1rem' }}>📍</span>
              <span style={{ fontSize: '0.8rem' }}>{product.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-primary)' }}>
              <span style={{ marginRight: '0.5rem', fontSize: '1rem' }}>⚡</span>
              {product.level}
            </div>
          </div>

          {/* Rating */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ 
              fontWeight: 'bold',
              color: 'var(--color-text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              <span style={{ color: 'var(--color-accent-secondary)' }}>★</span> 
              {product.rating} ({product.reviews} reseñas)
            </span>
          </div>

          {/* Incluye (solo para experiencias y trips) */}
          {product.includes && (
            <div style={{ marginBottom: '1rem' }}>
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
                opacity: 0.8
              }}>
                {product.includes.slice(0, 2).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                {product.includes.length > 2 && (
                  <li style={{ fontWeight: 'bold', color: 'var(--color-accent-primary)' }}>
                    +{product.includes.length - 2} más...
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Precio y botón */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
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
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
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