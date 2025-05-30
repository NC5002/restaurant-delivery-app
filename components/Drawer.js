'use client';

import React from 'react';
import styles from './Drawer.module.css';

export default function Drawer({ open, onClose, activeTab, setActiveTab, children }) {
  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.open : ''}`}
        onClick={onClose}
      />
      <aside className={`${styles.drawer} ${open ? styles.open : ''}`}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${activeTab === 'account' ? styles.active : ''}`}
            onClick={() => setActiveTab('account')}
          >
            Mi cuenta
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'help' ? styles.active : ''}`}
            onClick={() => setActiveTab('help')}
          >
            Ayuda
          </div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </aside>
    </>
  );
}
