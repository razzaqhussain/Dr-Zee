const root = '/';
document.documentElement.classList.add('js');

const page = document.body.dataset.page || 'home';
const current = (key) => page === key ? ' aria-current="page"' : '';

const header = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="utility"><div class="utility__inner">
    <a href="/book-consultation/"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4m10-4v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Z"/><path d="M8 13h3m-3 3h5"/></svg><span>Private consultations</span></a>
    <a href="/contact/"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM4 7l8 6 8-6"/></svg><span>Send a confidential enquiry</span></a>
    <a href="/contact/"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.2"/></svg><span>Clinic details on enquiry</span></a>
    <a href="/book-consultation/"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg><span>By appointment</span></a>
  </div></div>
  <div class="header-sentinel" aria-hidden="true"></div>
  <header class="site-header" id="site-header">
    <div class="container nav">
      <a class="brand" href="/" aria-label="Dr. Zee home"><img src="/assets/brand/dr-zee-logo-transparent.png" alt="Dr. Zee Hair Restoration Specialist"></a>
      <nav class="nav__links" aria-label="Primary navigation">
        <a href="/"${current('home')}>Home</a>
        <a href="/about/"${current('about')}>About</a>
        <details class="nav-disclosure"${page.startsWith('treatment') ? ' data-active="true"' : ''}><summary${page.startsWith('treatment') ? ' aria-current="page"' : ''}>Treatments</summary><div class="nav-dropdown"><a href="/treatments/">All treatments</a><a href="/treatments/fue-hair-transplant/">FUE hair transplant</a><a href="/treatments/afro-caribbean-hair-transplant/">Afro-textured hair</a><a href="/treatments/beard-eyebrow-restoration/">Beard &amp; eyebrow restoration</a><a href="/treatments/female-hair-loss/">Female hair loss</a></div></details>
        <details class="nav-disclosure"><summary>Conditions</summary><div class="nav-dropdown"><a href="/treatments/">Hair loss &amp; restoration options</a><a href="/treatments/afro-caribbean-hair-transplant/">Afro-textured hair</a><a href="/treatments/female-hair-loss/">Female hair loss</a><a href="/faqs/">Common questions</a></div></details>
        <a href="/blogs/"${current('blog')}>Blog</a>
        <details class="nav-disclosure"><summary>Information</summary><div class="nav-dropdown"><a href="/faqs/">FAQs</a><a href="/about/">About Dr. Zee</a><a href="/privacy-policy/">Privacy notice</a><a href="/medical-disclaimer/">Medical disclaimer</a></div></details>
        <a href="/contact/"${current('contact')}>Contact</a>
        <a class="btn btn--primary" href="/book-consultation/">Book a consultation <span class="btn__arrow" aria-hidden="true">↗</span></a>
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
      <div class="footer-about"><a class="footer-brand" href="/" aria-label="Dr. Zee home"><img src="/assets/brand/dr-zee-logo-white.png" alt="Dr. Zee Hair Restoration Specialist"></a><p>Assessment-led hair restoration, with a personal focus on considered planning and natural-looking outcomes.</p></div>
      <div class="footer-column"><h3><svg class="footer-heading-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>Our Services</h3><ul><li><a href="/treatments/fue-hair-transplant/">FUE hair transplant</a></li><li><a href="/treatments/afro-caribbean-hair-transplant/">Afro-textured hair</a></li><li><a href="/treatments/beard-eyebrow-restoration/">Beard & eyebrow restoration</a></li><li><a href="/treatments/female-hair-loss/">Female hair loss</a></li></ul></div>
      <div class="footer-column footer-contact"><h3><svg class="footer-heading-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v12H9l-5 4z"/></svg>Contact</h3><ul><li><a href="/contact/"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.2"/></svg><span>Clinic details<br><small>Confirmed on enquiry</small></span></a></li><li><a href="/contact/"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM4 7l8 6 8-6"/></svg><span>Send an enquiry</span></a></li><li><a href="/book-consultation/"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="15" rx="2"/><path d="M8 3v6m8-6v6M4 11h16"/></svg><span>Request a consultation</span></a></li></ul></div>
      <div class="footer-column footer-hours"><h3><svg class="footer-heading-icon footer-clock-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>Opening Hours</h3><dl class="footer-schedule"><div><dt>Consultations</dt><dd>By appointment</dd></div><div><dt>Availability</dt><dd>Please enquire</dd></div></dl><a class="footer-booking" href="/book-consultation/"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="15" rx="2"/><path d="M8 3v6m8-6v6M4 11h16m-8 3v5m-2.5-2.5h5"/></svg>Book a consultation</a></div>
    </div>
    <div class="footer-bottom"><span>© <span id="year"></span> Dr. Zee. All rights reserved.</span><nav aria-label="Legal links"><a href="/privacy-policy/">Privacy notice</a><a href="/terms/">Terms of use</a><a href="/cookie-policy/">Cookie policy</a><a href="/medical-disclaimer/">Medical disclaimer</a></nav></div>
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
const desktopHoverNav = matchMedia('(min-width: 1121px) and (hover: hover) and (pointer: fine)');
document.querySelectorAll('.nav-disclosure').forEach(disclosure => {
  const summary = disclosure.querySelector('summary');
  let closeTimer;
  const cancelClose = () => window.clearTimeout(closeTimer);
  disclosure.addEventListener('toggle', () => {
    if (disclosure.open) document.querySelectorAll('.nav-disclosure').forEach(other => {
      if (other !== disclosure) other.open = false;
    });
  });
  disclosure.addEventListener('pointerenter', event => {
    if (desktopHoverNav.matches && event.pointerType === 'mouse') {
      cancelClose();
      disclosure.open = true;
    }
  });
  disclosure.addEventListener('pointerleave', event => {
    if (desktopHoverNav.matches && event.pointerType === 'mouse') {
      cancelClose();
      closeTimer = window.setTimeout(() => {
        if (!disclosure.matches(':focus-within')) disclosure.open = false;
      }, 140);
    }
  });
  summary?.addEventListener('click', event => {
    if (desktopHoverNav.matches && event.detail > 0) {
      event.preventDefault();
      cancelClose();
      disclosure.open = true;
    }
  });
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-disclosure')) {
    document.querySelectorAll('.nav-disclosure[open]').forEach(disclosure => { disclosure.open = false; });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') document.querySelectorAll('.nav-disclosure[open]').forEach(disclosure => {
    disclosure.open = false;
    disclosure.querySelector('summary')?.focus();
  });
});
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

