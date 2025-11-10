'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/clases', label: 'Clases' },
  { href: '/experiencias', label: 'Experiencias' },
  { href: '/excursiones', label: 'Excursiones' },
  { href: '/comunidad', label: 'Comunidad' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Verificar al cargar
  checkScreenSize();

  // Escuchar cambios de tamaño
  window.addEventListener('resize', checkScreenSize);
  
  // Limpiar event listener
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia a color sólido después de 50px de scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease-in-out',
        // Transparente por defecto, con color al hacer scroll
        backgroundColor: isScrolled ? 'rgba(244, 198, 110, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(58, 42, 14, 0.1)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(58, 42, 14, 0.1)' : 'none',
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: "100%"
        }}>
          {/* Logo */}
          <Link 
            href="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
            onClick={closeMobileMenu}
          >
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '45px',
                height: '45px',
                border: `2px solid ${isScrolled ? '#137A6B' : 'white'}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s ease',
                background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: isScrolled ? '#137A6B' : 'white',
                  borderRadius: '50%',
                  transition: 'all 0.4s ease'
                }}></div>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                width: '12px',
                height: '12px',
                backgroundColor: '#E68A00',
                borderRadius: '50%',
                border: `2px solid ${isScrolled ? '#F4C66E' : 'transparent'}`,
                transition: 'all 0.4s ease'
              }}></div>
            </div>
            <span style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              transition: 'all 0.4s ease',
              color: isScrolled ? '#3A2A0E' : 'white',
              textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              KAIMANA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: "center",
            gap: '2rem'
          }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    position: 'relative',
                    fontWeight: '600',
                    fontSize: '1rem',
                    letterSpacing: '0.025em',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    color: isScrolled ? '#3A2A0E' : 'white',
                    ...(isActive && {
                      color: '#050505ff',
                      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'
                    }),
                    ...(!isActive && {
                      ':hover': {
                        color: '#137A6B',
                        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'
                      }
                    })
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 10 }}>{item.label}</span>
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: '2px',
                      backgroundColor: '#137A6B',
                      borderRadius: '2px'
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons Desktop */}
          <div style={{  display: isMobile ? 'none' : 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link
              href="/login"
              className={`cta-outline ${isScrolled ? 'scrolled' : ''}`}
              style={{
                padding: '0.5rem 1.5rem',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                borderRadius: '25px',
                border: `2px solid ${isScrolled ? '#137A6B' : 'white'}`,
                color: isScrolled ? '#137A6B' : 'white'
              }}
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/registro"
              className={`cta ${isScrolled ? 'scrolled' : ''}`}
              style={{
                padding: '0.5rem 1.5rem',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                borderRadius: '25px',
                backgroundColor: isScrolled ? '#E68A00' : 'rgba(255, 209, 90, 0.9)',
                color: isScrolled ? 'white' : '#3A2A0E'
              }}
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '8px',
              transition: 'all 0.4s ease',
              backdropFilter: 'blur(10px)'
            }}
            aria-label="Toggle menu"
          >
            <div style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '20px',
                  transition: 'all 0.3s ease',
                  transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                  backgroundColor: isScrolled ? '#3A2A0E' : 'white'
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '20px',
                  transition: 'all 0.3s ease',
                  opacity: isMobileMenuOpen ? 0 : 1,
                  backgroundColor: isScrolled ? '#3A2A0E' : 'white'
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '20px',
                  transition: 'all 0.3s ease',
                  transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                  backgroundColor: isScrolled ? '#3A2A0E' : 'white'
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            display: isMobileMenuOpen ? 'block' : 'none',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(244, 198, 110, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(58, 42, 14, 0.1)',
            transition: 'all 0.4s ease-in-out',
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            boxShadow: '0 8px 30px rgba(58, 42, 14, 0.15)'
          }}
        >
          <nav style={{
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  style={{
                    display: 'block',
                    padding: '1rem 1.5rem',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    ...(isActive
                      ? {
                          backgroundColor: '#137A6B',
                          color: 'white',
                          transform: 'translateX(8px)'
                        }
                      : {
                          color: '#3A2A0E',
                          backgroundColor: 'rgba(255, 255, 255, 0.6)',
                          ':hover': {
                            backgroundColor: '#137A6B',
                            color: 'white',
                            transform: 'translateX(8px)'
                          }
                        })
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '2px solid rgba(58, 42, 14, 0.1)',
              display: 'flex',
              gap: '0.75rem',
              marginTop: '1rem'
            }}>
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className={`cta-outline ${isScrolled ? 'scrolled' : ''}`}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  border: '2px solid #137A6B',
                  color: '#137A6B',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/registro"
                onClick={closeMobileMenu}
                className={`cta ${isScrolled ? 'scrolled' : ''}`}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  backgroundColor: '#E68A00',
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  borderRadius: '25px',
                }}
              >
                Registrarse
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Media Queries para Desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          nav {
            display: flex !important;
          }
          div:last-child {
            display: flex !important;
          }
          button {
            display: none !important;
          }
          div[style*="position: absolute"] {
            display: none !important;
          }
        }

        /* Hover effects para desktop */
        @media (min-width: 768px) {
          a:hover {
            transform: translateY(-2px);
          }
        }
        /* CTA hover styles using className so hover can be dynamic based on isScrolled */
        a.cta:hover {
          /* not scrolled hover */
          background-color: #E68A00 !important;
          color: white !important;
        }
        a.cta.scrolled:hover {
          /* scrolled hover */
          background-color: #FFD15A !important;
          color: #3A2A0E !important;
        }
        a.cta-outline:hover {
          /* outline default hover (not scrolled) */
          background-color: white !important;
          color: #3A2A0E !important;
        }
        a.cta-outline.scrolled:hover {
          /* outline when scrolled */
          background-color: #137A6B !important;
          color: white !important;
        }
      `}</style>
    </header>
  );
}