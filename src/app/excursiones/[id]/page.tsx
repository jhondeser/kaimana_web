'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '@/data/products';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function TripDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const product = getProductById(parseInt(id));

  const [mainImage, setMainImage] = useState(product?.images[0] || '');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!product) {
    return (
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem', textAlign: 'center', paddingTop: '4rem' }}>
        <h1>Excursión no encontrada</h1>
        <Link href="/excursiones" style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}>
          ← Volver a Excursiones
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
      <nav style={{ padding: isMobile ? '6rem 0' : '6rem 0', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
        <Link href="/excursiones" style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}>
          ← Volver a Excursiones
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
                  border: mainImage === image ? '2px solid var(--color-text-primary)' : '2px solid transparent',
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
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>{product.location}</span>
            </div>
          </header>

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
              Tu guía: {product.instructor}
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

          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              Itinerario del día
            </h2>
            <div style={{ display: 'grid', gap: isMobile ? '0.75rem' : '1rem' }}>
              {product.whatYouWillDo.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '0.75rem' : '1rem' }}>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--color-text-primary)', 
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

          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              Servicios incluidos
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: isMobile ? '0.75rem' : '1rem' 
            }}>
              {product.whatIsIncluded.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.4rem' : '1.8rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>
              🗺️ Punto de encuentro
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
                Información importante para la excursión:
              </h3>
              <ul style={{ 
                margin: 0, 
                paddingLeft: '1.2rem',
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                lineHeight: '1.5'
              }}>
                <li>Hora de salida: {product.schedule} (puntualidad importante)</li>
                <li>Hora aproximada de regreso: 18:00</li>
                <li>Grupo máximo: {product.groupSize} personas</li>
                <li>Recomendamos desayunar antes de la salida</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Widget de reserva */}
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
              Próximas salidas:
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              {['Dom 20 Oct', 'Dom 27 Oct', 'Dom 3 Nov'].map((date, index) => (
                <button key={index} style={{ 
                  padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem', 
                  border: '1px solid var(--color-text-primary)', 
                  borderRadius: '8px', 
                  backgroundColor: 'white', 
                  color: 'var(--color-text-primary)', 
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
            backgroundColor: 'var(--color-text-primary)', 
            color: 'white', 
            border: 'none', 
            padding: isMobile ? '0.75rem' : '1rem', 
            borderRadius: '8px', 
            fontSize: isMobile ? '1rem' : '1.1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            marginBottom: '1rem' 
          }}>
            Reservar excursión
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Transporte:</span>
              <span>Incluido</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Comida:</span>
              <span>Picnic incluido</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}