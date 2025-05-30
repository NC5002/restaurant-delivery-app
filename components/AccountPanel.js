'use client';

import React from 'react';
import NextImage from 'next/image';
import styles from './AccountPanel.module.css'; // Asegúrate de crear este CSS


export default function AccountPanel() {
  // En producción traerías datos reales
  const user = { name: 'Nicole', email: 'nicole@mail.com' };
  const recentOrders = [
    { id: '123', date: '2025-05-25', total: 18.50 },
    { id: '124', date: '2025-05-22', total: 12.00 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.email}>{user.email}</div>
      </div>
      <h3>Últimos pedidos</h3>
      <ul className={styles.orders}>
        {recentOrders.map(o => (
          <li key={o.id} className={styles.orderItem}>
            <div className={styles.orderId}>#{o.id}</div>
            <div className={styles.orderMeta}>
              {o.date} — ${o.total.toFixed(2)}
            </div>
          </li>
          ))}
      </ul>
    </div>
  );
}
