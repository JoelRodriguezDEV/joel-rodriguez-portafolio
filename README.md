# Joel Rodriguez | Full-Stack Developer Portfolio

![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)
![Formspree](https://img.shields.io/badge/Backend-Formspree-red?style=for-the-badge)
![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-blue?style=for-the-badge&logo=cloudinary)

Este proyecto es una demostración técnica de la implementación de una arquitectura web estática moderna, escalable y optimizada.

## Stack Tecnológico

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS.
- **Gestión de Formularios:** **Formspree** para el manejo serverless de correos y protección contra spam.
- **Gestión de Media:** **Cloudinary CDN** con optimización dinámica de imágenes (`f_auto`, `q_auto`).
- **Librerías Clave:**
  - **Swiper.js:** Carruseles de proyectos.
  - **tsParticles:** Fondo animado con gestión de memoria optimizada.
  - **PDF.js:** Visor de documentos integrado nativamente.

## Características Técnicas

### Arquitectura Serverless para Contacto

El formulario delega el procesamiento del backend a Formspree, permitiendo enviar correos directamente desde el frontend estático sin exponer credenciales SMTP ni requerir mantenimiento de servidores, gestionando internamente validaciones y CORS.

### Internacionalización (i18n) en Cliente

Soporte multilingüe (Inglés/Español) construido en Vanilla JS con mutación del DOM en tiempo real y persistencia de estado mediante `localStorage`.

### Optimización de Rendimiento

Uso intensivo de la API de Cloudinary para servir imágenes en formatos de próxima generación (WebP/AVIF) adaptados al navegador del cliente, reduciendo drásticamente el peso de la red.

## Proyectos Destacados

### 1. [U Closset](https://u-closset-e-commerce.vercel.app)

- **Tech:** React, NestJS, Prisma, TypeScript.

### 2. [Budget Manager | ERP](https://budget-manager-404-three.vercel.app)

- **Tech:** React, NestJS, PdfKit.

### 3. [Doña Ana | Menú Digital](https://inspiring-naiad-b0b9aa.netlify.app/#menu)

- **Tech:** JavaScript Nativo, CSS, HTML, Strapi.

## Licencia y Derechos de Autor

El código fuente (HTML, CSS, JavaScript) de este sitio web está disponible bajo la [Licencia MIT](LICENSE). Siéntete libre de clonarlo o inspirarte en la arquitectura para construir tu propio portafolio.

**Aviso de Propiedad Intelectual:** Los recursos gráficos personales (fotografías, logotipos), los textos descriptivos de los proyectos, la marca "U Closset" y los documentos en formato PDF (certificaciones) son activos de uso exclusivo y están protegidos por derechos de autor (Copyright © 2026 Joel Rodríguez). No está permitido su uso, reproducción, modificación o distribución sin autorización expresa.

## Entorno Local

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/joel-rodriguez-portfolio.git](https://github.com/tu-usuario/joel-rodriguez-portfolio.git)
   ```
