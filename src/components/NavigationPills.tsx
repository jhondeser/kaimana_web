interface NavigationPillsProps {
  activeSection: 'classes' | 'experiences' | 'trips' | 'community';
  onSectionChange: (section: 'classes' | 'experiences' | 'trips' | 'community') => void;
}

export default function NavigationPills({ activeSection, onSectionChange }: NavigationPillsProps) {
  const sections = [
    { id: 'classes' as const, name: 'Clases', description: 'Clases regulares de yoga, slackline y skate' },
    { id: 'experiences' as const, name: 'Experiencias', description: 'Paquetes únicos como Sunrise Experiences' },
    { id: 'trips' as const, name: 'Excursiones', description: 'Viajes a cascadas, cuevas y naturaleza' },
    { id: 'community' as const, name: 'Comunidad', description: 'Tardeos gratuitos y quedadas' }
  ];

  return (
    <section style={{
      padding: '2rem',
      backgroundColor: 'var(--color-highlight)',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        marginBottom: '1.5rem',
        color: 'var(--color-text-primary)',
        fontSize: '2rem'
      }}>
        Descubre KAIMANA
      </h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            style={{
              padding: '1.5rem',
              border: 'none',
              borderRadius: '12px',
              backgroundColor: activeSection === section.id 
                ? 'var(--color-accent-primary)' 
                : 'white',
              color: activeSection === section.id ? 'white' : 'var(--color-text-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{ 
              fontSize: '1.2rem', 
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              {section.name}
            </div>
            <div style={{ 
              fontSize: '0.9rem',
              opacity: 0.8
            }}>
              {section.description}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}