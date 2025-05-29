// app/orders/page.js

export default function OrdersPage() {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>📝 Orders Page Works!</h1>
        <p>Prueba una ruta concreta haciendo clic:</p>
        <a
          href="/orders/123"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Ver detalle de pedido 123
        </a>
      </main>
    );
  }
  