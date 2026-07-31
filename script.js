const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 12), { passive: true });
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Static fallback form: replace this handler after connecting Formspree or another provider.
document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thanks — this form is ready to be connected to a form service before launch.');
});