const storyWindow = document.querySelector('[data-story-window]');
const storyTrack = document.querySelector('[data-story-track]');
const storyCards = storyTrack ? [...storyTrack.querySelectorAll('[data-story]')] : [];
const storyDots = document.querySelector('[data-story-dots]');
const storyPause = document.querySelector('[data-story-toggle]');
if (storyTrack && storyCards.length) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const cloneCount = Math.min(3, storyCards.length);
  const beforeClones = storyCards.slice(-cloneCount).map(card => card.cloneNode(true));
  const afterClones = storyCards.slice(0, cloneCount).map(card => card.cloneNode(true));
  [...beforeClones, ...afterClones].forEach(card => {
    card.setAttribute('aria-hidden', 'true');
    card.inert = true;
  });
  beforeClones.reverse().forEach(card => storyTrack.prepend(card));
  afterClones.forEach(card => storyTrack.append(card));

  let position = cloneCount;
  let timer;
  let isVisible = false;
  let isHovered = false;
  let isFocused = false;
  let userPaused = reducedMotion.matches;
  const dots = storyCards.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'story-dot';
    dot.setAttribute('aria-label', `Go to patient story placeholder ${index + 1}`);
    dot.setAttribute('aria-current', index === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => { position = cloneCount + index; moveToPosition(); });
    storyDots?.append(dot);
    return dot;
  });
  const stepSize = () => {
    const card = storyTrack.querySelector('.story-card');
    return card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(storyTrack).columnGap || getComputedStyle(storyTrack).gap || 0) : 0;
  };
  const moveToPosition = (animate = true) => {
    storyTrack.style.transition = animate ? '' : 'none';
    storyTrack.style.transform = `translate3d(${-position * stepSize()}px, 0, 0)`;
    const realIndex = ((position - cloneCount) % storyCards.length + storyCards.length) % storyCards.length;
    dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === realIndex)));
  };
  const setPaused = (paused) => {
    clearInterval(timer);
    if (!paused && isVisible && !isHovered && !isFocused && !userPaused && !reducedMotion.matches) {
      timer = setInterval(() => { position += 1; moveToPosition(); }, 4200);
    }
  };
  const syncPlayback = () => setPaused(userPaused || !isVisible || isHovered || isFocused || reducedMotion.matches || document.hidden);
  storyTrack.addEventListener('transitionend', () => {
    if (position >= cloneCount + storyCards.length) { position = cloneCount; moveToPosition(false); }
    if (position < cloneCount) { position = cloneCount + storyCards.length - 1; moveToPosition(false); }
  });
  document.querySelector('[data-story-next]')?.addEventListener('click', () => { position += 1; moveToPosition(); });
  document.querySelector('[data-story-prev]')?.addEventListener('click', () => { position -= 1; moveToPosition(); });
  storyPause?.addEventListener('click', () => {
    userPaused = !userPaused;
    storyPause.setAttribute('aria-pressed', String(userPaused));
    storyPause.setAttribute('aria-label', userPaused ? 'Play automatic stories' : 'Pause automatic stories');
    storyPause.textContent = userPaused ? '▶' : 'Ⅱ';
    syncPlayback();
  });
  if (storyPause && userPaused) {
    storyPause.setAttribute('aria-pressed', 'true');
    storyPause.setAttribute('aria-label', 'Play automatic stories');
    storyPause.textContent = '▶';
  }
  storyWindow?.addEventListener('pointerenter', () => { isHovered = true; syncPlayback(); });
  storyWindow?.addEventListener('pointerleave', () => { isHovered = false; syncPlayback(); });
  storyWindow?.addEventListener('focusin', () => { isFocused = true; syncPlayback(); });
  storyWindow?.addEventListener('focusout', event => {
    if (!storyWindow.contains(event.relatedTarget)) { isFocused = false; syncPlayback(); }
  });
  document.addEventListener('visibilitychange', syncPlayback);
  reducedMotion.addEventListener?.('change', event => { userPaused = event.matches; syncPlayback(); });
  const storyObserver = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; syncPlayback(); }, { threshold: 0.15 });
  if (storyWindow) storyObserver.observe(storyWindow);
  moveToPosition(false);
  window.addEventListener('resize', () => moveToPosition(false), { passive: true });
}

