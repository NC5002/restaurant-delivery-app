// app/layout.js
import '../styles/globals.css';
import Providers from '../components/Providers';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';


export const metadata = {
  title:       'Come en Casa',
  description: 'Pedidos a domicilio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
           <Toaster position="bottom-center" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
