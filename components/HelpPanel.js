'use client';

import React from 'react';

export default function HelpPanel() {
  const faqs = [
    {
      q: '¿Cómo realizo un pedido?',
      a: 'Selecciona productos del menú, ajusta la cantidad y pulsa el carrito → Confirmar pedido.',
    },
    {
      q: '¿Cuál es el tiempo de entrega?',
      a: 'En general 30–45 minutos, dependiendo de tu zona.',
    },
    {
      q: '¿Puedo cancelar un pedido?',
      a: 'Contáctanos por WhatsApp antes de que el repartidor salga.',
    },
  ];

  return (
    <>
      <h3>Preguntas frecuentes</h3>
      {faqs.map((f, i) => (
        <details key={i} style={{ marginBottom: '1rem' }}>
          <summary style={{ cursor: 'pointer', fontWeight: '600' }}>{f.q}</summary>
          <p style={{ margin: '0.5rem 0 0 1rem' }}>{f.a}</p>
        </details>
      ))}
      <hr />
      <p>¿Necesitas más ayuda? Escríbenos a <a href="mailto:soporte@comeencasa.com">soporte@comeencasa.com</a>.</p>
    </>
  );
}
