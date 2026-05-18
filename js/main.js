/* ══════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════ */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

/* ══════════════════════════════════════
   NAV SCROLL EFFECT
══════════════════════════════════════ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ══════════════════════════════════════
   HAMBURGER MENU
══════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ══════════════════════════════════════
   TYPEWRITER EFFECT
══════════════════════════════════════ */
const phrases = [
  'full-stack apps.',
  'RESTful APIs.',
  'beautiful UIs.',
  'scalable backends.',
  'the future.'
];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIdx];
  if (isDeleting) {
    charIdx--;
    typeEl.textContent = current.slice(0, charIdx);
  } else {
    charIdx++;
    typeEl.textContent = current.slice(0, charIdx);
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIdx === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    speed = 300;
  }
  setTimeout(type, speed);
}
setTimeout(type, 1200);

/* ══════════════════════════════════════
   HERO REVEAL ANIMATIONS
══════════════════════════════════════ */
const heroRevealItems = document.querySelectorAll('.hero .reveal-up');
heroRevealItems.forEach((el, i) => {
  setTimeout(() => {
    el.classList.add('visible');
  }, 200 + i * 150);
});

/* ══════════════════════════════════════
   INTERSECTION OBSERVER (scroll reveal)
══════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section .reveal-up').forEach(el => {
  revealObserver.observe(el);
});

/* ══════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════ */
function animateCount(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target; clearInterval(timer); }
    else el.textContent = Math.floor(start);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      animateCount(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-count]').forEach(el => {
  counterObserver.observe(el);
});

/* ══════════════════════════════════════
   SMOOTH ACTIVE NAV HIGHLIGHTING
══════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--cyan)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => activeObserver.observe(s));

/* ══════════════════════════════════════
   PROJECT CARDS HOVER GLOW
══════════════════════════════════════ */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});

/* ══════════════════════════════════════
   GLASS CARD TILT ON HOVER
══════════════════════════════════════ */
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const nameEl = document.querySelector('.contact-form-card input[type="text"]');
    const emailEl = document.querySelector('.contact-form-card input[type="email"]');
    const msgEl = document.querySelector('.contact-form-card textarea');
    const formMsg = document.getElementById('form-msg');

    // Validate all fields filled
    if (!nameEl.value.trim() || !emailEl.value.trim() || !msgEl.value.trim()) {
      formMsg.textContent = 'Please fill in all fields before sending.';
      formMsg.style.color = '#ff6b6b';
      formMsg.style.display = 'block';
      setTimeout(() => { formMsg.style.display = 'none'; }, 3000);
      return;
    }

    // Build mailto and open
    const subject = encodeURIComponent(`Portfolio Contact from ${nameEl.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameEl.value.trim()}\nEmail: ${emailEl.value.trim()}\n\nMessage:\n${msgEl.value.trim()}`
    );
    window.location.href = `mailto:laibaafzaal04@gmail.com?subject=${subject}&body=${body}`;

    // Show success message and clear fields
    formMsg.textContent = 'Opening your email client...';
    formMsg.style.color = 'var(--cyan)';
    formMsg.style.display = 'block';
    nameEl.value = '';
    emailEl.value = '';
    msgEl.value = '';
    setTimeout(() => { formMsg.style.display = 'none'; }, 4000);
  });
}

console.log('%c Laiba Afzaal — Portfolio', 'color: #00d4ff; font-family: monospace; font-size: 18px; font-weight: bold;');
console.log('%c Built with clean code', 'color: #6b7280; font-family: monospace; font-size: 12px;');