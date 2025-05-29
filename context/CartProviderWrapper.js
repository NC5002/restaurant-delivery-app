// context/CartProviderWrapper.js
'use client';

import { CartProvider } from './CartContext';

export default function CartProviderWrapper({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
