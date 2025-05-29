'use client';

import { useState } from 'react';
import useCart from '../../hooks/useCart';
import styles from './MenuItem.module.css';

export default function MenuItem({ item }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: qty,
    });
    alert(`¡Añadiste ${qty} x ${item.name} al carrito!`);
    setQty(1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2>{item.name} — ${item.price.toFixed(2)}</h2>
        <p>{item.description}</p>
        <div className={styles.actions}>
          <input
            className={styles.qty}
            type="number"
            min="1"
            value={qty}
            onChange={e => setQty(Number(e.target.value))}
          />
          <button className={styles.btn} onClick={handleAdd}>
            Añadir
          </button>
        </div>
      </div>
      <img
        className={styles.image}
        src={`/images/${item.id}.jpg`}
        alt={item.name}
      />
    </div>
  );
}
