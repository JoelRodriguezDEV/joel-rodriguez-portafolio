const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const menuBackdrop = document.getElementById("menu-backdrop");

function openMenu() {
  if (!mobileMenu || !menuBackdrop) return;
  mobileMenu.classList.add("open");
  menuBackdrop.classList.remove("hidden");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  if (!mobileMenu || !menuBackdrop) return;
  mobileMenu.classList.remove("open");
  menuBackdrop.classList.add("hidden");
  document.body.classList.remove("menu-open");
}

if (menuToggle) menuToggle.addEventListener("click", openMenu);
if (menuClose) menuClose.addEventListener("click", closeMenu);
if (menuBackdrop) menuBackdrop.addEventListener("click", closeMenu);

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    const BACKEND_URL = "https://formspree.io/f/mlgawllz";

    fetch(BACKEND_URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (formMessage) {
          formMessage.innerText = data.message || "Message sent successfully!";
          formMessage.classList.remove("hidden", "text-red-500");
          formMessage.classList.add("text-cyan-400");
          formMessage.style.display = "block";
        }
        contactForm.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        if (formMessage) {
          formMessage.innerText = "Error sending message. Please try again.";
          formMessage.classList.remove("hidden", "text-cyan-400");
          formMessage.classList.add("text-red-500");
          formMessage.style.display = "block";
        }
      })
      .finally(() => {
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
        setTimeout(() => {
          if (formMessage) formMessage.style.display = "none";
        }, 5000);
      });
  });
}

const WHATSAPP_NUMBER = "18298383731";
const $fab = document.getElementById("waFab");
const $modal = document.getElementById("waModal");
const $close = document.getElementById("waClose");
const $form = document.getElementById("waForm");

if ($fab) {
  $fab.addEventListener("click", () => {
    $modal.classList.add("is-open");
    $modal.setAttribute("aria-hidden", "false");
  });
}

if ($close) {
  $close.addEventListener("click", closeModal);
}

if ($modal) {
  $modal.addEventListener("click", (e) => {
    if (e.target === $modal) closeModal();
  });
}

function closeModal() {
  if (!$modal) return;
  $modal.classList.remove("is-open");
  $modal.setAttribute("aria-hidden", "true");
}

