'use client';                   // ← Esto convierte TODO este fichero en un Client Component

import { SessionProvider } from 'next-auth/react';
import CartProviderWrapper from '../context/CartProviderWrapper';

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <CartProviderWrapper>
        {children}
      </CartProviderWrapper>
    </SessionProvider>
  );
}
