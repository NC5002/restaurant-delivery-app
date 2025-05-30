'use client';

import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Come en Casa</div>
        <nav>
          <Link href="/" className={styles.navLink}>
            Menú
          </Link>
          <Link href="/cart" className={styles.navLink}>
            🛒 Carrito
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Come en Casa
      </footer>
    </>
  );
}
