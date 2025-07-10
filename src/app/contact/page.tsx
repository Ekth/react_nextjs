'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2>Parlons de votre projet</h2>
          <p>
            Vous avez un projet en tête ? Une question sur mon travail ? 
            N'hésitez pas à me contacter ! Je suis toujours ouvert à de nouvelles opportunités 
            et collaborations intéressantes.
          </p>
          
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <h3>📧 Email</h3>
              <p>votre.email@example.com</p>
            </div>
            
            <div className={styles.contactMethod}>
              <h3>📱 Téléphone</h3>
              <p>+33 6 XX XX XX XX</p>
            </div>
            
            <div className={styles.contactMethod}>
              <h3>📍 Localisation</h3>
              <p>Paris, France</p>
            </div>
            
            <div className={styles.contactMethod}>
              <h3>💼 LinkedIn</h3>
              <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/votre-profil
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.formContainer}>
          <h2>Envoyez-moi un message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">Sujet *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 