/* Mansión Venus — interacciones de la portada
   (se carga después de products-data.js y main.js) */

(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- enlaces de WhatsApp ---------- */
  const generalMsg = "Hola! Estoy en la web de Mansión Venus y tengo algunas dudas antes de pedir. ¿Me ayudas?";
  ["header-wa", "hero-wa", "cta-final-wa", "foot-wa", "sticky-home-wa"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waLink(generalMsg);
  });

  /* ---------- descuento máximo real del catálogo ----------
     Es el único dato que sale del catálogo. No se publica el número
     de productos (ni total ni por categoría): decir "20 productos"
     comunica inventario corto, no selección exclusiva. */
  const maxOff = Math.max(...PRODUCTS.map(p => pct(p.orig, p.price)));

  const heroTag = document.getElementById("hero-tag");
  if (heroTag) heroTag.textContent = `Hasta -${maxOff}%`;

  const offStat = document.querySelector('.stat-num[data-stat="maxoff"]');
  if (offStat) offStat.dataset.count = String(maxOff);

  /* ---------- monogramas flotantes del hero ----------
     Se dibuja el monograma en SVG (destello + M + curva + punto) en vez
     de usar el PNG del logo: el logo trae un halo radial sobre negro que
     no se puede recortar limpio, y en vector queda nítido a cualquier
     tamaño. El degradado vive una sola vez en <defs> (#mv-gold). */
  const MONOGRAMA = `
    <svg viewBox="0 0 120 100" aria-hidden="true" focusable="false">
      <text x="60" y="17" text-anchor="middle" font-size="15" fill="url(#mv-gold)">&#x2726;</text>
      <text x="60" y="78" text-anchor="middle" font-size="70" font-weight="700"
            font-family="Cinzel, Georgia, serif" fill="url(#mv-gold)">M</text>
      <path d="M17 82 Q60 101 103 82" fill="none" stroke="url(#mv-gold)" stroke-width="3.4"
            stroke-linecap="round"/>
      <circle cx="60" cy="93" r="4" fill="url(#mv-gold)"/>
    </svg>`;

  const sparks = document.getElementById("sparks");
  if (sparks && !reduced) {
    // Distribución estratificada: una posición aleatoria pura se apelotona
    // y deja zonas vacías. Se reparte en una rejilla de columnas x filas
    // con desvío dentro de cada celda, así queda cobertura pareja.
    const cols = window.innerWidth < 760 ? 4 : 8;
    const rows = 3;
    const frag = document.createDocumentFragment();

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const s = document.createElement("span");
        s.className = "spark";
        s.innerHTML = MONOGRAMA;

        const sz = 14 + Math.random() * 20;            // 14–34 px
        s.style.width = sz.toFixed(0) + "px";
        s.style.height = (sz * 0.84).toFixed(0) + "px";

        // celda + desvío: cubre todo el ancho y alto del hero
        const cw = 100 / cols, rh = 92 / rows;
        s.style.left = (c * cw + Math.random() * cw * 0.88).toFixed(1) + "%";
        s.style.top = (6 + r * rh + Math.random() * rh * 0.85).toFixed(1) + "%";

        s.style.animationDuration = (12 + Math.random() * 12).toFixed(1) + "s";
        s.style.animationDelay = (-Math.random() * 22).toFixed(1) + "s";
        s.style.setProperty("--dx", (Math.random() * 56 - 28).toFixed(0) + "px");
        s.style.setProperty("--peak", (0.22 + Math.random() * 0.26).toFixed(2));
        frag.appendChild(s);
      }
    }
    sparks.appendChild(frag);
  }

  /* ---------- marquesina ---------- */
  const tickerItems = [
    "Empaque 100% discreto", "Envío express", "Pago contraentrega",
    "Asesoría real por WhatsApp", "Garantía por defecto de fábrica",
    "Silicona grado médico", "Compra sin registros",
  ];
  const track = document.getElementById("ticker-track");
  if (track) {
    const html = tickerItems
      .map(t => `<span class="ticker-item"><i>✦</i>${t}</span>`)
      .join("");
    track.innerHTML = html + html; // duplicado para bucle continuo
  }

  /* ---------- revelado al hacer scroll ----------
     Se oculta el contenido sólo ahora, ya con JS corriendo: si este
     script fallara, nada queda invisible. Además hay una red de
     seguridad que lo muestra todo pase lo que pase. */
  const revealables = document.querySelectorAll(".reveal");
  const showAll = () => revealables.forEach(el => el.classList.add("in"));

  if (reduced || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(el => io.observe(el));
    // red de seguridad: nada puede quedar oculto para siempre
    setTimeout(showAll, 4000);
  }

  /* ---------- contadores ---------- */
  const nums = document.querySelectorAll(".stat-num[data-count]");
  const animateCount = el => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const sup = el.querySelector("sup");
    const suffix = sup ? sup.outerHTML : "";
    if (reduced) { el.innerHTML = target + suffix; return; }
    const dur = 1400, t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const io2 = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(el => io2.observe(el));
  } else {
    nums.forEach(animateCount);
  }

  /* ---------- header: estado al hacer scroll ---------- */
  const header = document.getElementById("site-header");
  const onScroll = () => {
    if (!header) return;
    const y = window.scrollY;
    header.classList.toggle("at-top", y < 40);
    header.classList.toggle("scrolled", y >= 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- parallax del hero (puntero) ---------- */
  const stage = document.getElementById("hero-stage");
  if (stage && !reduced && window.matchMedia("(pointer:fine)").matches) {
    const cards = stage.querySelectorAll(".float-card");
    let raf = null, tx = 0, ty = 0;
    stage.closest(".hero-v2").addEventListener("mousemove", ev => {
      const r = stage.getBoundingClientRect();
      tx = (ev.clientX - (r.left + r.width / 2)) / r.width;
      ty = (ev.clientY - (r.top + r.height / 2)) / r.height;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    const apply = () => {
      cards.forEach(c => {
        const d = parseFloat(c.dataset.depth || 20);
        c.style.transform = `translate3d(${(-tx * d).toFixed(1)}px, ${(-ty * d).toFixed(1)}px, 0)`;
      });
      raf = null;
    };
  }

  /* ---------- tarjetas de categoría → activan el filtro ---------- */
  document.querySelectorAll(".cat-card[data-cat]").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.cat;
      const chip = document.querySelector(`.chip[data-target="${cat}"]`);
      if (chip) chip.click();
    });
  });
})();
