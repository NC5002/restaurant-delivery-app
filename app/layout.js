// app/layout.js  —  Server Component (no 'use client')
import './globals.css';
import CartProviderWrapper from '../context/CartProviderWrapper';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Come en Casa',
  description: 'Pedidos a domicilio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Aquí envolvemos en un componente client */}
        <CartProviderWrapper>
          {children}
        </CartProviderWrapper>
      </body>
    </html>
  );
}
