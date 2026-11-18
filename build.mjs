// Gera index.html e projetos/<slug>.html a partir de src/projects.mjs.
// Uso: node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { profile, types, projects, groups } from './src/projects.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));

// Dimensões reais das imagens, para width/height (evita layout shift)
const dims = {};
for (const p of projects) {
  const dir = path.join(ROOT, 'assets/img', p.img);
  for (const f of fs.readdirSync(dir)) {
    const buf = fs.readFileSync(path.join(dir, f));
    dims[`${p.img}/${f}`] = webpSize(buf);
  }
}
function webpSize(b) {
  const chunk = b.toString('ascii', 12, 16);
  if (chunk === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
  if (chunk === 'VP8L') {
    const bits = b.readUInt32LE(21);
    return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === 'VP8X') return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  return { w: 0, h: 0 };
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const icon = {
  arrow: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ext: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5h8v8M15 5 5.5 14.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10H5m4.5-4.5L5 10l4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.43 9.42M20.07 3.98A11.27 11.27 0 0 0 12.05.66C5.8.66.71 5.75.71 12c0 2 .52 3.95 1.52 5.67L.62 23.5l5.96-1.56a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg>',
  check: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10.5 3 3 7-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  zoom: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M8.5 3.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm3.6 8.6L16.5 16.5M8.5 6.5v4m-2-2h4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
};

function img(p, name, alt, { eager = false, sizes = '' } = {}) {
  const src = `${p.img}/${name}.webp`;
  const d = dims[src];
  if (!d) throw new Error(`Imagem não encontrada: ${src}`);
  return `<img src="{{base}}assets/img/${src}" width="${d.w}" height="${d.h}" alt="${esc(alt)}" ${
    eager ? 'fetchpriority="high"' : 'loading="lazy"'
  } decoding="async"${sizes ? ` sizes="${sizes}"` : ''}>`;
}

const browser = (p, name, alt, opts) => `
  <div class="mock-browser">
    <div class="mock-bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(p.title)}</span></div>
    <div class="mock-screen">${img(p, name, alt, opts)}</div>
  </div>`;

const phone = (p, name, alt, opts) => `
  <div class="mock-phone"><div class="mock-phone-screen">${img(p, name, alt, opts)}</div></div>`;

function cover(p, { eager = false } = {}) {
  const style = `--tint:${p.tint};--tint-deep:${p.tintDeep}`;
  const c = p.cover;
  if (c.layout === 'phones') {
    return `<div class="cover cover--phones" style="${style}">
      ${c.phones.map((n, i) => `<div class="cover-phone cover-phone--${i}">${phone(p, n, `${p.title}: tela ${n}`, { eager: eager && i === 1 })}</div>`).join('')}
    </div>`;
  }
  return `<div class="cover cover--browser" style="${style}">
    <div class="cover-browser">${browser(p, c.browser, `${p.title}: interface no desktop`, { eager })}</div>
    <div class="cover-phone-solo">${phone(p, c.phone, `${p.title}: interface no celular`, { eager })}</div>
  </div>`;
}

const badge = (p) => {
  const t = types[p.type];
  return `<span class="badge badge--${t.tone}" title="${esc(t.desc)}">${esc(t.label)}</span>`;
};
const status = (p) =>
  `<span class="status ${p.status.live ? 'status--live' : ''}"><i aria-hidden="true"></i>${esc(p.status.label)}</span>`;

const btnRepo = (p, cls = 'btn btn--ghost') =>
  `<a class="${cls}" href="${p.repo}" target="_blank" rel="noopener">${icon.github}<span>GitHub</span></a>`;
const btnDemo = (p, cls = 'btn btn--ghost') =>
  p.demo ? `<a class="${cls}" href="${p.demo}" target="_blank" rel="noopener"><span>Demo online</span>${icon.ext}</a>` : '';

function layout({ title, description, base, body, page }) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#F5F3EE">
<link rel="icon" href="${base}assets/favicon-32.png?v=2" type="image/png" sizes="32x32">
<link rel="icon" href="${base}assets/favicon-192.png?v=2" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="${base}assets/apple-touch-icon.png?v=2">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}assets/css/style.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body class="page-${page}">
<a class="skip" href="#conteudo">Pular para o conteúdo</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${base}index.html" aria-label="${esc(profile.short)}: início"><img class="brand-mark" src="${base}assets/avatar.webp?v=2" width="32" height="32" alt=""><span class="brand-name">${esc(profile.short)}</span></a>
    <nav class="nav" aria-label="Principal">
      <a href="${base}index.html#projetos">Projetos</a>
      <a href="${base}index.html#capacidades">Capacidades</a>
      <a href="${base}index.html#contato">Contato</a>
    </nav>
    <a class="btn btn--small btn--whatsapp" href="${profile.contacts.find((c) => c.key === 'whatsapp').href}" target="_blank" rel="noopener">${icon.whatsapp}<span>WhatsApp</span></a>
  </div>
</header>
<main id="conteudo">
${body.replaceAll('{{base}}', base)}
</main>
<footer class="site-footer">
  <div class="wrap footer-inner">
    <span>© ${new Date().getFullYear()} ${esc(profile.name)}</span>
    <span class="footer-links">${profile.contacts.map((c) => `<a href="${c.href}"${c.key === 'mail' ? '' : ' target="_blank" rel="noopener"'}>${esc(c.label)}</a>`).join('')}</span>
  </div>
</footer>
<dialog class="lightbox" id="lightbox" aria-label="Visualizar imagem">
  <figure><img alt=""><figcaption></figcaption></figure>
  <button class="lb-btn lb-close" type="button" aria-label="Fechar">×</button>
  <button class="lb-btn lb-prev" type="button" aria-label="Imagem anterior">‹</button>
  <button class="lb-btn lb-next" type="button" aria-label="Próxima imagem">›</button>
</dialog>
<script src="${base}assets/js/main.js" defer></script>
</body>
</html>
`;
}

// ---------- Index ----------
function projectCard(p, i, featured) {
  const n = String(i + 1).padStart(2, '0');
  const href = `projetos/${p.slug}.html`;
  return `
<article class="card${featured ? ' card--feature' : ''} reveal" data-group="${p.group}">
  <a class="card-cover" href="${href}" tabindex="-1" aria-hidden="true">${cover(p, { eager: i === 0 })}</a>
  <div class="card-body">
    <div class="card-meta"><span class="idx">${n}</span><span>${esc(p.category)}</span></div>
    <h3 class="card-title"><a href="${href}">${esc(p.title)}</a></h3>
    <div class="badges">${badge(p)}${status(p)}</div>
    <p class="card-summary">${esc(p.summary)}</p>
    <ul class="checks">${p.cardFeatures.map((f) => `<li>${icon.check}<span>${esc(f)}</span></li>`).join('')}</ul>
    <ul class="chips" aria-label="Tecnologias">${p.tech.slice(0, featured ? 8 : 6).map((t) => `<li>${esc(t)}</li>`).join('')}${
      p.tech.length > (featured ? 8 : 6) ? `<li class="chip-more">+${p.tech.length - (featured ? 8 : 6)}</li>` : ''
    }</ul>
    <div class="actions">
      <a class="btn btn--primary" href="${href}"><span>Ver projeto</span>${icon.arrow}</a>
      ${btnRepo(p)}
      ${btnDemo(p)}
    </div>
  </div>
</article>`;
}

const capabilities = [
  { k: 'sites', t: 'Sites e landing pages', d: 'Interfaces com direção visual forte, animações e responsividade, do hero ao rodapé.', ps: ['banco-inter'] },
  { k: 'sistemas', t: 'Sistemas web full stack', d: 'APIs com regras de negócio, autenticação, banco de dados relacional e painéis administrativos.', ps: ['gestao-loteamento', 'lanchonete'] },
  { k: 'mobile', t: 'Apps e experiências mobile', d: 'App Android nativo com API própria e protótipos mobile-first com mapas e rotas reais.', ps: ['perto-de-mim', 'uber-clone'] },
  { k: 'ia', t: 'Inteligência artificial', d: 'Sistemas multiagente com Gemini, saída estruturada e microsserviços na nuvem.', ps: ['ai-course-creator'] },
];

const stack = [
  ['Front-end', ['React', 'TypeScript', 'JavaScript', 'HTML e CSS', 'Tailwind CSS', 'Vite', 'Leaflet']],
  ['Back-end e dados', ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Zod', 'FastAPI']],
  ['Mobile', ['Java', 'Android SDK', 'Material Design 3', 'Retrofit', 'Google Maps SDK']],
  ['IA, nuvem e deploy', ['Python', 'Google ADK', 'Gemini', 'Cloud Run', 'Docker', 'Railway', 'Vercel']],
];

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

function indexPage() {
  const inter = bySlug['banco-inter'];
  const imob = bySlug['gestao-loteamento'];
  const uber = bySlug['uber-clone'];
  const perto = bySlug['perto-de-mim'];
  const body = `
<section class="hero wrap">
  <p class="eyebrow reveal">Desenvolvedora · Web, sistemas e mobile</p>
  <h1 class="hero-title reveal">Do site institucional<br>ao <em>sistema completo.</em></h1>
  <div class="hero-row reveal">
    <p class="hero-lead">Sou ${esc(profile.name)}. Desenvolvo landing pages, sistemas web com banco de dados, aplicativos Android e soluções com inteligência artificial. Aqui estão seis projetos reais, com o código aberto no GitHub.</p>
    <div class="hero-actions">
      <a class="btn btn--primary btn--lg" href="#projetos"><span>Ver projetos</span>${icon.arrow}</a>
      <a class="btn btn--ghost btn--lg" href="${profile.github}" target="_blank" rel="noopener">${icon.github}<span>GitHub</span></a>
    </div>
  </div>
</section>

<section class="showcase wrap reveal" aria-label="Amostra dos projetos">
  <div class="showcase-stage">
    <a class="sc sc-a" href="projetos/${inter.slug}.html" aria-label="${esc(inter.title)}">${browser(inter, 'hero', 'Banco Inter Redesign: hero', { eager: true })}</a>
    <a class="sc sc-b" href="projetos/${imob.slug}.html" aria-label="${esc(imob.title)}">${browser(imob, 'dashboard', 'Sistema de Gestão de Loteamento: dashboard', { eager: true })}</a>
    <a class="sc sc-c" href="projetos/${uber.slug}.html" aria-label="${esc(uber.title)}">${phone(uber, 'opcoes', 'Uber Clone: escolha da viagem', { eager: true })}</a>
    <a class="sc sc-d" href="projetos/${perto.slug}.html" aria-label="${esc(perto.title)}">${phone(perto, 'vitrine', 'Perto de Mim: vitrine de serviços', { eager: true })}</a>
  </div>
  <ul class="showcase-facts">
    <li><strong>6</strong><span>projetos com código aberto</span></li>
    <li><strong>4</strong><span>frentes: web, sistemas, mobile e IA</span></li>
    <li><strong>100%</strong><span>imagens de interfaces reais</span></li>
  </ul>
</section>

<section class="section wrap" id="capacidades">
  <div class="section-head reveal">
    <p class="eyebrow">Capacidades</p>
    <h2 class="section-title">O que eu desenvolvo</h2>
  </div>
  <div class="caps">
    ${capabilities
      .map(
        (c, i) => `
    <div class="cap reveal">
      <span class="cap-n">0${i + 1}</span>
      <h3>${esc(c.t)}</h3>
      <p>${esc(c.d)}</p>
      <ul>${c.ps.map((s) => `<li><a href="projetos/${s}.html">${esc(bySlug[s].title)}${icon.arrow}</a></li>`).join('')}</ul>
    </div>`
      )
      .join('')}
  </div>
</section>

<section class="section wrap" id="projetos">
  <div class="section-head section-head--row reveal">
    <div>
      <p class="eyebrow">Projetos</p>
      <h2 class="section-title">Trabalhos selecionados</h2>
    </div>
    <div class="filters" role="toolbar" aria-label="Filtrar projetos">
      <button type="button" class="filter is-active" data-filter="all" aria-pressed="true">Todos</button>
      ${Object.entries(groups).map(([k, v]) => `<button type="button" class="filter" data-filter="${k}" aria-pressed="false">${esc(v)}</button>`).join('')}
    </div>
  </div>
  <div class="cards">
    ${projects.map((p, i) => projectCard(p, i, false)).join('')}
  </div>
</section>

<section class="section wrap" id="selos">
  <div class="legend reveal">
    <div>
      <p class="eyebrow">Transparência</p>
      <h2 class="section-title section-title--sm">Como ler os selos</h2>
      <p class="muted">Cada projeto indica sua natureza e se há demonstração disponível. Nenhum deles foi apresentado como trabalho para cliente.</p>
    </div>
    <dl class="legend-list">
      ${Object.values(types)
        .map((t) => `<div><dt><span class="badge badge--${t.tone}">${esc(t.label)}</span></dt><dd>${esc(t.desc)}</dd></div>`)
        .join('')}
    </dl>
  </div>
</section>

<section class="section wrap" id="stack">
  <div class="section-head reveal">
    <p class="eyebrow">Stack</p>
    <h2 class="section-title">Tecnologias usadas nestes projetos</h2>
  </div>
  <div class="stack">
    ${stack.map(([g, items]) => `<div class="stack-col reveal"><h3>${esc(g)}</h3><ul class="chips chips--lg">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>`).join('')}
  </div>
</section>

<section class="contact" id="contato">
  <div class="wrap contact-inner reveal">
    <p class="eyebrow eyebrow--light">Contato</p>
    <h2 class="contact-title">Vamos construir algo juntos?</h2>
    <p class="contact-lead">Conte sua ideia pelo WhatsApp ou por e-mail. Você também pode acompanhar meu trabalho no Instagram e no TikTok.</p>
    <ul class="contact-grid">
      ${profile.contacts
        .map(
          (c) => `<li><a class="contact-card contact-card--${c.key}" href="${c.href}"${c.key === 'mail' ? '' : ' target="_blank" rel="noopener"'}>
        <span class="contact-icon">${icon[c.key]}</span>
        <span class="contact-text"><span class="contact-label">${esc(c.label)}</span><span class="contact-value">${esc(c.value).replace(/(.)@/, '$1<wbr>@')}</span></span>
        <span class="contact-arrow">${icon.ext}</span>
      </a></li>`
        )
        .join('')}
    </ul>
  </div>
</section>`;
  return layout({
    title: `${profile.name} · Portfólio`,
    description: 'Portfólio de Marina Carneiro Pontes: landing pages, sistemas web full stack, apps mobile e soluções com IA.',
    base: '',
    body,
    page: 'home',
  });
}

// ---------- Detail ----------
function detailPage(p, i) {
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const t = types[p.type];
  const g = p.gallery;
  const body = `
<section class="d-hero wrap">
  <a class="crumb" href="{{base}}index.html#projetos">${icon.back}<span>Todos os projetos</span></a>
  <div class="d-hero-grid">
    <div>
      <p class="eyebrow">${esc(p.category)}</p>
      <h1 class="d-title">${esc(p.title)}</h1>
      <p class="d-lead">${esc(p.summary)}</p>
      <div class="actions">
        ${btnRepo(p, 'btn btn--primary btn--lg')}
        ${p.demo ? btnDemo(p, 'btn btn--ghost btn--lg') : `<span class="no-demo">Sem demonstração pública</span>`}
      </div>
    </div>
    <dl class="d-meta">
      <div><dt>Tipo</dt><dd>${badge(p)}<small>${esc(t.desc)}</small></dd></div>
      <div><dt>Status</dt><dd>${status(p)}</dd></div>
      <div><dt>Categoria</dt><dd>${esc(p.category)}</dd></div>
      <div><dt>Ano</dt><dd>${esc(p.year)}</dd></div>
    </dl>
  </div>
</section>

<section class="d-cover wrap">${cover(p, { eager: true })}</section>

<section class="d-section wrap">
  <h2 class="d-h2">Objetivo e proposta</h2>
  <div class="d-prose">${p.goal.map((x) => `<p>${esc(x)}</p>`).join('')}</div>
</section>

<section class="d-section wrap">
  <h2 class="d-h2">Funcionalidades</h2>
  <ol class="features">
    ${p.features.map((f, k) => `<li class="feature reveal"><span class="feature-n">${String(k + 1).padStart(2, '0')}</span><h3>${esc(f.t)}</h3><p>${esc(f.d)}</p></li>`).join('')}
  </ol>
</section>

${p.example ? `
<section class="d-section wrap">
  <h2 class="d-h2">Exemplo de saída</h2>
  <div class="example reveal">
    <p class="example-prompt"><span>Pedido</span>“${esc(p.example.prompt)}”</p>
    <p class="example-title">${esc(p.example.title)}</p>
    <ul>${p.example.modules.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
  </div>
</section>` : ''}

<section class="d-section wrap">
  <h2 class="d-h2">Destaques técnicos</h2>
  <div class="d-split">
    <ul class="checks checks--lg">${p.highlights.map((h) => `<li>${icon.check}<span>${esc(h)}</span></li>`).join('')}</ul>
    <div class="tech-box">
      <h3>Tecnologias</h3>
      <ul class="chips chips--lg">${p.tech.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="d-section d-gallery wrap" id="galeria">
  <h2 class="d-h2">Galeria</h2>
  ${g.desktop.length ? `
  <div class="gallery-desktop${g.desktop.length === 1 ? ' gallery-desktop--single' : ''}">
    ${g.desktop
      .map(
        ([n, cap]) => `<figure class="shot reveal">
      <a href="{{base}}assets/img/${p.img}/${n}.webp" data-lightbox="g" data-caption="${esc(cap)}" aria-label="Ampliar: ${esc(cap)}">${browser(p, n, cap)}<span class="zoom">${icon.zoom}</span></a>
      <figcaption>${esc(cap)}</figcaption></figure>`
      )
      .join('')}
  </div>` : ''}
  ${g.mobile.length ? `
  <div class="gallery-mobile">
    ${g.mobile
      .map(
        ([n, cap]) => `<figure class="shot shot--phone reveal">
      <a href="{{base}}assets/img/${p.img}/${n}.webp" data-lightbox="g" data-caption="${esc(cap)}" aria-label="Ampliar: ${esc(cap)}">${phone(p, n, cap)}</a>
      <figcaption>${esc(cap)}</figcaption></figure>`
      )
      .join('')}
  </div>` : ''}
</section>

<section class="d-section wrap">
  <aside class="note reveal">
    <h2>Sobre este projeto e estas imagens</h2>
    ${p.transparency.map((x) => `<p>${esc(x)}</p>`).join('')}
  </aside>
</section>

<nav class="pager wrap" aria-label="Outros projetos">
  <a class="pager-link" href="${prev.slug}.html"><span class="pager-dir">${icon.back} Anterior</span><strong>${esc(prev.title)}</strong></a>
  <a class="pager-link pager-link--next" href="${next.slug}.html"><span class="pager-dir">Próximo ${icon.arrow}</span><strong>${esc(next.title)}</strong></a>
</nav>`;
  return layout({
    title: `${p.title} · ${profile.short}`,
    description: p.summary,
    base: '../',
    body,
    page: 'detail',
  });
}

fs.writeFileSync(path.join(ROOT, 'index.html'), indexPage());
fs.mkdirSync(path.join(ROOT, 'projetos'), { recursive: true });
projects.forEach((p, i) => fs.writeFileSync(path.join(ROOT, 'projetos', `${p.slug}.html`), detailPage(p, i)));
console.log(`Gerado: index.html + ${projects.length} páginas em projetos/`);
