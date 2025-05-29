// app/orders/[id]/page.js

export default function Page({ params }) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>📦 Detalle de pedido</h1>
        <p>ID del pedido: <strong>{params.id}</strong></p>
      </main>
    );
  }
  