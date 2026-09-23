# AGENTS.md

Guía para agentes (IA o humanos) que trabajen en este repositorio.

## Objetivo del proyecto

Sitio estático de una sola página (portfolio) que presenta a Eliseo Miño: estudiante de Ingeniería en Sistemas (UTN FRVM), desarrollador backend y estudiante de ciberseguridad. Debe permitir que un reclutador o profesional técnico entienda rápidamente quién es, qué estudia, qué áreas maneja, qué proyectos demuestra, qué experiencia práctica tiene en ciberseguridad y cómo contactarlo.

## Stack

- HTML semántico, CSS y JavaScript vanilla.
- Sin frameworks, sin librerías, sin herramientas de build y sin servicios externos para funcionalidades principales.
- Fuentes e iconos locales o del sistema.

## Restricciones

- Compatible con GitHub Pages: solo contenido estático, sin backend, sin base de datos, sin autenticación.
- Responsive y accesible.
- Rendimiento y legibilidad por encima de efectos visuales.
- No se agregan funcionalidades, librerías ni abstracciones "por si acaso": mantener simple, mantenible y comprensible.

## Estructura de directorios

```
├── index.html          Estructura semántica de las secciones
├── css/
│   ├── base.css        Tokens (paleta "océano profundo"), reset y tipografía
│   ├── components.css  Componentes reutilizables
│   ├── sections.css    Estilos específicos de cada sección
│   └── responsive.css  Ajustes responsive (mobile-first)
├── js/
│   ├── main.js         Inicialización y renderizado de proyectos
│   ├── navigation.js   Navegación
│   └── terminal.js     Elemento terminal del hero
├── assets/
│   ├── images/         Imágenes
│   ├── icons/          Iconos SVG propios
│   └── documents/      Documentos
├── data/
│   └── projects.js     Fuente única de datos de proyectos
```

Responsabilidad de cada directorio:

- `index.html` — contenido real y estructura semántica de todas las secciones.
- `css/` — todo el diseño. El sitio debe verse completo sin JavaScript.
- `js/` — solo mejoras progresivas de interactividad y renderizado de proyectos.
- `assets/` — recursos binarios del sitio.
- `data/` — datos de proyectos, separable del marcado.

## Convenciones

- Idioma del contenido: español.
- Nombres de archivos en minúsculas separados por guiones.
- No se agregan comentarios de código salvo que se pidan.
- Un solo `h1` por página; jerarquía de encabezados secuencial.
- Cada sección usa `id` único y `aria-labelledby` apuntando a su titular.
- HTML, CSS y JS en español semántico solo para atributos/IDs; identificadores de código en inglés.

## Principios de diseño

- Estética profesional y técnica: tonos de azul oscuro y negro que evocan un océano profundo.
- Está prohibido el estereotipo "hacker": exceso de verde, lluvia de código, calaveras, animaciones innecesarias o efectos que perjudiquen la legibilidad.
- Los elementos inspirados en terminales deben ser sutiles y claramente legibles.

## Reglas de accesibilidad

- Skip link al inicio del sitio.
- Landmarks: `header`, `nav`, `main`, `footer`.
- Contraste AA en todos los textos; foco visible siempre; navegación completa por teclado.
- Respetar `prefers-reduced-motion`; sin animaciones que distraigan.
- Imágenes con `alt` descriptivo; SVG decorativo con `aria-hidden="true"`.
- Targets táctiles de al menos 44px en móvil.

## Reglas de JavaScript

- JavaScript es solo una mejora progresiva: el sitio debe ser funcional y legible sin él.
- El contenido esencial no depende de JS (excepto el renderizado de proyectos, que está documentado).
- Todo el JS debe respetar `prefers-reduced-motion`.
- Sin efectos visuales que degraden el rendimiento o la legibilidad.

## Reglas de dependencias

- No agregar dependencias salvo que exista una justificación técnica clara.
- Preferir HTML, CSS y JS del navegador.
- Revisar dos veces antes de introducir un framework, una librería o un servicio externo.

## Regla de no inventar información

Solo se publican datos provistos explícitamente por el dueño del sitio.

- No agregar proyectos, tecnologías, certificaciones, responsabilidades, métricas, testimonios, clientes ni experiencia inventados.
- Las secciones sin datos reales se dejan vacías u ocultas; nunca se rellenan con texto ficticio.
- Si falta información, preguntar en lugar de asumir.

## Criterios antes de modificar el proyecto

Antes de tocar cualquier archivo, revisar que el cambio:

1. Respete el stack: vanilla HTML/CSS/JS, sin dependencias ni servicios externos nuevos.
2. Mantenga el sitio estático y compatible con GitHub Pages.
3. Conserve la estética "océano profundo" y no introduzca clichés hacking.
4. Mantenga los estándares de accesibilidad y `prefers-reduced-motion`.
5. Use únicamente información provista explícitamente; si falta, preguntar.
6. No dependa de JavaScript para contenido esencial no justificado.
7. Agregue la complejidad mínima necesaria y nada más.

## AI Development Rules

The agent must not:

- invent professional experience;
- invent responsibilities in projects;
- invent certifications;
- claim proficiency in technologies not explicitly provided;
- create fake metrics;
- create fake testimonials;
- create fake clients;
- describe educational exercises as professional experience.

When information is missing, ask for it instead of assuming it.