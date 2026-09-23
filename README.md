# Eliseo Miño — Portfolio

Sitio estático de una sola página que presenta a Eliseo Miño: estudiante de Ingeniería en Sistemas (UTN FRVM), desarrollador backend y estudiante de ciberseguridad.

Publicado en [EliseoMino.github.io](https://eliseomino.github.io).

## Stack

- HTML semántico, CSS y JavaScript vanilla.
- Sin frameworks, sin dependencias, sin herramientas de build y sin servicios externos para funcionalidades principales.

## Ver el sitio en local

- Abrí `index.html` directamente en el navegador, o
- serví la carpeta con un servidor estático:

```sh
python -m http.server 8000
```

## Estructura

```
├── index.html          Estructura semántica de las secciones
├── css/
│   ├── base.css        Tokens (paleta "océano profundo"), reset y tipografía
│   ├── components.css  Componentes reutilizables (nav, cards, chips, skip link)
│   ├── sections.css    Estilos específicos de cada sección
│   └── responsive.css  Ajustes responsive (mobile-first)
├── js/
│   ├── main.js         Inicialización y renderizado de proyectos
│   ├── navigation.js   Navegación (menú móvil, scroll activo)
│   └── terminal.js     Elemento terminal del hero
├── assets/
│   ├── images/         Imágenes del sitio
│   ├── icons/          Iconos SVG propios
│   └── documents/      Documentos (CV, etc.)
├── data/
│   └── projects.js     Fuente única de datos de proyectos
```

## Cómo editar el contenido

### Secciones fijas

El texto de las secciones (sobre mí, misión, formación, contacto, etc.) se edita directamente en `index.html`. Cada sección es un `<section id="...">` con un `<h2>` y un `id` de titular asociado con `aria-labelledby`.

### Proyectos

Los proyectos se declaran en `data/projects.js` y se renderizan desde `js/main.js`. No repetir datos: el archivo de datos es la única fuente.

Schema por proyecto:

```js
{
  title: "Nombre del proyecto",
  description: "Qué hace y por qué existe",
  stack: ["HTML", "CSS", "JavaScript"],
  links: { repo: "https://github.com/EliseoMino/...", demo: "https://..." },
  year: 2026,
  status: "finalizado" // "finalizado" | "en desarrollo" | "planificado"
}
```

## Despliegue

GitHub Pages sirve la rama `main` desde la raíz del repositorio. Publicar equivalent a hacer `push` a `main`.

## Reglas del proyecto

Ver [AGENTS.md](AGENTS.md): reglas de diseño, accesibilidad, JavaScript, dependencias y la regla de no inventar información.

## Licencia

MIT. Ver [LICENSE](LICENSE).