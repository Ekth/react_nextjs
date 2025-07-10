import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de moi</h1>
      
      <section className={styles.section}>
        <h2>Qui suis-je ?</h2>
        <p>
          Je suis un développeur passionné par la création d'applications web modernes et performantes. 
          J'aime travailler avec les dernières technologies et résoudre des problèmes complexes.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Mes compétences</h2>
        <div className={styles.skills}>
          <div className={styles.skillCategory}>
            <h3>Frontend</h3>
            <ul>
              <li>React.js / Next.js</li>
              <li>TypeScript</li>
              <li>HTML5 / CSS3</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Outils</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Mon parcours</h2>
        <p>
          J'ai commencé mon voyage dans le développement web il y a plusieurs années. 
          Depuis lors, j'ai travaillé sur divers projets, de petits sites web à des applications 
          d'entreprise complexes. Chaque projet m'a permis d'apprendre et de grandir en tant que développeur.
        </p>
      </section>
    </div>
  );
} 