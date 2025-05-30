'use client';

import React, { useState, useRef } from 'react';
import NextImage from 'next/image';
import { ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';
import useCart from '../../hooks/useCart';
import { flyToCart } from '../../utils/animate';
import styles from './MenuItem.module.css';

export default function MenuItem({ item }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const imgWrapperRef = useRef(null);

  const handleAdd = () => {
    // Imagen real dentro del wrapper
    const imgEl  = imgWrapperRef.current?.querySelector('img');
    const cartEl = document.getElementById('cart-icon');

    // Lanza la animación
    flyToCart(imgEl, cartEl, { duration: 600 });

    // Añade al carrito
    addToCart({
      id:       item.id,
      name:     item.name,
      price:    item.price,
      quantity: qty,
    });

    // Muestra el toast
    toast.success(`Añadido ${qty} × ${item.name}`, {
      duration: 3000,
      action: {
        text: 'Ver carrito',
        onClick: () => window.location.href = '/cart',
      },
    });

    // Reset de cantidad
    setQty(1);
  };

  return (
    <div className={styles.card}>
      <div ref={imgWrapperRef} className={styles.imageWrapper}>
        <NextImage
          src={item.image}
          alt={item.name}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.badges}>
          {item.badges.map((b) => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </div>

        <div className={styles.header}>
          <h3 className={styles.name}>{item.name}</h3>
          <span className={styles.price}>${item.price.toFixed(2)}</span>
        </div>

        <p>{item.description}</p>

        <div className={styles.controls}>
          <button
            className={styles.btn}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >–</button>
          <span>{qty}</span>
          <button
            className={styles.btn}
            onClick={() => setQty((q) => q + 1)}
          >+</button>
          <ShoppingCart
            className={styles.cartIcon}
            onClick={handleAdd}
          />
        </div>
      </div>
    </div>
);
}
