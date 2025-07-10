import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Bonjour, je suis <span className={styles.highlight}>Votre Nom</span>
          </h1>
          <p className={styles.subtitle}>
            Développeur Full Stack passionné par la création d'applications web modernes et performantes
          </p>
          <p className={styles.description}>
            Je transforme vos idées en réalité numérique avec des technologies de pointe et une approche centrée sur l'utilisateur.
          </p>
          
          <div className={styles.ctaButtons}>
            <Link href="/projects" className={styles.primaryButton}>
              Voir mes projets
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Me contacter
            </Link>
          </div>
        </div>
        
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <span>Photo de profil</span>
          </div>
        </div>
      </div>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Ce que je fais</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>💻</div>
            <h3>Développement Frontend</h3>
            <p>Création d'interfaces utilisateur modernes et réactives avec React, Next.js et TypeScript.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚙️</div>
            <h3>Développement Backend</h3>
            <p>Construction d'APIs robustes et de bases de données avec Node.js, Express et MongoDB.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Applications Responsives</h3>
            <p>Développement d'applications qui s'adaptent parfaitement à tous les appareils.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>Performance & SEO</h3>
            <p>Optimisation des performances et du référencement pour une meilleure visibilité.</p>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.stat}>
          <h3>50+</h3>
          <p>Projets réalisés</p>
        </div>
        <div className={styles.stat}>
          <h3>3+</h3>
          <p>Années d'expérience</p>
        </div>
        <div className={styles.stat}>
          <h3>100%</h3>
          <p>Clients satisfaits</p>
        </div>
      </section>
    </main>
  );
}
