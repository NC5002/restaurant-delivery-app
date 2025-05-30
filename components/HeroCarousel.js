'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroCarousel.module.css';

const slides = [
  {
    id: '1',
    src: '/hero1.jpg',
    alt: 'Interior acogedor del restaurante',
    title: 'Come en Casa',
    description: 'Ven a compartir momentos inolvidables con familia y amigos.',
  },
  {
    id: '2',
    src: '/hero2.jpg',
    alt: 'Experiencia culinaria única',
    title: 'Sabores Artesanales',
    description: 'Platos elaborados con pasión y los mejores ingredientes.',
  },
  {
    id: '3',
    src: '/hero3.jpg',
    alt: 'Fachada iluminada del local',
    title: 'Tu Rincón Favorito',
    description: 'Disfruta de una experiencia única en cada visita.',
  },
  {
    id: '4',
    src: '/hero4.jpg',
    alt: 'Servicio rápido y amable',
    title: 'Servicio Rápido y Amable',
    description: 'Nuestro equipo está aquí para hacerte sentir como en casa.',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            idx === current ? styles.active : ''
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={styles.image}
          />
          <div className={styles.caption}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Controles manuales */}
      <button
        className={`${styles.nav} ${styles.prev}`}
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
      >
        ‹
      </button>
      <button
        className={`${styles.nav} ${styles.next}`}
        onClick={() => setCurrent((current + 1) % slides.length)}
      >
        ›
      </button>

      {/* Paginación de puntos */}
      <div className={styles.pagination}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
