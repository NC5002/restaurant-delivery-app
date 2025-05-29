// app/layout.js
import '../styles/globals.css';
import CartProviderWrapper from '../context/CartProviderWrapper';
import Layout from '../components/Layout';
import Header from '../components/Header';

export const metadata = {
  title:       'Come en Casa',
  description: 'Pedidos a domicilio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
       <CartProviderWrapper>
         <Header />
         <div style={{ paddingTop: '1rem' }}>
           {children}
         </div>
       </CartProviderWrapper>
      </body>
    </html>
  );
}
