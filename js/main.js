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

  const slider = document.getElementById("cert-slider");
  if (slider) {
    slider.classList.add("is-js");
    const slides = Array.from(slider.querySelectorAll(".cert-slide"));
    const prevBtn = document.getElementById("cert-prev");
    const nextBtn = document.getElementById("cert-next");
    const pauseBtn = document.getElementById("cert-pause");
    const counter = document.getElementById("cert-counter");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const INTERVAL = 8000;
    let index = 0;
    let paused = false;
    let timer = null;

    function update() {
      slides.forEach((slide, i) => {
        slide.classList.remove("is-active", "is-prev", "is-next");
        slide.hidden = true;
        if (i === index) {
          slide.classList.add("is-active");
          slide.hidden = false;
        } else if (i === (index - 1 + slides.length) % slides.length) {
          slide.classList.add("is-prev");
          slide.hidden = false;
        } else if (i === (index + 1) % slides.length) {
          slide.classList.add("is-next");
          slide.hidden = false;
        }
      });
      counter.textContent = `${index + 1} / ${slides.length}`;
    }

    function next() {
      index = (index + 1) % slides.length;
      update();
    }

    function prev() {
      index = (index - 1 + slides.length) % slides.length;
      update();
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      stop();
      if (paused || reduceMotion.matches || slides.length < 2) return;
      timer = setInterval(next, INTERVAL);
    }

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

    pauseBtn.addEventListener("click", () => {
      paused = !paused;
      pauseBtn.setAttribute("aria-pressed", String(paused));
      pauseBtn.textContent = paused ? "Reanudar" : "Pausar";
      start();
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);

    reduceMotion.addEventListener("change", start);

    update();
    start();
  }
})();