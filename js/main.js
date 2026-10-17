(() => {
  "use strict";

  const proyectos = document.getElementById("proyectos__card-list");
  if (proyectos && typeof window.projects !== "undefined" && window.projects.length > 0) {
    window.projects.forEach((proyecto) => {
      const item = document.createElement("article");
      item.className = "project-card";
      if (proyecto.image && proyecto.detail) {
        const imageLink = document.createElement("a");
        imageLink.className = "project-card__image-link";
        imageLink.href = proyecto.detail;
        imageLink.target = "_blank";
        imageLink.rel = "noopener noreferrer";
        imageLink.setAttribute("aria-label", `Ver ${proyecto.title} en una pestaña nueva`);

        const image = document.createElement("img");
        image.src = proyecto.image;
        image.alt = proyecto.imageAlt || proyecto.title;
        image.loading = "lazy";
        imageLink.appendChild(image);
        item.appendChild(imageLink);
      }

      const title = document.createElement("h3");
      if (proyecto.detail) {
        const titleLink = document.createElement("a");
        titleLink.href = proyecto.detail;
        titleLink.target = "_blank";
        titleLink.rel = "noopener noreferrer";
        titleLink.textContent = proyecto.title;
        title.appendChild(titleLink);
      } else {
        title.textContent = proyecto.title;
      }
      item.appendChild(title);

      const description = document.createElement("p");
      description.textContent = proyecto.description;
      item.appendChild(description);

      if (proyecto.stack && proyecto.stack.length) {
        const stack = document.createElement("ul");
        stack.className = "tags";
        proyecto.stack.forEach((technology) => {
          const tag = document.createElement("li");
          tag.textContent = technology;
          stack.appendChild(tag);
        });
        item.appendChild(stack);
      }
      proyectos.appendChild(item);
    });
  }

  const sliders = Array.from(document.querySelectorAll(".cert-slider"));
  if (sliders.length > 0) {
    const lightbox = document.getElementById("cert-lightbox");
    const lightboxImg = document.getElementById("cert-lightbox-img");
    const lightboxPdf = document.getElementById("cert-lightbox-pdf");
    const lightboxCaption = document.getElementById("cert-lightbox-caption");
    const lightboxClose = document.getElementById("cert-lightbox-close");
    const lightboxPrev = document.getElementById("cert-lightbox-prev");
    const lightboxNext = document.getElementById("cert-lightbox-next");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const INTERVAL = 5000;
    let lightboxSource = null;
    let resumeCarousels = () => {};
    let lightboxSlides = [];
    let lightboxIndex = 0;
    let updateCarouselFromLightbox = () => {};
    const carousels = [];

    function stopCarousels() {
      carousels.forEach((carousel) => carousel.stop());
    }

    function startCarousels() {
      carousels.forEach((carousel) => carousel.start());
    }

    function updateLightboxImage() {
      const image = lightboxSlides[lightboxIndex].querySelector("img");
      lightboxImg.src = image.currentSrc || image.src;
      lightboxImg.alt = image.alt;
      lightboxCaption.textContent = image.alt;
      lightboxSource = image;
    }

    function moveLightboxImage(direction) {
      if (lightboxSlides.length < 2) return;
      lightboxIndex = (lightboxIndex + direction + lightboxSlides.length) % lightboxSlides.length;
      updateLightboxImage();
      updateCarouselFromLightbox(lightboxIndex);
    }

    function openLightbox(img, stop, start, slides, updateCarousel) {
      stop();
      resumeCarousels = start;
      updateCarouselFromLightbox = updateCarousel;
      if (lightboxPdf) {
        lightboxPdf.data = "";
        lightboxPdf.hidden = true;
      }
      lightboxSlides = slides;
      lightboxIndex = slides.findIndex((slide) => slide.querySelector("img") === img);
      if (lightboxIndex < 0) lightboxIndex = 0;
      lightboxImg.hidden = false;
      updateLightboxImage();
      lightboxPrev.hidden = slides.length < 2;
      lightboxNext.hidden = slides.length < 2;
      updateCarouselFromLightbox(lightboxIndex);
      lightbox.hidden = false;
      document.body.classList.add("has-lightbox");
      lightboxSource = img;
      lightboxClose.focus();
    }

    function openLightboxPdf(src, caption, sourceEl) {
      stopCarousels();
      resumeCarousels = startCarousels;
      lightboxImg.hidden = true;
      lightboxPdf.hidden = false;
      lightboxPdf.data = src;
      lightboxCaption.textContent = caption;
      lightboxSlides = [];
      updateCarouselFromLightbox = () => {};
      lightboxPrev.hidden = true;
      lightboxNext.hidden = true;
      lightbox.hidden = false;
      document.body.classList.add("has-lightbox");
      lightboxSource = sourceEl;
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.classList.remove("has-lightbox");
      if (lightboxPdf) {
        lightboxPdf.data = "";
        lightboxPdf.hidden = true;
      }
      lightboxImg.hidden = false;
      lightboxSlides = [];
      updateCarouselFromLightbox = () => {};
      lightboxPrev.hidden = true;
      lightboxNext.hidden = true;
      resumeCarousels();
      if (lightboxSource) {
        lightboxSource.focus();
        lightboxSource = null;
      }
    }

    sliders.forEach((slider) => {
      slider.classList.add("is-js");
      const slides = Array.from(slider.querySelectorAll(".cert-slide"));
      const counter = slider.querySelector(".cert-slider__counter");
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
        if (reduceMotion.matches || !lightbox.hidden || slides.length < 2) return;
        timer = setInterval(next, INTERVAL);
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
            openLightbox(slide.querySelector("img"), stop, start, slides, (nextIndex) => {
              index = nextIndex;
              update();
            });
          }
        });
        slide.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            slide.click();
          }
        });
      });

      slider.addEventListener("mouseenter", stop);
      slider.addEventListener("mouseleave", start);
      slider.addEventListener("focusin", stop);
      slider.addEventListener("focusout", start);
      reduceMotion.addEventListener("change", start);

      carousels.push({ stop, start });
      update();
      start();
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", () => moveLightboxImage(-1));
    lightboxNext.addEventListener("click", () => moveLightboxImage(1));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
      } else if (!lightbox.hidden && event.key === "ArrowLeft") {
        moveLightboxImage(-1);
      } else if (!lightbox.hidden && event.key === "ArrowRight") {
        moveLightboxImage(1);
      }
    });

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
  }
})();
