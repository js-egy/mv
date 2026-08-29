/* Mansión Venus — lógica del sitio (age gate, catálogo, ficha de producto) */

function fmtCOP(n){ return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
function pct(orig, price){ return Math.round((1 - price / orig) * 100); }
function waLink(text){ return "https://wa.me/" + WA_NUM + "?text=" + encodeURIComponent(text); }
function waLinkProduct(p){
  return waLink(`Hola! Me interesa: *${p.name}* a *${fmtCOP(p.price)}* COP. ¿Está disponible?`);
}
function imgPath(p, i){ return `${IMG_BASE || ""}assets/img/productos/${p.slug}/${i}.webp`; }
function productUrl(p){ return `${PROD_BASE || ""}producto.html?p=${p.slug}`; }

/* ---------------- AGE GATE ---------------- */
(function initGate(){
  const gate = document.getElementById("age-gate");
  if(!gate) return;
  if(localStorage.getItem("mv_age_ok") === "1"){ gate.hidden = true; return; }
  document.body.style.overflow = "hidden";
  const enter = document.getElementById("gate-enter");
  const exit = document.getElementById("gate-exit");
  enter && enter.addEventListener("click", () => {
    localStorage.setItem("mv_age_ok", "1");
    gate.hidden = true;
    document.body.style.overflow = "";
  });
  exit && exit.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
})();

/* ---------------- CARD BUILDER ---------------- */
function cardHTML(p){
  const off = pct(p.orig, p.price);
  const cat = CATEGORIES[p.cat];
  return `
  <div class="card" data-cat="${p.cat}">
    <a href="${productUrl(p)}" class="card-media">
      <span class="badge-cat">${cat.label}</span>
      <span class="badge-off">-${off}%</span>
      <img src="${imgPath(p,1)}" alt="${p.name}" loading="lazy">
    </a>
    <div class="card-body">
      <p class="card-feat">${p.badge}</p>
      <a href="${productUrl(p)}"><h3>${p.name}</h3></a>
      <div class="card-prices">
        <span class="orig">${fmtCOP(p.orig)}</span>
        <span class="sale">${fmtCOP(p.price)}</span>
      </div>
      <div class="card-cta">
        <a class="btn btn-wine btn-block" href="${waLinkProduct(p)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.5 7.6 9.3 7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4 3 1.2 3 .8 3.5.8.5 0 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.4 13.5 3.4 12c0-4.7 3.9-8.6 8.6-8.6s8.6 3.9 8.6 8.6-3.9 8.6-8.6 8.6z"/></svg>
          Pedir por WhatsApp
        </a>
        <a class="link-more" href="${productUrl(p)}">Ver detalles &rarr;</a>
      </div>
    </div>
  </div>`;
}

function dividerHTML(cat){
  const c = CATEGORIES[cat];
  return `
  <div class="cat-divider" id="cat-${cat}">
    <img class="div-logo" src="${IMG_BASE || ""}assets/img/logo.png" alt="">
    <div class="div-line">&#x2015;&#x2015;&#x2015; &#x2726; &#x2015;&#x2015;&#x2015;</div>
    <h2>${c.label.toUpperCase()}</h2>
    <p class="div-sub">${c.sub}</p>
    <div class="div-msg">
      <p class="msg1">${c.msg[0]}</p>
      <p class="msg2">${c.msg[1]}</p>
    </div>
  </div>`;
}

/* ---------------- RENDER HOME GRID ---------------- */
(function renderGrid(){
  const root = document.getElementById("catalog-root");
  if(!root) return;
  const order = ["ellas","ellos","parejas"];
  let html = "";
  order.forEach(cat => {
    const items = PRODUCTS.filter(p => p.cat === cat);
    if(!items.length) return;
    html += dividerHTML(cat);
    html += `<div class="product-grid" data-catgroup="${cat}">` + items.map(cardHTML).join("") + `</div>`;
  });
  root.innerHTML = html;

  const chips = document.querySelectorAll(".chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const target = chip.dataset.target;
      if(target === "all"){
        document.querySelectorAll(".cat-divider, .product-grid").forEach(el => el.style.display = "");
      } else {
        document.querySelectorAll(".cat-divider, .product-grid").forEach(el => el.style.display = "none");
        const div = document.getElementById("cat-" + target);
        const grid = document.querySelector(`.product-grid[data-catgroup="${target}"]`);
        if(div) div.style.display = "";
        if(grid) grid.style.display = "";
      }
    });
  });
})();

