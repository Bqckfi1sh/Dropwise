/**
 * Dropwise — Landing Page Scripts
 * Smooth scroll, navbar effects, reveal animations, mobile menu
 */

(function () {
  'use strict';

  /* ============ DOM refs ============ */
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const revealEls = document.querySelectorAll('.reveal');

  /* ============ Navbar scroll effect ============ */
  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 20);

    /* Highlight active nav link */
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= 120) {
        current = sec.getAttribute('id');
      }
    });
    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ============ Reveal on scroll (IntersectionObserver) ============ */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ============ Mobile menu toggle ============ */
  mobileToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    mobileToggle.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      mobileToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
})();
