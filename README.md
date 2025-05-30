# 🍽️ Restaurant Delivery App – Documentación

Este es un sistema de pedidos online enfocado en brindar una experiencia amigable al usuario final. A continuación, te explico paso a paso cómo está estructurado y cómo puedes levantarlo localmente o desplegarlo.

---

## 1. 📁 Origen del Código

- Toda la aplicación está disponible públicamente en GitHub bajo el repositorio:  
  [NC5002/restaurant-delivery-app](https://github.com/NC5002/restaurant-delivery-app)
- Para clonar el proyecto:
  ```bash
  git clone https://github.com/NC5002/restaurant-delivery-app.git
  cd restaurant-delivery-app
## 2. 🔧 Instalación de Dependencias y Arranque Local

Instala las dependencias necesarias:

```bash
npm install
```

Se usan tecnologías como: React, Next.js, SwiperJS, NextAuth, lucide-react, react-hot-toast, entre otros.

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

💡 Consejo: Puedes generar `NEXTAUTH_SECRET` usando:

```bash
openssl rand -base64 32
```

o desde un script simple en Node.js.

Levanta el servidor local:

```bash
npm run dev
```

## 3. 🔐 Configuración de Google OAuth

En Google Cloud Console, crea un nuevo proyecto llamado:  
**“ComeEnCasa Auth”**

Completa la pantalla de consentimiento:

- Tipo: **Externo**
- Nombre de la aplicación
- Email de soporte
- Añade tu cuenta de prueba (tu Gmail)

Crea credenciales OAuth 2.0 de tipo **Web application** y registra:

- Origen autorizado: `http://localhost:3000`
- URI de redirección: `http://localhost:3000/api/auth/callback/google`

Copia el **Client ID** y **Client Secret** al archivo `.env.local`.


Y accede a la app en: http://localhost:3000

## 4. 🗂️ Estructura Next.js y App Router

La aplicación usa la carpeta `app/` siguiendo el modelo **App Router**.

El layout principal incluye un componente `<Providers>` (Client Component) que envuelve:

- `<SessionProvider>` (NextAuth)  
- `<CartProvider>` (gestor del carrito personalizado)

Las rutas de autenticación se manejan en:

```ts
app/api/auth/[...nextauth]/route.ts

Exportando GET y POST para login/logout.

Componentes que usan estado reactivo (useSession, useCart, etc.) están marcados con 'use client'


