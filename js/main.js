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
    const counter = document.getElementById("cert-counter");
    const lightbox = document.getElementById("cert-lightbox");
    const lightboxImg = document.getElementById("cert-lightbox-img");
    const lightboxPdf = document.getElementById("cert-lightbox-pdf");
    const lightboxCaption = document.getElementById("cert-lightbox-caption");
    const lightboxClose = document.getElementById("cert-lightbox-close");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const INTERVAL = 5000;
    let index = 0;
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
      if (reduceMotion.matches || slides.length < 2) return;
      timer = setInterval(next, INTERVAL);
    }

    let lightboxSource = null;

    function openLightbox(img, caption) {
      stop();
      lightboxPdf.data = "";
      lightboxPdf.hidden = true;
      lightboxImg.hidden = false;
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption || img.alt;
      lightbox.hidden = false;
      document.body.classList.add("has-lightbox");
      lightboxSource = img;
      lightboxClose.focus();
    }

    function openLightboxPdf(src, caption, sourceEl) {
      stop();
      lightboxImg.hidden = true;
      lightboxPdf.hidden = false;
      lightboxPdf.data = src;
      lightboxCaption.textContent = caption;
      lightbox.hidden = false;
      document.body.classList.add("has-lightbox");
      lightboxSource = sourceEl;
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.classList.remove("has-lightbox");
      lightboxPdf.data = "";
      lightboxPdf.hidden = true;
      lightboxImg.hidden = false;
      start();
      if (lightboxSource) {
        lightboxSource.focus();
        lightboxSource = null;
      }
    }

    slides.forEach((slide) => {
      slide.tabIndex = 0;
      slide.setAttribute("role", "button");
      slide.setAttribute("aria-label", slide.querySelector("img").alt);
      slide.addEventListener("click", () => {
        if (slide.classList.contains("is-prev")) {
          prev();
        } else if (slide.classList.contains("is-next")) {
          next();
        } else if (slide.classList.contains("is-active")) {
          openLightbox(slide.querySelector("img"));
        }
      });
      slide.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          slide.click();
        }
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      }
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);

    reduceMotion.addEventListener("change", start);

    const cvImg = document.querySelector(".cv-preview__img");
    if (cvImg) {
      cvImg.tabIndex = 0;
      cvImg.setAttribute("role", "button");
      cvImg.setAttribute("aria-label", "Ampliar la vista previa del curriculum vitae");
      cvImg.addEventListener("click", () => {
        openLightboxPdf("assets/documents/CV.pdf", "Curriculum Vitae (PDF)", cvImg);
      });
      cvImg.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          cvImg.click();
        }
      });
    }

    update();
    start();
  }
})();