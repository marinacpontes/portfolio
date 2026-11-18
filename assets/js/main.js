(() => {
  const doc = document.documentElement;
  doc.classList.add('js');

  // Cabeçalho com borda ao rolar
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Revelação suave ao entrar na tela
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }

  // Filtro de projetos
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card[data-group]');
  filters.forEach((btn) =>
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      filters.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      cards.forEach((c) => {
        const show = f === 'all' || c.dataset.group === f;
        c.hidden = !show;
        c.classList.toggle('card--feature', show && f === 'all' && c.dataset.feature === '1');
        if (show) c.classList.add('is-in');
      });
    })
  );
  cards.forEach((c) => {
    if (c.classList.contains('card--feature')) c.dataset.feature = '1';
  });

  // Lightbox da galeria
  const lb = document.getElementById('lightbox');
  const links = Array.from(document.querySelectorAll('[data-lightbox]'));
  if (!lb || !links.length || typeof lb.showModal !== 'function') return;
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('figcaption');
  let idx = 0;
  let opener = null;
  const show = (i) => {
    idx = (i + links.length) % links.length;
    const a = links[idx];
    lbImg.src = a.getAttribute('href');
    lbImg.alt = a.dataset.caption || '';
    lbCap.textContent = `${a.dataset.caption || ''} · ${idx + 1}/${links.length}`;
  };
  links.forEach((a, i) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      opener = a;
      show(i);
      lb.showModal();
    })
  );
  lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
  lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.tagName === 'FIGURE') lb.close();
  });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  lb.addEventListener('close', () => opener && opener.focus());
})();
