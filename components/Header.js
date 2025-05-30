'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';

import useCart from '../hooks/useCart';
import CartSidebar from './CartSidebar';
import Drawer from './Drawer';
import AccountPanel from './AccountPanel';
import HelpPanel from './HelpPanel';
import styles from './Header.module.css';

export default function Header() {
  const { data: session, status } = useSession();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [menuOpen, setMenuOpen]     = useState(false);
  const [cartOpen, setCartOpen]     = useState(false);
  const [activeTab, setActiveTab]   = useState('account');

  return (
    <>
      <header className={styles.header}>
        {/* Logo + título */}
        <Link href="/" className={styles.logoLink}>
          <NextImage
            src="/logo.png"
            alt="Logo Come en Casa"
            width={32}
            height={32}
          />
          <span className={styles.title}>Come en Casa</span>
        </Link>

        <div className={styles.actions}>
          {/* Autenticación */}
          {status === 'loading' ? null : session ? (
            <>
              <span className={styles.greeting}>
                ¡Hola, {session.user.name}!
              </span>
              <button
                onClick={() => signOut()}
                className={styles.authButton}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn('google')}
              className={styles.authButton}
            >
              Iniciar con Google
            </button>
          )}

          {/* Carrito con contador */}
          <button
            className={styles.cartButton}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className={styles.cartCount}>{totalItems}</span>
            )}
          </button>

          {/* Menú hamburguesa */}
          <div className={styles.menuWrapper}>
            <MenuIcon
              className={styles.menuIcon}
              size={24}
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </header>

      {/* Sidebar de Carrito */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Drawer lateral (Mi cuenta / Ayuda) */}
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        {activeTab === 'account' ? <AccountPanel /> : <HelpPanel />}
      </Drawer>
    </>
  );
}
