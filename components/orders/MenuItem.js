// components/orders/MenuItem.js
'use client';

import { useState } from 'react';
import useCart from '../../hooks/useCart';

export default function MenuItem({ item }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart({ 
      id: item.id, 
      name: item.name, 
      price: item.price, 
      quantity: qty 
    });
    alert(`¡Añadiste ${qty} x ${item.name} al carrito!`);
    setQty(1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{item.name} — ${item.price.toFixed(2)}</h2>
      <p>{item.description}</p>
      <label>
        Cantidad:{' '}
        <input
          type="number"
          min="1"
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
          style={{ width: '3rem' }}
        />
      </label>
      <button 
        onClick={handleAdd} 
        style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
