'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--color-accent-primary)',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo">
          <h1 style={{ 
            color: 'var(--color-highlight)',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            margin: 0
          }}>
            KAIMANA
          </h1>
        </div>
      </Link>

      {/* Navegación */}
      <nav>
        <ul style={{ 
          display: 'flex', 
          gap: '2rem', 
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link 
              href="/clases" 
              style={{
                color: isActive('/clases') ? 'var(--color-highlight)' : 'white',
                textDecoration: 'none',
                fontWeight: isActive('/clases') ? 'bold' : 'normal',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                backgroundColor: isActive('/clases') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Clases
            </Link>
          </li>
          <li>
            <Link 
              href="/experiencias" 
              style={{
                color: isActive('/experiencias') ? 'var(--color-highlight)' : 'white',
                textDecoration: 'none',
                fontWeight: isActive('/experiencias') ? 'bold' : 'normal',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                backgroundColor: isActive('/experiencias') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Experiencias
            </Link>
          </li>
          <li>
            <Link 
              href="/excursiones" 
              style={{
                color: isActive('/excursiones') ? 'var(--color-highlight)' : 'white',
                textDecoration: 'none',
                fontWeight: isActive('/excursiones') ? 'bold' : 'normal',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                backgroundColor: isActive('/excursiones') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Excursiones
            </Link>
          </li>
          <li>
            <Link 
              href="/comunidad" 
              style={{
                color: isActive('/comunidad') ? 'var(--color-highlight)' : 'white',
                textDecoration: 'none',
                fontWeight: isActive('/comunidad') ? 'bold' : 'normal',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                backgroundColor: isActive('/comunidad') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Comunidad
            </Link>
          </li>
        </ul>
      </nav>

      {/* Botones de usuario */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button style={{
          backgroundColor: 'transparent',
          border: '2px solid var(--color-highlight)',
          color: 'var(--color-highlight)',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          Iniciar Sesión
        </button>
        <button style={{
          backgroundColor: 'var(--color-highlight)',
          border: 'none',
          color: 'var(--color-text-primary)',
          padding: '0.5rem 1.5rem',
          borderRadius: '25px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          Registrarse
        </button>
      </div>
    </header>
  );
}