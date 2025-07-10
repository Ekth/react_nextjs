import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Portfolio</h3>
            <p>
              Développeur Full Stack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>
          
          <div className={styles.section}>
            <h3>Liens rapides</h3>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/projects">Projets</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>Contact</h3>
            <ul>
              <li>📧 votre.email@example.com</li>
              <li>📱 +33 6 XX XX XX XX</li>
              <li>📍 Paris, France</li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>Réseaux sociaux</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/votre-username" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 Votre Nom. Tous droits réservés.</p>
          <p>Construit avec Next.js et ❤️</p>
        </div>
      </div>
    </footer>
  );
} 