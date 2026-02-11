# 🌐 Wikingeniería Web
[wikingenieria.com](https://wikingenieria-web.vercel.app/)

Repositorio oficial del sitio web de **Wikingeniería**.

Plataforma para amantes de la ingeniería, ciencia y tecnología. Incluye plantillas de Notion, memes, curiosidades científicas, artículos técnicos y eBooks.

> **🚧 The Vault:** Actualmente en desarrollo. Un área restringida (bloqueada) destinada a alojar contenido premium y recursos exclusivos para la comunidad.

---

## 🛠 Stack Tecnológico

* **Core:** HTML5 Semántico.
* **Estilos:** Tailwind CSS (vía CDN) + Variables CSS personalizadas.
* **Despliegue:** Vercel (Auto-deploy desde Main).
* **Iconografía:** FontAwesome & SVGs vectoriales.
* **Tipografía:** Space Grotesk (Headers) + Inter (Body).

---

## 📂 Estructura del Proyecto

Arquitectura diseñada para optimizar el SEO, la velocidad de carga y la mantenibilidad:

```text
/
├── index.html            # Landing Page (SPA feel)
├── blog.html             # Índice del Blog (Archivo)
├── legal.html            # Textos legales (LSSI/RGPD)
├── vault/                # [LOCKED] Área de contenido exclusivo
├── assets/               # Recursos estáticos centralizados
│   ├── img/
│   │   ├── core/         # Identidad de marca (Logos, Favicons)
│   │   ├── products/     # Activos de venta (Portadas, Mockups) en WebP
│   │   └── blog/         # Imágenes de artículos por año
│   └── js/               # Lógica frontend (Menú móvil, Cookies)
└── blog/                 # Artículos individuales
```

## 🚀 Despliegue y Flujo de Trabajo

Este sitio utiliza **Vercel** conectado a la rama `main`. Cualquier push a la rama principal desencadena una construcción y despliegue automático en segundos.

**Guía de contribución (Notas personales):**
1. Las imágenes deben ir siempre en formato `.webp` (excepto vectores).
2. Nombres de archivo en `kebab-case` (ej: `nombre-del-archivo.webp`).
3. Actualizar el `sitemap.xml` al añadir nuevas páginas o artículos.

---

## ⚖️ Legal & Licencia

**Todos los derechos reservados © 2026 Wikingeniería.**

El código fuente de la estructura web es libre para uso educativo, pero el contenido (textos, productos digitales y marca) es propiedad intelectual del autor.

---

Diseñado por **Geosteb** en colaboración con IA.