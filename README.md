# Ravennpy · Tienda estética

Sitio e-commerce de una sola página inspirado en el perfil de Instagram `@ravennpyy`. Presenta hero, colecciones, grilla filtrable, manifiesto editorial, lookbook deslizable, testimonios y contacto.

## Estructura

- `index.html`: marcado principal y secciones.
- `styles.css`: sistema visual oscuro inspirado en la identidad RavenPy.
- `script.js`: datos mock, filtrado de productos y slider del lookbook.

## Uso

1. Abre la carpeta `ravenpy` en tu editor o servidor preferido.
2. Ejecuta un servidor estático (por ejemplo `npx serve .`) o abre `index.html` en el navegador.
3. Edita los arrays `products` y `lookbook` en `script.js` para usar contenido real.

## Personalización sugerida

- Reemplaza los gradientes de las figuras por imágenes reales.
- Ajusta colores y tipografías desde `:root` en `styles.css`.
- Conecta el formulario de contacto a tu backend o servicio de automatización.

## Próximos pasos

- Integrar pasarela de pago (Mercado Pago, Stripe, etc.).
- Añadir CMS ligero o headless (DatoCMS, Sanity) para gestionar productos.
- Incorporar secciones dinámicas (inventario, stories embebidas, etc.).
