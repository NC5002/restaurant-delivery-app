'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Columna 1: Enlaces */}
        <div className={styles.col}>
          <h4>Enlaces</h4>
          <ul>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className={styles.col}>
          <h4>Síguenos</h4>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/people/Come-en-Casa/61563311844938/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a  target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Columna 3: Información de derechos */}
        <div className={styles.col}>
          <h4>Legal</h4>
          <ul>
            <li>Términos de servicio</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className={styles.bottomBar}>
        © {new Date().getFullYear()} Come en Casa. Todos los derechos reservados.
      </div>
    </footer>
  );
}
