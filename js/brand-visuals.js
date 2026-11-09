/*
 * OKYY_ID — Personal branding images
 * Keeps the existing bilingual website, popup and portfolio code untouched.
 * Requires assets/okyy-hero.webp, assets/okyy-profile.webp and assets/okyy-favicon.png.
 */
(() => {
  'use strict';

  const styles = `
    /* HERO: full wide artwork, placed inside the existing editorial frame */
    .art-frame.okyy-branded-frame {
      display: flex;
      flex-direction: column;
      min-height: 515px;
      padding: 13px;
      gap: 12px;
      background: #f5f4f0;
    }
    .okyy-branded-frame .okyy-hero-visual {
      min-height: 0;
      flex: 1 1 auto;
      position: relative;
      overflow: hidden;
      background: #f9f9f8;
      isolation: isolate;
    }
    .okyy-branded-frame .okyy-hero-visual::before {
      content: '';
      position: absolute;
      inset: -22px;
      background: url('assets/okyy-hero.webp') center / cover no-repeat;
      filter: blur(22px) saturate(.85);
      opacity: .27;
      z-index: 0;
    }
    .okyy-branded-frame .okyy-hero-visual img {
      display: block;
      position: absolute;
      inset: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transition: transform .65s cubic-bezier(.2,.8,.2,1);
    }
    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
      .hero-art:hover .okyy-branded-frame .okyy-hero-visual img {
        transform: scale(1.025);
      }
    }
    .okyy-branded-frame .art-bottom { margin-top: 0; }

    /* ABOUT: square OC avatar instead of the O_ placeholder */
    .okyy-about-portrait {
      display: block;
      width: min(100%, 300px);
      aspect-ratio: 1;
      object-fit: cover;
      border: 1px solid #686963;
      border-radius: 3px;
      background: #f8f8f7;
    }
    @media (max-width: 800px) {
      .art-frame.okyy-branded-frame { min-height: 0; height: auto; }
      .okyy-branded-frame .okyy-hero-visual {
        flex: none;
        aspect-ratio: 1.45;
        min-height: 0;
      }
      .about-left:has(.okyy-about-portrait) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;
        min-height: 0;
      }
      .okyy-about-portrait { width: min(100%, 280px); }
    }
    @media (max-width: 620px) {
      .art-frame.okyy-branded-frame { padding: 10px; gap: 10px; }
      .okyy-branded-frame .okyy-hero-visual { aspect-ratio: 1.48; }
      .okyy-about-portrait { width: min(100%, 240px); }
    }
    @media (prefers-reduced-motion: reduce) {
      .okyy-branded-frame .okyy-hero-visual img { transition: none; }
    }
  `;

  function install() {
    if (!document.getElementById('okyy-brand-visual-style')) {
      const style = document.createElement('style');
      style.id = 'okyy-brand-visual-style';
      style.textContent = styles;
      document.head.appendChild(style);
    }

    const frame = document.querySelector('.hero-art .art-frame');
    const oldArt = frame && frame.querySelector('.art-drawing');
    if (frame && oldArt && !frame.querySelector('.okyy-hero-visual')) {
      const visual = document.createElement('div');
      visual.className = 'okyy-hero-visual';
      const image = document.createElement('img');
      image.src = 'assets/okyy-hero.webp';
      image.alt = 'Okyy_ID original character — silver-haired anime character in a minimalist graphic banner';
      image.width = 1920;
      image.height = 1080;
      image.decoding = 'async';
      image.fetchPriority = 'high';
      visual.appendChild(image);
      oldArt.replaceWith(visual);
      frame.classList.add('okyy-branded-frame');
      const hero = document.querySelector('.hero-art');
      if (hero) hero.removeAttribute('aria-hidden');
    }

    const oldProfile = document.querySelector('.about-left .about-symbol');
    if (oldProfile && !document.querySelector('.okyy-about-portrait')) {
      const profile = document.createElement('img');
      profile.className = 'okyy-about-portrait';
      profile.src = 'assets/okyy-profile.webp';
      profile.alt = 'Portrait of the Okyy_ID original character';
      profile.width = 709;
      profile.height = 709;
      profile.loading = 'lazy';
      profile.decoding = 'async';
      oldProfile.replaceWith(profile);
    }

    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = 'assets/okyy-favicon.png';
      favicon.type = 'image/png';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install, { once: true });
  } else {
    install();
  }
})();
