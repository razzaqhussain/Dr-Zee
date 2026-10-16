const root = '/';
document.documentElement.classList.add('js');

const page = document.body.dataset.page || 'home';
const current = (key) => page === key ? ' aria-current="page"' : '';

const header = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="utility"><div class="container utility__inner"><span>Private, assessment-led hair restoration</span><span><strong>Consultations by request</strong> &nbsp;•&nbsp; Details confirmed on enquiry</span></div></div>
  <div class="header-sentinel" aria-hidden="true"></div>
  <header class="site-header" id="site-header">
    <div class="container nav">
      <a class="brand" href="/" aria-label="Dr. Zee home"><img src="/assets/brand/dr-zee-logo-transparent.png" alt="Dr. Zee Hair Restoration Specialist"></a>
      <nav class="nav__links" aria-label="Primary navigation">
        <a href="/"${current('home')}>Home</a>
        <a href="/about/"${current('about')}>About</a>
        <a href="/treatments/"${page.startsWith('treatment') ? ' aria-current="page"' : ''}>Treatments</a>
        <a href="/faqs/"${current('faqs')}>FAQs</a>
        <a href="/blogs/"${current('blog')}>Blogs</a>
        <a href="/contact/"${current('contact')}>Contact</a>
        <a class="btn btn--primary" href="/book-consultation/">Book consultation <span class="btn__arrow">↗</span></a>
      </nav>
      <button class="nav-toggle" type="button" aria-controls="mobile-nav" aria-expanded="false" aria-label="Open menu"><span></span></button>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
    <a href="/">Home</a><a href="/about/">About Dr. Zee</a><a href="/treatments/">Treatments</a><a href="/faqs/">FAQs</a><a href="/blogs/">Blogs</a><a href="/contact/">Contact</a>
    <a class="btn btn--primary" href="/book-consultation/">Request a consultation</a>
  </nav>`;

const footer = `
  <footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div><div class="footer-brand"><img src="/assets/brand/dr-zee-logo-white.png" alt="Dr. Zee Hair Restoration Specialist"></div><p>A thoughtful, assessment-led approach to hair restoration for adults exploring their options.</p></div>
      <div><h3>Treatments</h3><ul><li><a href="/treatments/fue-hair-transplant/">FUE hair transplant</a></li><li><a href="/treatments/afro-caribbean-hair-transplant/">Afro-textured hair</a></li><li><a href="/treatments/beard-eyebrow-restoration/">Beard & eyebrow</a></li><li><a href="/treatments/female-hair-loss/">Female hair loss</a></li></ul></div>
      <div><h3>Explore</h3><ul><li><a href="/about/">About Dr. Zee</a></li><li><a href="/faqs/">FAQs</a></li><li><a href="/blogs/">Blogs</a></li><li><a href="/book-consultation/">Consultation</a></li></ul></div>
      <div><h3>Information</h3><ul><li><a href="/privacy-policy/">Privacy notice</a></li><li><a href="/cookie-policy/">Cookie policy</a></li><li><a href="/terms/">Site terms</a></li><li><a href="/medical-disclaimer/">Medical disclaimer</a></li></ul></div>
    </div>
    <div class="footer-bottom"><span>© <span id="year"></span> Dr. Zee. All rights reserved.</span><span>General information only. Suitability and outcomes vary; clinical assessment is required.</span></div>
  </div></footer>`;

document.querySelector('[data-site-header]')?.insertAdjacentHTML('afterbegin', header);
document.querySelector('[data-site-footer]')?.insertAdjacentHTML('afterbegin', footer);
document.getElementById('year')?.append(String(new Date().getFullYear()));

const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const closeMenu = () => { mobileNav?.classList.remove('open'); document.body.classList.remove('menu-open'); navToggle?.setAttribute('aria-expanded','false'); };
navToggle?.addEventListener('click', () => {
  const open = !mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); navToggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
const headerSentinel = document.querySelector('.header-sentinel');
if (headerSentinel && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => document.getElementById('site-header')?.classList.toggle('is-scrolled', !entry.isIntersecting), {threshold:0}).observe(headerSentinel);
}

const activateTab = (button) => {
  document.querySelectorAll('.tab-button').forEach(b => b.setAttribute('aria-selected','false'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  button.setAttribute('aria-selected','true');
  document.getElementById(button.getAttribute('aria-controls'))?.classList.add('active');
};
document.querySelectorAll('.tab-button').forEach((button, index, buttons) => {
  button.addEventListener('click', () => activateTab(button));
  button.addEventListener('keydown', event => {
    const next = event.key === 'ArrowRight' ? (index + 1) % buttons.length : event.key === 'ArrowLeft' ? (index - 1 + buttons.length) % buttons.length : event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : -1;
    if (next >= 0) { event.preventDefault(); buttons[next].focus(); activateTab(buttons[next]); }
  });
});

document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('.faq-item');
  const open = item.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
}));

const storyCards = [...document.querySelectorAll('[data-story]')];
let activeStory = 0;
const showStory = (nextIndex) => {
  if (!storyCards.length) return;
  activeStory = Math.max(0, Math.min(storyCards.length - 1, nextIndex));
  storyCards.forEach((card, index) => { card.hidden = index !== activeStory; card.classList.toggle('is-active', index === activeStory); });
  const previous = document.querySelector('[data-story-prev]');
  const next = document.querySelector('[data-story-next]');
  if (previous) previous.disabled = activeStory === 0;
  if (next) next.disabled = activeStory === storyCards.length - 1;
};
document.querySelector('[data-story-prev]')?.addEventListener('click', () => showStory(activeStory - 1));
document.querySelector('[data-story-next]')?.addEventListener('click', () => showStory(activeStory + 1));

document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const status = form.querySelector('.form-status');
  status.textContent = 'Your enquiry was not sent. Secure clinic delivery has not been connected yet. Please contact the clinic directly until this form is configured.';
  status.classList.add('show'); status.focus();
}));

const loadScript = (src) => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = resolve;
  script.onerror = () => reject(new Error(`Could not load ${src}`));
  document.head.append(script);
});

const initMotion = async () => {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  try {
    await loadScript('/assets/vendor/gsap/gsap.min.js');
    await loadScript('/assets/vendor/gsap/ScrollTrigger.min.js');
    gsap.registerPlugin(ScrollTrigger);

    const revealTargets = '.feature, .journey-step, .who-card, .service-card, .article-card, .route-card, .faq-item, .home-faq__item, .prose > h2, .prose > h3, .prose > p, .prose > ul, .page-feature-image, .cta-band__inner, .consultation__intro, .consultation__form';
    const revealItems = [...document.querySelectorAll(revealTargets)].filter(el => !el.closest('[hidden]'));
    const textItems = [...document.querySelectorAll('.section-heading h2, .stories__heading h2, .home-faq h2, .doctor-panel h2, .page-hero h1')];
    revealItems.forEach(el => el.classList.add('gsap-reveal'));
    textItems.forEach(el => el.classList.add('gsap-text'));
    document.documentElement.classList.add('gsap-ready');

    ScrollTrigger.batch(revealItems, {
      start: 'top 88%',
      once: true,
      interval: 0.08,
      onEnter: batch => gsap.to(batch, {
        autoAlpha: 1, y: 0, duration: 0.72, ease: 'power2.out', stagger: 0.08, overwrite: 'auto',
      }),
    });

    textItems.forEach((heading) => {
      gsap.fromTo(heading, { autoAlpha: 0, y: 20 }, {
        autoAlpha: 1, y: 0, duration: 0.78, ease: 'power2.out',
        scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
      });
    });

    const heroCopy = document.querySelector('.hero__copy');
    if (heroCopy) {
      gsap.fromTo(heroCopy.querySelectorAll('.eyebrow, h1, .lead, .btn-row'),
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', delay: 0.12 });
    }
    const heroMedia = document.querySelector('.hero__media');
    if (heroMedia) gsap.fromTo(heroMedia, { autoAlpha: 0, y: 18, scale: 0.985 }, {
      autoAlpha: 1, y: 0, scale: 1, duration: 1, delay: 0.22, ease: 'power2.out',
    });

    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      const portrait = document.querySelector('.hero__portrait img');
      const hero = document.querySelector('.hero');
      if (portrait && hero) gsap.to(portrait, {
        yPercent: 7, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.7 },
      });
    });
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  } catch (error) {
    document.documentElement.classList.remove('gsap-ready');
    console.warn('GSAP motion was unavailable; page content remains visible.', error);
  }
};
initMotion();
