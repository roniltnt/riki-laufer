function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const nav    = document.getElementById('mobileNav');
  const icon   = document.getElementById('menuIcon');

  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('hidden');
    nav.classList.toggle('hidden', open);
    icon.classList.toggle('fa-bars',  open);
    icon.classList.toggle('fa-times', !open);
    toggle.setAttribute('aria-expanded', String(!open));
  });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.add('hidden');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initGallery() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.gallery-slide'));
  const dots   = Array.from(document.querySelectorAll('.gallery-dot'));
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  let current = 0;

  // Slides are moved via transform (not native scroll), which is a plain
  // physical translation unaffected by the page's dir="rtl" — that keeps
  // navigation deterministic regardless of writing direction.
  const render = () => {
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  };

  const goTo = (index) => {
    current = Math.max(0, Math.min(slides.length - 1, index));
    render();
  };

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => goTo(Number(dot.dataset.index))));

  let touchStartX = null;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) goTo(delta < 0 ? current + 1 : current - 1);
    touchStartX = null;
  });

  render();
}

fetch('content/site.json')
  .then(res => res.json())
  .then(data => {
    const order = ['header', 'hero', 'about', 'services', 'process', 'testimonials', 'gallery', 'cta', 'footer'];
    document.getElementById('app').innerHTML = order
      .map(name => window.Sections[name](data))
      .join('');
    initMobileNav();
    initGallery();
  });
