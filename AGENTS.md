# AGENTS.md

Guía para agentes (IA o humanos) que trabajen en este repositorio.

## Objetivo del proyecto

Sitio estático de una sola página (portfolio) diseñado para presentar profesionalmente el perfil de su propietario.

Debe permitir que un visitante entienda rápidamente:

* quién es;
* cuál es su formación;
* qué áreas profesionales y técnicas maneja;
* qué habilidades puede demostrar;
* qué proyectos ha realizado;
* qué experiencia posee;
* qué formación o certificaciones puede acreditar;
* cómo contactarlo.

El contenido debe adaptarse a la información real proporcionada por el propietario del sitio.

## Stack

* HTML semántico, CSS y JavaScript vanilla.
* Sin frameworks, sin librerías, sin herramientas de build y sin servicios externos para funcionalidades principales.
* Fuentes e iconos locales o del sistema.

## Restricciones

* Compatible con GitHub Pages: solo contenido estático, sin backend, sin base de datos y sin autenticación.
* Responsive y accesible.
* Rendimiento y legibilidad por encima de efectos visuales.
* No se agregan funcionalidades, librerías ni abstracciones "por si acaso": mantener simple, mantenible y comprensible.
* El contenido personal debe mantenerse separado de la estructura reutilizable del proyecto cuando sea posible.

## Estructura de directorios

```text
├── index.html          Estructura semántica de las secciones
├── css/
│   ├── base.css        Tokens de diseño, reset y tipografía
│   ├── components.css  Componentes reutilizables
│   ├── sections.css    Estilos específicos de cada sección
│   └── responsive.css  Ajustes responsive (mobile-first)
├── js/
│   ├── main.js         Inicialización y funcionalidades principales
│   ├── navigation.js   Navegación
│   └── terminal.js     Elemento terminal del hero, si está habilitado
├── assets/
│   ├── images/         Imágenes del sitio
│   ├── icons/          Iconos SVG
│   └── documents/      Documentos y archivos públicos
├── data/
│   └── projects.js     Fuente de datos de proyectos
```

Responsabilidad de cada directorio:

* `index.html` — contenido y estructura semántica de todas las secciones.
* `css/` — todo el diseño visual. El sitio debe mantener una estructura funcional independientemente de JavaScript.
* `js/` — interactividad y mejoras progresivas.
* `assets/` — recursos binarios del sitio.
* `data/` — datos que puedan separarse del marcado, como proyectos, habilidades o experiencia.

## Convenciones

* El idioma del contenido debe corresponder al idioma elegido para el sitio.
* Nombres de archivos en minúsculas separados por guiones.
* No se agregan comentarios de código salvo que se pidan o sean necesarios para aclarar una decisión no evidente.
* Un solo `h1` por página; jerarquía de encabezados secuencial.
* Cada sección utiliza un `id` único cuando sea necesario para navegación o referencias.
* Utilizar `aria-labelledby` cuando mejore la relación semántica entre una sección y su titular.
* Los identificadores de código deben utilizar nombres descriptivos y consistentes.
* Evitar mezclar contenido específico del propietario con la lógica general del sitio cuando pueda mantenerse separado.

## Principios de diseño

* Estética profesional, clara y coherente con el perfil del propietario.
* La paleta de colores debe estar centralizada mediante variables CSS para facilitar su personalización.
* Evitar estéticas genéricas o estereotipos asociados a una profesión concreta.
* Las referencias visuales a una disciplina profesional deben ser sutiles y no perjudicar la legibilidad.
* Priorizar jerarquía visual, contraste, espacios y claridad del contenido.
* Las animaciones deben tener una finalidad concreta y no utilizarse únicamente como decoración.
* El diseño debe permitir cambiar fácilmente la paleta de colores sin modificar cada componente individualmente.

## Reglas de accesibilidad

* Skip link al inicio del sitio.
* Landmarks: `header`, `nav`, `main`, `footer`.
* Contraste AA en todos los textos cuando sea aplicable.
* Foco visible siempre.
* Navegación completa por teclado.
* Respetar `prefers-reduced-motion`; sin animaciones que distraigan o dificulten la navegación.
* Imágenes con `alt` descriptivo cuando aporten información.
* Imágenes puramente decorativas correctamente identificadas.
* SVG decorativos con `aria-hidden="true"`.
* Targets táctiles de al menos 44px en móvil.
* No utilizar el color como único medio para comunicar información.

