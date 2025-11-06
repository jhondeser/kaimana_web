export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--color-highlight) 0%, var(--color-accent-secondary) 100%)',
      padding: '7rem 2rem',
      textAlign: 'center',
      color: 'var(--color-text-primary)',
    }}>
      <h1 style={{ 
        fontSize: '3.5rem', 
        marginBottom: '1rem', 
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, var(--color-text-primary), var(--color-accent-primary))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}>
        KAIMANA
      </h1>
      <p style={{ 
        fontSize: '1.5rem', 
        marginBottom: '2rem', 
        maxWidth: '600px', 
        margin: '0 auto 2rem',
        fontWeight: '500'
      }}>
        Comunidad, Deporte y Aventura en Valencia
      </p>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '2rem',
        opacity: 0.9,
        maxWidth: '800px',
        margin: '0 auto 2rem'
      }}>
        Descubre clases de slackline, yoga y skate, vive experiencias únicas, explora la naturaleza 
        y únete a nuestra comunidad de amantes del deporte al aire libre.
      </p>
      <div style={{ 
        display: 'flex', 
        maxWidth: '500px', 
        margin: '0 auto', 
        borderRadius: '50px', 
        overflow: 'hidden', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <input 
          type="text" 
          placeholder="Busca clases, experiencias o eventos..." 
          style={{ 
            flexGrow: 1, 
            padding: '1rem 1.5rem', 
            border: 'none', 
            fontSize: '1rem',
            outline: 'none'
          }}
        />
        <button style={{ 
          backgroundColor: 'var(--color-accent-primary)', 
          color: 'white', 
          border: 'none', 
          padding: '1rem 2rem', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>
          Explorar
        </button>
      </div>
    </section>
  );
}