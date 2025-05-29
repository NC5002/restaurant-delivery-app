// app/page.js
import Link from 'next/link';
import { menuItems } from '../utils/menuData';
import MenuItem from '../components/orders/MenuItem';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>🍽️ Come en Casa – Menú</h1>

      {/* Link sin <a> interno */}
      <Link
        href="/cart"
        style={{
          float: 'right',
          background: '#e00',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        Ver carrito
      </Link>

      <div style={{ clear: 'both', marginTop: '2rem' }}>
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
