// context/CartContext.js
'use client';

import { createContext, useState, useEffect } from 'react';
import { loadCart, saveCart } from '../utils/storage';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Al montar, cargamos del storage
  useEffect(() => {
    setCart(loadCart());
  }, []);

  // Cada vez que cambie cart, lo guardamos
  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  // Función para añadir un ítem (o actualizar cantidad)
  function addToCart(item) {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx > -1) {
        // ya existe: actualizamos cantidad
        const copy = [...prev];
        copy[idx].quantity += item.quantity;
        return copy;
      }
      // nuevo item
      return [...prev, item];
    });
  }

  // Elimina un ítem del carrito
  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  // Vacía el carrito
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
