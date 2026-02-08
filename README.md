# Wikingenieria Web
https://geosteb.github.io/wikingenieria-web/

Repositorio oficial del sitio web estático [wikingenieria.com](https://wikingenieria.com).

Contenido para amantes de la ingeniería, ciencia y tecnología. Plantillas de Notion, memes, curiosidades científicas, artículos o eBooks.

## 🛠 Stack Tecnológico

* **Core:** HTML5 Semántico.
* **Estilos:** Tailwind CSS (vía CDN) + Custom CSS variables.
* **Despliegue:** GitHub Pages.
* **Iconografía:** FontAwesome & SVGs vectoriales.
* **Tipografía:** Space Grotesk (Headers) + Inter (Body).

## 📂 Estructura del Proyecto

La arquitectura de archivos sigue el patrón de separación de responsabilidades para optimizar el SEO y la mantenibilidad:

```text
/
├── index.html            # Landing Page (Single Page Application feel)
├── blog.html             # Índice del Blog (Archivo)
├── legal.html            # Textos legales (LSSI/RGPD)
├── assets/               # Recursos estáticos centralizados
│   ├── img/
│   │   ├── core/         # Identidad de marca (Logos, Favicons, Social)
│   │   ├── products/     # Activos de venta (Portadas, Mockups) en WebP
│   │   └── blog/         # Imágenes de artículos organizadas por año
│   └── js/               # Lógica frontend (Menú móvil, Cookies)
└── blog/                 # Artículos individuales
```
🚀 Despliegue y Flujo de Trabajo
Este sitio utiliza GitHub Pages desde la rama main. Cualquier push a la rama principal desencadena un despliegue automático.

Guía de contribución (Para mí mismo):
Las imágenes deben ir siempre en formato .webp (excepto vectores).

Nombres de archivo en kebab-case (ej: nombre-del-archivo.webp).

Actualizar el sitemap.xml al añadir nuevas páginas.

⚖️ Legal & Licencia
Todos los derechos reservados © 2026 Wikingeniería. El código fuente de la estructura web es libre para uso educativo, pero el contenido (textos, productos digitales y marca) es propiedad intelectual del autor.

