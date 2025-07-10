import styles from './page.module.css';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Une plateforme e-commerce complète construite avec Next.js, Node.js et MongoDB. Inclut la gestion des produits, panier d'achat, paiements et tableau de bord administrateur.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/project1.jpg",
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce-demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Application de gestion de tâches avec authentification, drag & drop, et notifications en temps réel. Interface moderne et responsive.",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    image: "/project2.jpg",
    github: "https://github.com/username/task-app",
    live: "https://task-app-demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Tableau de bord météo avec prévisions sur 7 jours, géolocalisation et graphiques interactifs. Utilise l'API OpenWeatherMap.",
    technologies: ["JavaScript", "Chart.js", "OpenWeatherMap API", "CSS3"],
    image: "/project3.jpg",
    github: "https://github.com/username/weather-app",
    live: "https://weather-demo.com"
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Plateforme de blog avec système de commentaires, authentification et éditeur de texte riche. Optimisé pour le SEO.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/project4.jpg",
    github: "https://github.com/username/blog-platform",
    live: "https://blog-demo.com"
  }
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mes Projets</h1>
      
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.imagePlaceholder}>
                <span>Image du projet</span>
              </div>
            </div>
            
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={styles.projectLinks}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Code GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.link} ${styles.liveLink}`}
                >
                  Voir en ligne
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 