'use client';

import Link from 'next/link';
import useCart from '../../hooks/useCart';
import styles from './CartPage.module.css';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <main className={styles.empty}>
        <h1>🛒 Tu carrito está vacío</h1>
        <Link href="/" className={styles.linkHome}>
          Volver al menú
        </Link>
      </main>
    );
  }

  // Carrito con items
  return (
    <main style={{ padding: '2rem' }}>
      <h1>🛒 Carrito de Compras</h1>

      <ul className={styles.list}>
        {cart.map(item => (
          <li key={item.id} className={styles.item}>
            <span>
              {item.quantity} × {item.name} — ${item.price.toFixed(2)}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              className={styles.btnRemove}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.total}>Total: ${total.toFixed(2)}</div>
      <button onClick={() => { clearCart(); alert(`Pedido confirmado. Total: $${total.toFixed(2)}. ¡Llegará pronto!`); }} className={styles.btnConfirm}>
        Confirmar pedido
      </button>
    </main>
  );
}
