// utils/animate.js

export function flyToCart(imgElement, cartElement, { duration = 600 } = {}) {
  if (!imgElement || !cartElement) return;

  const imgRect  = imgElement.getBoundingClientRect();
  const cartRect = cartElement.getBoundingClientRect();

  // Clonar la imagen
  const clone = imgElement.cloneNode(true);
  Object.assign(clone.style, {
    position: 'absolute',
    top:    `${imgRect.top}px`,
    left:   `${imgRect.left}px`,
    width:  `${imgRect.width}px`,
    height: `${imgRect.height}px`,
    transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
    zIndex:  9999,
    pointerEvents: 'none',
  });
  document.body.appendChild(clone);

  // Calcular desplazamiento al centro del icono del carrito
  const deltaX = (cartRect.left + cartRect.width / 2) - (imgRect.left + imgRect.width / 2);
  const deltaY = (cartRect.top  + cartRect.height / 2) - (imgRect.top  + imgRect.height / 2);

  // Lanzar la animación en el próximo frame
  requestAnimationFrame(() => {
    clone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2)`;
    clone.style.opacity   = '0.5';
  });

  // Eliminar el clon al terminar
  setTimeout(() => {
    document.body.removeChild(clone);
  }, duration);
}
