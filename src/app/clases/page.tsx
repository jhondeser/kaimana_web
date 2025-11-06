'use client';

import { useState } from 'react';
import ClassGrid from '../../components/ClassGrid';
import CategoryFilter from '../../components/CategoryFilter';

export default function ClasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Todas las Clases' },
    { id: 'slackline', name: 'Slackline' },
    { id: 'yoga', name: 'Yoga' },
    { id: 'skate', name: 'Skate' }
  ];

  return (
    <div>
      {/* Hero Section para Clases */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-accent-primary) 0%, var(--color-highlight) 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem', 
          fontWeight: 'bold'
        }}>
          Clases KAIMANA
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '2rem', 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          opacity: 0.9
        }}>
          Aprende slackline, yoga y skate con los mejores instructores de Valencia
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</div>
            <div>Deportes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>15+</div>
            <div>Instructores</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>4.8</div>
            <div>Rating Promedio</div>
          </div>
        </div>
      </section>

      {/* Filtro de categorías */}
      <section style={{
        padding: '2rem',
        backgroundColor: 'var(--color-highlight)',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '1.3rem',
          color: 'var(--color-text-primary)',
          opacity: 0.8,
          maxWidth: '600px',
          margin: '0 auto',
          marginBottom:"10px",
          lineHeight: '1.6'
        }}>
          Filtra por deporte
        </h2>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              style={{
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '25px',
                backgroundColor: selectedCategory === category.id 
                  ? 'var(--color-accent-primary)' 
                  : 'white',
                color: selectedCategory === category.id ? 'white' : 'var(--color-text-primary)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de clases */}
      <ClassGrid />
    </div>
  );
}