/* ---------------- RENDER PRODUCT PAGE ---------------- */
(function renderProduct(){
  const root = document.getElementById("product-detail-root");
  if(!root) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("p");
  const p = PRODUCTS.find(x => x.slug === slug) || PRODUCTS[0];
  const cat = CATEGORIES[p.cat];
  const off = pct(p.orig, p.price);

  document.title = `${p.name} · Mansión Venus`;

  const thumbs = Array.from({length: p.images}, (_,i) => i+1)
    .map((i) => `<img src="${imgPath(p,i)}" data-i="${i}" class="${i===1?"active":""}" alt="${p.name} foto ${i}">`)
    .join("");

  const benefits = p.benefits.map(b => `
    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>${b}</li>`).join("");

  const specs = Object.entries(p.specs).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");

  root.innerHTML = `
    <nav class="breadcrumb">
      <a href="../index.html">Inicio</a><span class="sep">/</span>
      <a href="../index.html#cat-${p.cat}">${cat.label}</a><span class="sep">/</span>
      <span>${p.name}</span>
    </nav>
    <div class="product-detail">
      <div class="gallery">
        <div class="gallery-main">
          <span class="badge-off">-${off}%</span>
          ${p.images > 1 ? `
          <button class="gallery-nav prev" id="gallery-prev" aria-label="Foto anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="gallery-nav next" id="gallery-next" aria-label="Foto siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <span class="gallery-count" id="gallery-count">1 / ${p.images}</span>` : ""}
          <img id="gallery-img" src="${imgPath(p,1)}" alt="${p.name}">
        </div>
        <div class="gallery-thumbs">${thumbs}</div>
      </div>
      <div class="pd-info">
        <span class="pd-cat">${cat.label}</span>
        <span class="pd-badge">${p.badge}</span>
        <h1 class="pd-title">${p.name}</h1>
        <p class="pd-tagline">${p.hook}</p>
        <div class="pd-prices">
          <span class="orig">${fmtCOP(p.orig)}</span>
          <span class="sale">${fmtCOP(p.price)}</span>
          <span class="pd-off">-${off}% OFF</span>
        </div>
        <div class="pd-ctawrap">
          <a class="btn btn-wine btn-block" href="${waLinkProduct(p)}" target="_blank" rel="noopener" id="pd-wa-btn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.5 7.6 9.3 7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4 3 1.2 3 .8 3.5.8.5 0 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.4 13.5 3.4 12c0-4.7 3.9-8.6 8.6-8.6s8.6 3.9 8.6 8.6-3.9 8.6-8.6 8.6z"/></svg>
            Pedir por WhatsApp ahora
          </a>
          <p class="pd-note">Respuesta inmediata &middot; Empaque 100% discreto &middot; Envío express</p>
        </div>
        <ul class="pd-benefits">${benefits}</ul>
        <p class="pd-story">${p.story}</p>
        <h3 style="margin-top:30px;font-size:15px;color:var(--wine)">Ficha técnica</h3>
        <table class="specs-table"><tbody>${specs}</tbody></table>
      </div>
    </div>
  `;

  let current = 1;
  function goTo(i){
    current = ((i - 1 + p.images) % p.images) + 1;
    document.getElementById("gallery-img").src = imgPath(p, current);
    root.querySelectorAll(".gallery-thumbs img").forEach(x => x.classList.toggle("active", Number(x.dataset.i) === current));
    const countEl = document.getElementById("gallery-count");
    if(countEl) countEl.textContent = `${current} / ${p.images}`;
    const activeThumb = root.querySelector(`.gallery-thumbs img[data-i="${current}"]`);
    if(activeThumb) activeThumb.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }

  root.querySelectorAll(".gallery-thumbs img").forEach(t => {
    t.addEventListener("click", () => goTo(Number(t.dataset.i)));
  });
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");
  if(prevBtn) prevBtn.addEventListener("click", () => goTo(current - 1));
  if(nextBtn) nextBtn.addEventListener("click", () => goTo(current + 1));
  if(p.images > 1){
    document.addEventListener("keydown", (e) => {
      if(e.key === "ArrowLeft") goTo(current - 1);
      if(e.key === "ArrowRight") goTo(current + 1);
    });
  }

  const stickyBtn = document.getElementById("sticky-wa-link");
  if(stickyBtn) stickyBtn.href = waLinkProduct(p);
  const stickyLabel = document.getElementById("sticky-wa-label");
  if(stickyLabel) stickyLabel.textContent = `Pedir ${p.name} · ${fmtCOP(p.price)}`;

  /* Relacionados: misma categoría */
  const relRoot = document.getElementById("related-root");
  if(relRoot){
    const rel = PRODUCTS.filter(x => x.cat === p.cat && x.slug !== p.slug).slice(0,4);
    relRoot.innerHTML = rel.map(cardHTML).join("");
  }
})();

/* ---------------- FAQ ACCORDION ---------------- */
document.addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q");
  if(!q) return;
  const item = q.closest(".faq-item");
  const a = item.querySelector(".faq-a");
  const open = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach(o => {
    o.classList.remove("open");
    o.querySelector(".faq-a").style.maxHeight = null;
  });
  if(!open){
    item.classList.add("open");
    a.style.maxHeight = a.scrollHeight + "px";
  }
});
