'use client';

import React, { useState } from 'react';            // ← Import useState
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './HelpPanel.module.css';

export default function HelpPanel() {
  const faqs = [
    { q: '¿Cómo realizo un pedido?',     a: 'Selecciona productos del menú, ajusta la cantidad y pulsa "Confirmar pedido".' },
    { q: '¿Cuál es el tiempo de entrega?', a: 'Generalmente tarda entre 30–45 minutos, según tu zona.' },
    { q: '¿Puedo cancelar un pedido?',     a: 'Puedes cancelar contactando con soporte antes de que salga el repartidor.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.container}>
      <h3>Preguntas frecuentes</h3>

      {faqs.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{f.q}</span>
              {isOpen
                ? <ChevronUp size={18} />
                : <ChevronDown size={18} />
              }
            </div>
            {isOpen && (
              <div className={styles.answer}>
                {f.a}
              </div>
            )}
          </div>
        );
      })}

      <div className={styles.contact}>
        ¿Necesitas más ayuda? Escríbenos a{' '}
        <a href="mailto:soporte@comeencasa.com">
          soporte@comeencasa.com
        </a>.
      </div>
    </div>
  );
}