// A restrained cursor-following light on treatment cards, adapted from 21st.dev's Spotlight Card pattern.
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
    }, { passive: true });
  });
}

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

    const revealTargets = '.feature, .journey-step, .who-card, .service-card, .article-card, .route-card, .faq-item, .home-faq__item, .prose > h2, .prose > h3, .prose > p, .prose > ul, .page-feature-image, .cta-band__inner, .consultation__intro, .consultation__form, .media-frame, .trust-item, .credentials-note__inner, .section-heading, .tabs, .doctor-panel__media';
    const revealItems = [...document.querySelectorAll(revealTargets)].filter(el => !el.closest('[hidden]') && el.getBoundingClientRect().top >= window.innerHeight * 0.88);
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
        { y: 14 },
        { y: 0, duration: 0.72, stagger: 0.1, ease: 'power2.out', delay: 0.08 });
    }
    const heroMedia = document.querySelector('.hero__media');
    if (heroMedia) gsap.fromTo(heroMedia, { y: 12, scale: 0.992 }, {
      y: 0, scale: 1, duration: 0.9, delay: 0.16, ease: 'power2.out',
    });

    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      const portrait = document.querySelector('.hero__portrait img');
      const hero = document.querySelector('.hero');
      if (portrait && hero) gsap.to(portrait, {
        yPercent: 3, ease: 'none',
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
