'use client';

import Link from 'next/link';
import useCart from '../../hooks/useCart';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cart.length === 0) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>🛒 Tu carrito está vacío</h1>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            color: 'blue',
            textDecoration: 'underline',
          }}
        >
          Volver al menú
        </Link>
      </main>
    );
  }

  const handleConfirm = () => {
    alert(`Pedido confirmado. Total: $${total.toFixed(2)}. ¡Llegará pronto!`);
    clearCart();
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🛒 Carrito de Compras</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} style={{ marginBottom: '1rem' }}>
            {item.quantity} × {item.name} — ${item.price.toFixed(2)} cada uno
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: '1rem' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button
        onClick={handleConfirm}
        style={{
          padding: '0.5rem 1rem',
          background: '#080',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Confirmar pedido
      </button>
    </main>
  );
}
