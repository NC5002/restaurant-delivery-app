// utils/storage.js

const STORAGE_KEY = 'come-en-casa:cart';

// Carga el carrito (array de items) de localStorage
export function loadCart() {
  if (typeof window === 'undefined') return [];
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
}

// Guarda el carrito en localStorage
export function saveCart(cart) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}
