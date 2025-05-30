'use client';

import React from 'react';
import NextImage from 'next/image';


export default function AccountPanel() {
  // En producción traerías datos reales
  const user = { name: 'Nicole', email: 'nicole@mail.com' };
  const recentOrders = [
    { id: '123', date: '2025-05-25', total: 18.50 },
    { id: '124', date: '2025-05-22', total: 12.00 },
  ];

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ margin: '0.5rem 0 0' }}>{user.name}</h2>
        <p style={{ margin: 0, color: '#666' }}>{user.email}</p>
      </div>

      <h3>Últimos pedidos</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {recentOrders.map(o => (
          <li key={o.id} style={{ marginBottom: '1rem' }}>
            <strong>#{o.id}</strong> — {o.date} — ${o.total.toFixed(2)}
          </li>
        ))}
      </ul>
    </>
  );
}
