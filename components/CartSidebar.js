'use client';

import React from 'react';
import { X } from 'lucide-react';
import useCart from '../hooks/useCart';
import styles from './CartSidebar.module.css';
import { showOrderToast } from './OrderToast'; // usa la ruta correcta

export default function CartSidebar({ open, onClose }) {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

 // Umbral para envío gratis
 const FREE_SHIPPING_THRESHOLD = 20;
 const progress = Math.min(total / FREE_SHIPPING_THRESHOLD, 1);
 const remaining = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.backdrop} ${open ? styles.open : ''}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        {/* Header interno */}
        <div className={styles.header}>
          <h2>🛒 Tu carrito</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* --- Indicador de progreso --- */}
        <div className={styles.progressWrapper}>
            <div className={styles.progressLabel}>
                {total < FREE_SHIPPING_THRESHOLD
                    ? `Gasta $${remaining.toFixed(2)} más para envío gratis`
                    : '¡Envío gratis conseguido!'}
                <span className={styles.tooltip}>🛈
                    <span className={styles.tooltipText}>
                        Al gastar ${FREE_SHIPPING_THRESHOLD}, tu envío será gratuito.
                    </span>
                </span>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${progress * 100}%` }}
                    />
                </div>
            </div>
        </div>

        {/* Contenido del carrito */}
        {cart.length === 0 ? (
          <div style={{ padding: '1rem' }}>
            <p>Tu carrito está vacío.</p>
          </div>
        ) : (
          <ul className={styles.list}>
            {cart.map(item => (
              <li key={item.id} className={styles.item}>
                <span>
                  {item.quantity} × {item.name} — ${item.price.toFixed(2)}
                </span>
                <div className={styles.controls}>
                  <button onClick={() => removeFromCart(item.id)}>❌</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Footer del sidebar */}
        <div className={styles.footer}>
          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          <button
            className={styles.btnConfirm}
            onClick={() => {
              clearCart();
              showOrderToast(total);
              onClose();
            }}
            disabled={cart.length === 0}
          >
            Confirmar pedido
          </button>
        </div>
      </aside>
    </>
  );
}
