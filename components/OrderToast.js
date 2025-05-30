'use client';

import React from 'react';
import Link from 'next/link';
import toast, { Toast } from 'react-hot-toast';
import styles from './OrderToast.module.css';

export function showOrderToast(total) {
  toast.custom((t) => (
    <div className={styles.toastContainer}>
      <div className={styles.message}>
        🎉 Pedido confirmado<br/>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  ), {
    id: 'order-confirm',     // para evitar duplicados
    duration: 5000,
    position: 'bottom-center',
  });
}