if ($form) {
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($form.company && $form.company.value.trim() !== "") return;
    const name = ($form.name?.value || "").trim();
    const msg = ($form.message?.value || "").trim();

    if (!msg) {
      alert("Por favor, escribe tu mensaje.");
      return;
    }

    const text = `Hola, soy ${name}. ${msg}`;
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank");
    closeModal();
    $form.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  tsParticles.load("particles-js", {
    fpsLimit: 60,
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      color: { value: "#00f0ff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        animation: { enable: false },
      },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true,
        distance: 150,
        color: "#00f0ff",
        opacity: 0.2,
        width: 1,
        triangles: { enable: false },
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: false },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: window.innerWidth > 768,
          mode: "grab",
        },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
        push: {
          quantity: 3,
          particles: {
            life: {
              duration: { sync: true, value: 3 },
              count: 1,
            },
            opacity: {
              value: { min: 0, max: 0.5 },
              animation: {
                enable: true,
                speed: 1,
                startValue: "max",
                destroy: "min",
              },
            },
          },
        },
      },
    },
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  });

  const sliders = document.querySelectorAll(".swiper");
  sliders.forEach((slider) => {
    new Swiper(slider, {
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });

  document.querySelectorAll(".pdf-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const pdfUrl = trigger.getAttribute("data-pdf");
      if (pdfUrl) openPdfViewer(pdfUrl);
    });
  });

  const closePdfBtn = document.getElementById("close-pdf-btn");
  if (closePdfBtn) {
    closePdfBtn.addEventListener("click", closePdfViewer);
  }
});

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm Joel Rodriguez",
    "hero.role": "Full-Stack Developer.",
    "hero.description":
      "I help businesses and entrepreneurs bring their ideas to life through scalable web applications, custom websites, and optimized digital platforms.",
    "hero.btnContact": "Contact Me",
    "hero.btnProjects": "View Projects",
    "about.title": "About Me",
    "about.p1":
      "I am a Full-Stack Developer passionate about building modern web solutions. My core stack includes <strong class='text-cyan-400'>React, Node.js, and Java</strong>, with strong experience in building and consuming <strong class='text-cyan-400'>REST APIs</strong>.",
    "about.p2":
      "What sets me apart is my certification in <strong class='text-cyan-400'>Prompt Engineering</strong>. I integrate Artificial Intelligence into my development environment to structure efficient services, optimize code, and deliver innovative solutions.",
    "about.p3":
      "I manage databases like <strong class='text-cyan-400'>MongoDB and MySQL</strong>. On the frontend, I specialize in creating high-impact Landing Pages and fully <strong class='text-cyan-400'>Responsive</strong> designs using Tailwind CSS and Feather Icons.",
    "about.btn": "Get In Touch",
    "skills.frontend": "Frontend & UI",
    "skills.frontendDesc": "React, Tailwind & Responsive Design",
    "skills.backend": "Backend & APIs",
    "skills.backendDesc": "Node.js, Java & RESTful Services",
    "skills.ai": "AI Solutions",
    "skills.aiDesc": "Prompt Engineering & Automation",
    "skills.data": "Data Management",
    "skills.dataDesc": "MySQL & MongoDB Optimization",
    "nav.certifications": "Certifications",
    "titles.certifications": "Certifications",
    "cert.1.title": "Prompt Engineering",
    "cert.1.desc":
      "Advanced techniques in AI communication and workflow optimization.",
    "cert.2.title": "Full Stack Development",
    "cert.2.desc":
      "Comprehensive training in React, Node.js, and Database management.",
    "titles.projects": "Featured Projects",
    "titles.skills": "Technologies",
    "titles.contact": "Get In Touch",
    "contact.info": "Contact Info",
    "contact.desc":
      "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
    "contact.btn": "Send Message",
    "proj.1.title": "U Closset | E-Commerce Platform",
    "proj.1.desc":
      "U Closset is a modern e-commerce frontend designed around the concept of 'Silent Luxury'. The interface prioritizes minimalism, typography, and negative space over clutter, delivering a high-end shopping experience similar to top fashion houses.",
    "proj.2.title": "Budget Manager | ERP",
    "proj.2.desc":
      "It is a lightweight and specialized ERP (Enterprise Resource Planning), designed for the comprehensive management of events, retreats, or conventions. It solves three fundamental problems of real-time administration: financial control, lodging logistics, and staff auditing.",
    "proj.3.title": "Doña Ana | Digital Menu",
    "proj.3.desc":
      "This project, titled 'Digital Menu - Doña Ana', is a modern and dynamic web application designed to digitize the ordering experience in a restaurant, integrating a professional administration panel for content management.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, soy Joel Rodriguez",
    "hero.role": "Desarrollador Full-Stack.",
    "hero.description":
      "Ayudo a empresas y emprendedores a dar vida a sus ideas mediante aplicaciones web escalables, sitios web personalizados y plataformas digitales optimizadas.",
    "hero.btnContact": "Contáctame",
    "hero.btnProjects": "Ver Proyectos",
    "about.title": "Sobre Mí",
    "about.p1":
      "Soy un desarrollador Full-Stack apasionado por construir soluciones web modernas. Mi stack principal incluye <strong class='text-cyan-400'>React, Node.js y Java</strong>, con sólida experiencia en la creación y consumo de <strong class='text-cyan-400'>APIs REST</strong>.",
    "about.p2":
      "Lo que me diferencia es mi certificación en <strong class='text-cyan-400'>Prompt Engineering</strong>. Integro Inteligencia Artificial en mi entorno de desarrollo para estructurar servicios eficientes, optimizar código y ofrecer soluciones innovadoras.",
    "about.p3":
      "Manejo bases de datos como <strong class='text-cyan-400'>MongoDB y MySQL</strong>. En el frontend, me especializo en crear Landing Pages de alto impacto y diseños totalmente <strong class='text-cyan-400'>Responsivos</strong> usando Tailwind CSS.",
    "about.btn": "Hablemos",
    "skills.frontend": "Frontend y UI",
    "skills.frontendDesc": "React, Tailwind y Diseño Responsivo",
    "skills.backend": "Backend y APIs",
    "skills.backendDesc": "Node.js, Java y Servicios RESTful",
    "skills.ai": "Soluciones IA",
    "skills.aiDesc": "Prompt Engineering y Automatización",
    "skills.data": "Gestión de Datos",
    "skills.dataDesc": "Optimización MySQL y MongoDB",
    "nav.certifications": "Certificaciones",
    "titles.certifications": "Certificaciones",
    "cert.1.title": "Ingeniería de Prompts",
    "cert.1.desc":
      "Técnicas avanzadas en comunicación con IA y optimización de flujos de trabajo.",
    "cert.2.title": "Desarrollo Full Stack",
    "cert.2.desc":
      "Entrenamiento integral en React, Node.js y gestión de bases de datos.",
    "titles.projects": "Proyectos Destacados",
    "titles.skills": "Tecnologías",
    "titles.contact": "Contáctame",
    "contact.info": "Info de Contacto",
    "contact.desc":
      "Siéntete libre de escribirme si buscas un desarrollador, tienes una pregunta o simplemente quieres conectar.",
    "contact.btn": "Enviar Mensaje",
    "proj.1.title": "U Closset | Plataforma E-Commerce",
    "proj.1.desc":
      "U Closset es un frontend moderno de e-commerce diseñado bajo el concepto de 'Lujo Silencioso'. La interfaz prioriza el minimalismo, la tipografía y el espacio negativo sobre el desorden, ofreciendo una experiencia de compra de alta gama similar a las principales casas de moda.",
    "proj.2.title": "Budget Manager | ERP",
    "proj.2.desc":
      "Es un ERP (Planificación de Recursos Empresariales) ligero y especializado, diseñado para la gestión integral de eventos, retiros o convenciones. Resuelve tres problemas fundamentales de la administración en tiempo real: control financiero, logística de alojamiento y auditoría de personal.",
    "proj.3.title": "Doña Ana | Menú Digital",
    "proj.3.desc":
      "Este proyecto es una aplicación web moderna y dinámica diseñada para digitalizar la experiencia de pedidos en un restaurante, integrando un panel de administración profesional (CMS) para la gestión de contenido en tiempo real.",
  },
};

