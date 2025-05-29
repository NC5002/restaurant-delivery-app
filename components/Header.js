// components/Header.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#7B2C32',
        padding: '0.5rem 1rem',
        color: '#fff',
      }}
    >
      {/* Logo + título */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <Image
          src="/logo.png"
          alt="Logo Come en Casa"
          width={32}
          height={32}
        />
        <span style={{ marginLeft: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
          Come en Casa
        </span>
      </Link>

      {/* Navegación simple */}
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
          Menú
        </Link>
        <Link href="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
          🛒 Carrito
        </Link>
      </nav>
    </header>
  );
}
