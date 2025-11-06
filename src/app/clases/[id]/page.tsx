'use client';

import React from 'react';
import { use,} from 'react';
import Image from 'next/image';
import Link from 'next/link';


// Datos de ejemplo - en un proyecto real esto vendría de una API
const classData = {
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
  description: "Aprende el arte del equilibrio en nuestra clase de slackline para principiantes. Una experiencia divertida y desafiante donde descubrirás cómo caminar sobre la cinta y mantener el balance en el hermoso entorno del Parque Central de Valencia.",
  highlights: [
    "Aprende técnicas básicas de equilibrio",
    "Material profesional incluido",
    "Grupos reducidos para atención personalizada",
    "En plena naturaleza en el Parque Central",
    "Perfecto para liberar estrés y conectar con tu cuerpo"
  ],
  images: [
    "/images/classes/slackline-1.jpg",
    "/images/classes/slackline-2.jpg",
    "/images/classes/slackline-3.jpg",
    "/images/classes/slackline-4.jpg",
    "/images/classes/slackline-5.jpg"
  ],
  whatYouWillDo: [
    "Calentamiento y estiramientos específicos para slackline",
    "Técnicas básicas de equilibrio estático en la cinta",
    "Primeros pasos en la cinta con apoyo del instructor",
    "Ejercicios de confianza y superación personal",
    "Juegos grupales para practicar lo aprendido de forma divertida"
  ],
  whatIsIncluded: [
    "Slackline profesional de 5cm de ancho",
    "Arnés de seguridad para principiantes",
    "Instructor certificado con 5 años de experiencia",
    "Seguro de responsabilidad civil",
    "Agua mineral y fruta fresca para recuperar energía",
    "Fotos y videos de tu progreso"
  ],
  requirements: [
    "Ropa cómoda y deportiva que permita movimiento",
    "Calzado deportivo o puedes practicar descalzo",
    "Edad mínima: 8 años (menores con autorización)",
    "No se requiere experiencia previa",
    "Ganas de divertirse y aprender algo nuevo",
    "Actitud positiva y mente abierta"
  ],
  meetingPoint: "Fuente principal del Parque Central de Valencia, junto al monumento circular",
  groupSize: 8,
  languages: ["Español", "Inglés", "Valenciano"],
  instructorBio: "Carlos es instructor certificado de slackline con más de 5 años de experiencia. Apasionado por los deportes de equilibrio, ha enseñado a más de 500 personas a encontrar su balance tanto físico como mental. Su enfoque es paciente y divertido, adaptándose a cada estudiante."
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ClassDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const product = classData; // En realidad buscarías por ID

  const [mainImage, setMainImage] = React.useState(product.images[0]);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
      {/* Navegación */}
      <nav style={{ padding: '2rem 0', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
        <Link href="/clases" style={{ color: 'var(--color-accent-primary)', textDecoration: 'none' }}>
          ← Volver a Clases
        </Link>
      </nav>

      {/* Galería de imágenes estilo Airbnb */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '0.5rem',
        height: '500px',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '3rem'
      }}>
        {/* Imagen principal */}
        <div style={{ position: 'relative', height: '100%' }}>
          <Image
            src={mainImage}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Grid de imágenes secundarias */}
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
              <Image
                src={image}
                alt={`${product.title} ${index + 2}`}
                fill
                style={{ objectFit: 'cover' }}
              />
              {product.images.length > 5 && index === 3 && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  +{product.images.length - 5} más
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Contenido principal */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr', 
        gap: '4rem',
        alignItems: 'start'
      }}>
        {/* Columna izquierda - Información */}
        <div>
          {/* Header */}
          <header style={{ marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              color: 'var(--color-text-primary)',
              marginBottom: '0.5rem'
            }}>
              {product.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.25rem',
                fontWeight: 'bold',
                color: 'var(--color-text-primary)'
              }}>
                ★ {product.rating} ({product.reviews} reseñas)
              </span>
              <span style={{ color: 'var(--color-accent-primary)', fontWeight: 'bold' }}>
                {product.location}
              </span>
            </div>
          </header>

          {/* Información del anfitrión */}
          <section style={{ 
            padding: '2rem 0',
            borderTop: '1px solid #e0e0e0',
            borderBottom: '1px solid #e0e0e0',
            marginBottom: '2rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Tu instructor: {product.instructor}
            </h2>
            <p style={{ color: 'var(--color-text-primary)', opacity: 0.8, lineHeight: '1.6' }}>
              {product.instructorBio}
            </p>
          </section>

          {/* Qué harás */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Qué harás
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {product.whatYouWillDo.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: 'var(--color-accent-primary)', 
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
                  <p style={{ margin: 0, lineHeight: '1.6' }}>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Qué incluye */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Qué incluye
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {product.whatIsIncluded.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent-primary)', fontSize: '1.2rem' }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Punto de encuentro */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              🗺️ Dónde nos encontraremos
            </h2>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{product.meetingPoint}</p>
            <div style={{ 
              backgroundColor: 'var(--color-highlight)', 
              padding: '1.5rem',
              borderRadius: '12px'
            }}>
              <h3 style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Información importante:</h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                <li>Llega 10 minutos antes para el registro</li>
                <li>Grupo máximo: {product.groupSize} personas</li>
                <li>Idiomas: {product.languages.join(', ')}</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Columna derecha - Widget de reserva */}
        <div style={{
          position: 'sticky',
          top: '2rem',
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
              ${product.price}
            </span>
            <span style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}> / persona</span>
          </div>

          {/* Fechas disponibles */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Próximas fechas:</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Lun 15 Oct', 'Mié 17 Oct', 'Lun 22 Oct', 'Mié 24 Oct'].map((date, index) => (
                <button
                  key={index}
                  style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid var(--color-accent-primary)',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    color: 'var(--color-accent-primary)',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Selector de horarios */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Horario:
            </label>
            <select style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '1rem'
            }}>
              <option>18:00 - 19:30</option>
              <option>19:30 - 21:00</option>
            </select>
          </div>

          {/* Botón de reserva */}
          <button style={{
            width: '100%',
            backgroundColor: 'var(--color-accent-primary)',
            color: 'white',
            border: 'none',
            padding: '1rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}>
            Reservar ahora
          </button>

          {/* Información adicional */}
          <div style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', opacity: 0.8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Duración:</span>
              <span>{product.duration}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Nivel:</span>
              <span>{product.level}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Idiomas:</span>
              <span>{product.languages.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}