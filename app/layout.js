// app/layout.js
import '../styles/globals.css';
import CartProviderWrapper from '../context/CartProviderWrapper';
import Layout from '../components/Layout';

export const metadata = {
  title:       'Come en Casa',
  description: 'Pedidos a domicilio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProviderWrapper>
          <Layout>
            {children}
          </Layout>
        </CartProviderWrapper>
      </body>
    </html>
  );
}
