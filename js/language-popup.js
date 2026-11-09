/* Okyy_ID | Language Welcome Card
   Shows on every page load / refresh; no cookies, no tracking.
   Works with the existing header language switch in js/main.js.
*/
(() => {
  'use strict';
  if (document.getElementById('okyy-language-popup')) return;

  const css = document.createElement('style');
  css.id = 'okyy-language-popup-styles';
  css.textContent = `
    .okyy-language-popup {
      position: fixed;
      right: 28px;
      bottom: 26px;
      z-index: 100;
      width: min(395px, calc(100vw - 32px));
      box-sizing: border-box;
      padding: 22px 22px 19px;
      border: 1px solid #d6d4cb;
      border-radius: 19px;
      background: #fbfaf6;
      color: #1a1b19;
      font-family: inherit;
      box-shadow: 0 15px 45px rgba(20, 24, 27, .16),
                  0 0 25px rgba(145, 159, 207, .11);
      animation: okyyPopupIn .5s .2s cubic-bezier(.2,.85,.25,1) both;
    }
    .okyy-language-popup::before {
      content: '';
      position: absolute;
      top: -1px;
      left: 22px;
      right: 22px;
      height: 3px;
      border-radius: 0 0 8px 8px;
      background: linear-gradient(90deg, #93b7f0, #be9bda, #96d0c0);
      opacity: .85;
    }
    .okyy-language-popup.is-closing {
      opacity: 0;
      transform: translateY(13px);
      transition: opacity .2s ease, transform .2s ease;
      animation: none;
      pointer-events: none;
    }
    .okyy-popup-kicker {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      padding-right: 35px;
      font: 800 10px/1.3 inherit;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: .13em;
      color: #676961;
    }
    .okyy-popup-spark {
      display: inline-block;
      width: 7px;
      height: 7px;
      flex: 0 0 auto;
      border-radius: 50%;
      background: #8daddd;
      box-shadow: 0 0 0 4px rgba(141,173,221,.16);
    }
    .okyy-popup-close {
      position: absolute;
      top: 15px;
      right: 15px;
      display: grid;
      place-items: center;
      width: 33px;
      height: 33px;
      padding: 0;
      border: 0;
      border-radius: 10px;
      background: #d84141;
      color: white;
      font: 800 20px/1 Arial, sans-serif;
      cursor: pointer;
      transition: background .2s ease, transform .2s ease;
    }
    .okyy-popup-close:hover,
    .okyy-popup-close:focus-visible {
      background: #b82727;
      transform: scale(1.05);
    }
    .okyy-popup-title {
      margin: 0 32px 9px 0;
      font-size: clamp(19px, 2.3vw, 22px);
      font-weight: 800;
      line-height: 1.32;
      letter-spacing: -.04em;
    }
    .okyy-popup-desc {
      margin: 0 0 15px;
      max-width: 34em;
      color: #5b5e59;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.85;
    }
    .okyy-popup-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 0 12px;
    }
    .okyy-popup-lang-option {
      padding: 9px 15px;
      border: 1px solid #d8d7d1;
      border-radius: 999px;
      background: #f0efe9;
      color: #77776f;
      font: inherit;
      font-size: 12px;
      font-weight: 800;
      cursor: pointer;
      transition: border-color .2s, background .2s, color .2s, transform .2s;
    }
    .okyy-popup-lang-option:hover { transform: translateY(-1px); border-color: #8a8a80; }
    .okyy-popup-lang-option[aria-pressed='true'] {
      background: #191a18;
      border-color: #191a18;
      color: #fff;
    }
    .okyy-popup-note {
      margin: 0;
      padding-top: 11px;
      border-top: 1px solid #e7e5df;
      color: #87877f;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.5;
    }
    @keyframes okyyPopupIn {
      from { opacity: 0; transform: translateY(17px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 620px) {
      .okyy-language-popup {
        right: 16px;
        bottom: 16px;
        padding: 19px 18px 16px;
        border-radius: 16px;
      }
      .okyy-popup-title { font-size: 19px; }
    }
    @media (prefers-reduced-motion: reduce) {
      .okyy-language-popup { animation: none; }
      .okyy-language-popup.is-closing { transition: none; }
    }
  `;
  document.head.appendChild(css);

  const popup = document.createElement('aside');
  popup.id = 'okyy-language-popup';
  popup.className = 'okyy-language-popup';
  popup.setAttribute('role', 'region');
  popup.setAttribute('aria-labelledby', 'okyy-popup-title');
  popup.innerHTML = `
    <div class="okyy-popup-kicker"><span class="okyy-popup-spark" aria-hidden="true"></span>ENGLISH / 日本語 · BILINGUAL SITE</div>
    <button type="button" class="okyy-popup-close" aria-label="Close language tip">×</button>
    <h2 class="okyy-popup-title" id="okyy-popup-title"></h2>
    <p class="okyy-popup-desc"></p>
    <div class="okyy-popup-controls" role="group" aria-label="Choose website language / 言語選択">
      <button type="button" class="okyy-popup-lang-option" data-popup-lang="en" aria-pressed="true">EN</button>
      <button type="button" class="okyy-popup-lang-option" data-popup-lang="ja" aria-pressed="false">日本語</button>
    </div>
    <p class="okyy-popup-note"></p>
  `;
  document.body.appendChild(popup);

  const copy = {
    en: {
      title: 'This site is bilingual.',
      desc: 'Switch between English and Japanese. The navigation, project information, and descriptions will change to your selected language.',
      note: 'You can switch languages anytime using the button in the top menu.',
      close: 'Close language tip'
    },
    ja: {
      title: '日本語に切り替えられます。',
      desc: 'このサイトは英語・日本語に対応しています。言語を切り替えると、メニューや作品紹介、説明文などの表示が変わります。',
      note: '言語はページ上部のボタンからいつでも変更できます。',
      close: 'この案内を閉じる'
    }
  };

  function syncLanguage() {
    const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
    popup.querySelector('.okyy-popup-title').textContent = copy[lang].title;
    popup.querySelector('.okyy-popup-desc').textContent = copy[lang].desc;
    popup.querySelector('.okyy-popup-note').textContent = copy[lang].note;
    popup.querySelector('.okyy-popup-close').setAttribute('aria-label', copy[lang].close);
    popup.querySelectorAll('[data-popup-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.popupLang === lang));
    });
  }

  popup.querySelectorAll('[data-popup-lang]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector(`.lang-control .lang-btn[data-lang="${button.dataset.popupLang}"]`);
      if (target) target.click(); // Reuse the website's real EN/JP language switch.
      syncLanguage();
    });
  });

  const observer = new MutationObserver(syncLanguage);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  popup.querySelector('.okyy-popup-close').addEventListener('click', () => {
    observer.disconnect();
    popup.classList.add('is-closing');
    window.setTimeout(() => popup.remove(), 220);
  });
  syncLanguage();
})();
