/* ============================================
   LUMIÈRE BEAUTY SPA – script.js
   ============================================ */

/* ── Sticky header ─────────────────────────── */
const header = document.getElementById('header');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 30);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

/* ── Burger / Mobile menu ──────────────────── */
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

/* ── Scroll reveal ─────────────────────────── */
const revealEls = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -50px 0px'
});

revealEls.forEach(el => observer.observe(el));

/* ── Smooth scroll ─────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 20;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});

/* ── Contact form ──────────────────────────── */
const form = document.getElementById('contact-form');
if (form) {
  const nameInput      = document.getElementById('name');
  const emailInput     = document.getElementById('email');
  const nachrichtInput = document.getElementById('nachricht');
  const submitBtn      = document.getElementById('submit-btn');
  const successMsg     = document.getElementById('form-success');

  function showError(input, errorId, msg) {
    input.classList.add('error');
    document.getElementById(errorId).textContent = msg;
  }

  function clearError(input, errorId) {
    input.classList.remove('error');
    document.getElementById(errorId).textContent = '';
  }

  [nameInput, emailInput, nachrichtInput].forEach(el => {
    el.addEventListener('input', () => {
      const errorId = el.id + '-error';
      clearError(el, errorId);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, 'name-error', 'Bitte geben Sie Ihren Namen ein.');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'email-error', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      valid = false;
    }

    if (!nachrichtInput.value.trim()) {
      showError(nachrichtInput, 'nachricht-error', 'Bitte geben Sie eine Nachricht ein.');
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet …';

    await new Promise(r => setTimeout(r, 1100));

    form.querySelectorAll('input, select, textarea').forEach(el => { el.value = ''; });
    submitBtn.style.display = 'none';
    successMsg.hidden = false;
  });
}
