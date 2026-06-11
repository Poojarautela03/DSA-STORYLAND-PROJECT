/**
 * DSA Story-Land — main.js
 * Author: DSA Story-Land Team
 * Description: Handles smooth navigation, active nav highlighting,
 *              and any progressive enhancement beyond pure-CSS demos.
 */

'use strict';

/* --------------------------------------------------
   1. Active Nav Link on Scroll
   -------------------------------------------------- */
(function initNavHighlight() {
  const chapters = document.querySelectorAll('.dsa-chapter');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!chapters.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px', // fires when section is roughly centred
      threshold: 0,
    }
  );

  chapters.forEach((ch) => observer.observe(ch));
})();

/* --------------------------------------------------
   2. Smooth-scroll polyfill for browsers that ignore
      scroll-behavior: smooth on anchor clicks
   -------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Let the URL update so :target CSS still fires
    history.pushState(null, '', anchor.getAttribute('href'));
  });
});

/* --------------------------------------------------
   3. Keyboard-accessible Demo Buttons
   Note: The CSS :hover demos already work for mouse.
   This section adds Enter / Space key support so
   keyboard users get a visual pulse.
   -------------------------------------------------- */
document.querySelectorAll('.demo-btn').forEach((btn) => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      setTimeout(() => {
        btn.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
      }, 1200);
    }
  });
});