let currentLang = localStorage.getItem("lang") || "en";
const btnDesktop = document.getElementById("lang-toggle-desktop");
const btnMobile = document.getElementById("lang-toggle-mobile");

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  if (btnDesktop) btnDesktop.innerText = lang === "en" ? "ES" : "EN";
  if (btnMobile) btnMobile.innerText = lang === "en" ? "ESPAÑOL" : "ENGLISH";

  localStorage.setItem("lang", lang);
  currentLang = lang;
}

function toggleLanguage() {
  const newLang = currentLang === "en" ? "es" : "en";
  updateLanguage(newLang);
}

if (btnDesktop) btnDesktop.addEventListener("click", toggleLanguage);
if (btnMobile) btnMobile.addEventListener("click", toggleLanguage);

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);
});

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
const scale = 1.5;
const canvas = document.getElementById("pdf-render");
const ctx = canvas ? canvas.getContext("2d") : null;
const pdfModal = document.getElementById("pdf-viewer-modal");
const pdfLoader = document.getElementById("pdf-loader");

function renderPage(num) {
  pageRendering = true;
  if (pdfLoader) pdfLoader.classList.remove("hidden");

  pdfDoc.getPage(num).then(function (page) {
    const viewport = page.getViewport({
      scale: window.innerWidth < 768 ? 0.6 : scale,
    });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };

    const renderTask = page.render(renderContext);
    renderTask.promise.then(function () {
      pageRendering = false;
      if (pdfLoader) pdfLoader.classList.add("hidden");

      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });
  document.getElementById("page-num").textContent = num;
}

function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

function onPrevPage() {
  if (pageNum <= 1) return;
  pageNum--;
  queueRenderPage(pageNum);
}

function onNextPage() {
  if (pageNum >= pdfDoc.numPages) return;
  pageNum++;
  queueRenderPage(pageNum);
}

document.getElementById("prev-page")?.addEventListener("click", onPrevPage);
document.getElementById("next-page")?.addEventListener("click", onNextPage);

function openPdfViewer(url) {
  if (!url) return;

  if (pdfModal) {
    pdfModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  if (pdfLoader) pdfLoader.classList.remove("hidden");
  pageNum = 1;

  pdfjsLib
    .getDocument(url)
    .promise.then(function (pdfDoc_) {
      pdfDoc = pdfDoc_;
      document.getElementById("page-count").textContent = pdfDoc.numPages;
      renderPage(pageNum);
    })
    .catch(function (error) {
      console.error("Error cargando PDF:", error);
      if (pdfLoader) pdfLoader.classList.add("hidden");
      alert("No se pudo cargar el documento. Verifica la ruta.");
    });
}

function closePdfViewer() {
  if (pdfModal) {
    pdfModal.classList.add("hidden");
    document.body.style.overflow = "";
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    pdfDoc = null;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !pdfModal.classList.contains("hidden")) {
    closePdfViewer();
  }
});