## Reglas de JavaScript

* JavaScript debe utilizarse como mejora progresiva siempre que sea razonablemente posible.
* El contenido esencial no debe depender de JavaScript salvo que exista una justificación técnica clara.
* La navegación y el contenido principal deben seguir siendo comprensibles y accesibles.
* Todo comportamiento animado debe respetar `prefers-reduced-motion`.
* Evitar efectos visuales que degraden el rendimiento o la legibilidad.
* No utilizar JavaScript para resolver problemas que puedan resolverse de forma más sencilla mediante HTML o CSS.

## Reglas de dependencias

* No agregar dependencias salvo que exista una justificación técnica clara.
* Preferir APIs nativas del navegador.
* No introducir frameworks, librerías, servicios externos o herramientas de build sin justificar previamente su necesidad.
* Antes de agregar una dependencia, evaluar si puede resolverse razonablemente con HTML, CSS o JavaScript vanilla.

## Contenido personal

El sitio está diseñado para ser reutilizable por diferentes personas.

Todo contenido específico del propietario debe provenir de información proporcionada explícitamente por esa persona.

Esto incluye, entre otros:

* nombre;
* descripción profesional;
* formación;
* experiencia;
* habilidades;
* proyectos;
* tecnologías;
* certificaciones;
* fotografías;
* enlaces;
* información de contacto;
* información biográfica.

No asumir información sobre el propietario del sitio.

Cuando sea posible, utilizar archivos de ejemplo o valores placeholder para demostrar cómo debe completarse el contenido.

## Regla de no inventar información

Solo se publican datos proporcionados explícitamente por el propietario del sitio.

* No agregar proyectos, tecnologías, certificaciones, responsabilidades, métricas, testimonios, clientes ni experiencia inventados.
* No convertir formación académica o ejercicios personales en experiencia profesional.
* No exagerar el nivel de dominio de una tecnología.
* No atribuir resultados, métricas o responsabilidades que no hayan sido proporcionados.
* Las secciones sin datos reales se dejan vacías, se ocultan o utilizan placeholders claramente identificados.
* Si falta información necesaria, preguntar en lugar de asumir.

## Personalización

La plantilla debe facilitar la adaptación a diferentes perfiles.

Como mínimo, deberían poder personalizarse fácilmente:

* información personal;
* proyectos;
* habilidades;
* experiencia;
* formación;
* enlaces de contacto;
* imágenes;
* documentos;
* paleta de colores;
* secciones visibles.

Las modificaciones de contenido no deberían requerir alterar innecesariamente la estructura o lógica general del sitio.

## Criterios antes de modificar el proyecto

Antes de tocar cualquier archivo, revisar que el cambio:

1. Respete el stack: vanilla HTML/CSS/JS, sin dependencias ni servicios externos nuevos.
2. Mantenga el sitio estático y compatible con GitHub Pages.
3. Mantenga una estética profesional y coherente.
4. Mantenga los estándares de accesibilidad y `prefers-reduced-motion`.
5. Utilice únicamente información proporcionada explícitamente por el propietario.
6. No dependa innecesariamente de JavaScript para contenido esencial.
7. Mantenga la personalización sencilla.
8. Evite acoplar contenido personal con la estructura reutilizable.
9. Agregue la complejidad mínima necesaria y nada más.
10. No introduzca funcionalidades únicamente porque sean técnicamente posibles.

## AI Development Rules

The agent must not:

* invent professional experience;
* invent responsibilities in projects;
* invent certifications;
* claim proficiency in technologies not explicitly provided;
* create fake metrics;
* create fake testimonials;
* create fake clients;
* describe educational exercises as professional experience;
* infer personal information that has not been provided;
* replace real content with generic claims presented as facts.

When information is missing, ask for it instead of assuming it.

When a requested change affects the reusable architecture, prefer a general solution that can accommodate different users rather than implementing a solution specific to one person's profile.
