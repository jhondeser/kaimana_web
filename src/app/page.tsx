'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NavigationPills from '../components/NavigationPills';
import ClassGrid from '../components/ClassGrid';
import ExperienceGrid from '../components/ExperienceGrid';
import TripGrid from '../components/TripGrid';
import CommunityGrid from '../components/CommunityGrid';


export default function Home() {
  const [activeSection, setActiveSection] = useState<'classes' | 'experiences' | 'trips' | 'community'>('classes');

  const renderSection = () => {
    switch (activeSection) {
      case 'classes':
        return (
          <div>
            <ClassGrid />
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Link href="/clases" style={{
                backgroundColor: 'var(--color-accent-primary)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>
                Ver Todas las Clases →
              </Link>
            </div>
          </div>
        );
      case 'experiences':
        return (
          <div>
            <ExperienceGrid />
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Link href="/experiencias" style={{
                backgroundColor: 'var(--color-accent-secondary)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>
                Ver Todas las Experiencias →
              </Link>
            </div>
          </div>
        );
      case 'trips':
        return (
          <div>
            <TripGrid />
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Link href="/excursiones" style={{
                backgroundColor: 'var(--color-text-primary)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>
                Ver Todas las Excursiones →
              </Link>
            </div>
          </div>
        );
      case 'community':
        return (
          <div>
            <CommunityGrid />
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Link href="/comunidad" style={{
                backgroundColor: 'var(--color-highlight)',
                color: 'var(--color-text-primary)',
                padding: '1rem 2rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block'
              }}>
                Ver Todos los Eventos →
              </Link>
            </div>
          </div>
        );
      default:
        return <ClassGrid />;
    }
  };

  return (
    <div>     
      <main>
        <Hero />
        
        <NavigationPills 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        {renderSection()}
      </main>
    </div>
  );
}