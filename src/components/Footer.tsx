export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-accent-primary)',
      color: 'white',
      padding: '3rem 2rem 1rem',
      marginTop: '3rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Sección 1 */}
        <div>
          <h3 style={{ color: 'var(--color-highlight)', marginBottom: '1rem' }}>
            KAIMANA
          </h3>
          <p>Conectando personas con experiencias deportivas únicas al amanecer.</p>
        </div>

        {/* Sección 2 */}
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Descubrir</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Confianza y seguridad</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Créditos de viaje</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Regalos</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">KAIMANA Magazine</a></li>
          </ul>
        </div>

        {/* Sección 3 */}
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Anfitrión</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Ofrece tu experiencia</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Recursos para anfitriones</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Foro de la comunidad</a></li>
          </ul>
        </div>

        {/* Sección 4 */}
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Soporte</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Centro de ayuda</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Opciones de cancelación</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#">Soporte para COVID-19</a></li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
        marginTop: '2rem',
        paddingTop: '1rem',
        textAlign: 'center'
      }}>
        <p>&copy; 2023 KAIMANA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}