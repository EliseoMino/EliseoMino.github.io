(() => {
  "use strict";
  const proyectos = document.getElementById("proyectos__card-list");
  if (proyectos && typeof window.projects !== "undefined" && window.projects.length > 0) {
    window.projects.forEach((proyecto) => {
      const item = document.createElement("article");
      item.className = "project-card";
      const enlaces = proyecto.links || {};
      const repo = enlaces.repo ? `<a href="${enlaces.repo}" rel="noopener noreferrer">Repositorio</a>` : "";
      const demo = enlaces.demo ? `<a href="${enlaces.demo}" rel="noopener noreferrer">Demo</a>` : "";
      item.innerHTML = `
        <h3>${proyecto.title}</h3>
        <p>${proyecto.description}</p>
        <ul class="tags">${(proyecto.stack || []).map((t) => `<li>${t}</li>`).join("")}</ul>
        <p>${repo} ${demo}</p>`;
      proyectos.appendChild(item);
    });
  }
})();