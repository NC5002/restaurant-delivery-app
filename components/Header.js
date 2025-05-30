'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';
import useCart from '../hooks/useCart';

import styles from './Header.module.css';
import Drawer from './Drawer';
import AccountPanel from './AccountPanel';
import HelpPanel from './HelpPanel';

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeTab, setActiveTab]   = useState('account');
  const userName = 'Nicole'; // 🔥 Reemplaza por dato real si lo tienes

  return (
    <>
      <header className={styles.header}>
        {/* Logo + título */}
        <Link href="/" className={styles.logoLink}>
          <NextImage src="/logo.png" alt="Logo Come en Casa" width={32} height={32} />
          <span className={styles.title}>Come en Casa</span>
        </Link>

        <div className={styles.actions}>
          {/* Saludo */}
          <span className={styles.greeting}>¡Hola, {userName}!</span>

          {/* Carrito con contador */}
          <Link href="/cart" className={styles.cartButton}>
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className={styles.cartCount}>{totalItems}</span>
            )}
          </Link>

          {/* Botón hamburguesa */}
          <div className={styles.menuWrapper}>
            <MenuIcon
              className={styles.menuIcon}
              size={24}
              onClick={() => setMenuOpen(prev => !prev)}
            />
          </div>
        </div>
      </header>

      {/* Drawer lateral */}
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        {activeTab === 'account'
          ? <AccountPanel />
          : <HelpPanel />
        }
      </Drawer>
    </>
  );
}
