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
