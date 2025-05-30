// app/page.js
import Link from 'next/link';
import { menuItems } from '../utils/menuData';
import MenuItem     from '../components/orders/MenuItem';
import HeroCarousel from '../components/HeroCarousel';

export default function HomePage() {
  return (
    <>
      {/* Hero dinámico */}
      <HeroCarousel />

      <main style={{ padding: '2rem' }}>
        <h1>🍽️ Come en Casa – Menú</h1>

        {/* GRID responsivo de cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
            justifyItems: 'center',
            marginTop: '2rem',
          }}
        >
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
