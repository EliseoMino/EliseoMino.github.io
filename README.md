# Portfolio Template

Plantilla de portfolio profesional estático, diseñada para presentar de forma clara la información profesional de una persona: perfil, formación, habilidades, proyectos, experiencia, certificaciones y medios de contacto.

El proyecto está pensado para funcionar directamente con GitHub Pages y poder personalizarse sin necesidad de frameworks, backend o herramientas de build.

## Características

* Diseño responsive.
* HTML semántico.
* CSS vanilla.
* JavaScript vanilla.
* Compatible con GitHub Pages.
* Sin backend ni base de datos.
* Sin frameworks ni dependencias externas.
* Estructura simple y fácil de personalizar.
* Accesibilidad como criterio de diseño.
* Contenido personal separado de la lógica reutilizable.

## Stack

* HTML5
* CSS3
* JavaScript
* GitHub Pages

No se utilizan frameworks, dependencias, herramientas de build ni servicios externos para las funcionalidades principales.

## Ver el sitio en local

Podés abrir `index.html` directamente en el navegador o servir el proyecto mediante un servidor HTTP local:

```sh
python -m http.server 8000
```

Después, abrir:

```text
http://localhost:8000
```

## Estructura

```text
├── index.html
├── css/
│   ├── base.css        Tokens, reset y tipografía
│   ├── components.css  Componentes reutilizables
│   ├── sections.css    Estilos específicos de cada sección
│   └── responsive.css  Ajustes responsive
├── js/
│   ├── main.js         Inicialización y funcionalidades principales
│   ├── navigation.js   Navegación y menú móvil
│   └── terminal.js     Componente terminal, si está habilitado
├── assets/
│   ├── images/         Imágenes del portfolio
│   ├── icons/          Iconos
│   └── documents/      CV, certificados y otros documentos
├── data/
│   └── projects.js     Fuente de datos de los proyectos
├── AGENTS.md
├── LICENSE
└── README.md
```

## Personalización

La plantilla está diseñada para poder adaptarse a diferentes perfiles sin modificar la estructura principal del proyecto.

Como mínimo, personalizá:

* Nombre y descripción profesional.
* Formación académica.
* Habilidades y tecnologías.
* Experiencia.
* Proyectos.
* Certificaciones.
* Enlaces profesionales.
* Información de contacto.
* Imágenes y documentos.
* Paleta de colores.

### Contenido personal

El contenido específico del propietario debe agregarse en los archivos correspondientes.

Las imágenes y documentos propios pueden colocarse en:

```text
assets/images/
assets/documents/
```

Se recomienda utilizar formatos optimizados para la web, especialmente para imágenes.

Los documentos como CV y certificados pueden conservarse en PDF.

### Proyectos

Los proyectos se declaran en:

```text
data/projects.js
```

El archivo funciona como fuente única de datos para los proyectos que se muestran en el portfolio.

Ejemplo:

```js
{
  title: "Nombre del proyecto",
  description: "Qué hace y por qué existe",
  stack: ["HTML", "CSS", "JavaScript"],
  links: {
    repo: "https://github.com/usuario/proyecto",
    demo: "https://usuario.github.io/proyecto/"
  },
  year: 2026,
  status: "finalizado"
}
```

Estados disponibles:

```text
finalizado
en desarrollo
planificado
```

No es necesario modificar el código de renderizado para agregar nuevos proyectos.

## Personalización visual

La paleta de colores se encuentra centralizada en los tokens definidos en CSS.

Esto permite modificar la identidad visual del portfolio sin tener que buscar y reemplazar colores individualmente en todo el proyecto.

Ejemplo:

```css
:root {
  --color-primary: #DCEBFB;
  --color-background: #0F1115;
  --color-surface: #171A21;
  --color-text: #F5F7FA;
  --color-muted: #9AA4B2;
  --color-accent: #7AA2F7;
}
```

La paleta incluida en la plantilla funciona como configuración inicial y puede reemplazarse completamente.

## Despliegue con GitHub Pages

El proyecto puede publicarse directamente mediante GitHub Pages.

Una configuración típica utiliza la rama `main` y la raíz del repositorio como fuente de publicación.

Después de realizar un cambio:

```sh
git add .
git commit -m "actualizar portfolio"
git push
```

GitHub Pages se encargará de publicar la nueva versión.

La URL dependerá del nombre del repositorio.

Para un repositorio llamado:

```text
portfolio-template
```

la URL tendrá una estructura similar a:

```text
https://usuario.github.io/portfolio-template/
```

Para un repositorio de usuario llamado:

```text
usuario.github.io
```

la URL será:

```text
https://usuario.github.io/
```

## Reutilización como plantilla

Este repositorio puede utilizarse como punto de partida para otros portfolios.

La personalización recomendada consiste en:

1. Copiar o utilizar el repositorio como plantilla.
2. Reemplazar la información personal.
3. Agregar proyectos, experiencia y formación.
4. Añadir imágenes y documentos.
5. Personalizar la paleta visual.
6. Revisar los enlaces.
7. Publicar mediante GitHub Pages.

La estructura general y la lógica reutilizable deberían mantenerse separadas del contenido específico de cada persona.

## Reglas del proyecto

Consultar [AGENTS.md](AGENTS.md) antes de modificar la estructura o agregar funcionalidades.

Las reglas incluyen criterios relacionados con:

* Diseño.
* Accesibilidad.
* JavaScript.
* Dependencias.
* Compatibilidad con GitHub Pages.
* Mantenibilidad.
* Personalización.
* Uso de contenido personal.
* Prevención de información inventada.

## Licencia

MIT. Ver [LICENSE](LICENSE).

La licencia MIT se aplica al código fuente del proyecto.

El contenido personal incorporado por cada propietario —como fotografías, CV, certificados, información biográfica o datos de contacto— debe considerarse independiente del código y conservar sus derechos correspondientes.

Los recursos de terceros mantienen sus respectivas licencias y condiciones de uso.
