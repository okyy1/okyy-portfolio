(() => {
  'use strict';
  const config = window.OKYY_CONFIG || { socials: {}, projects: [] };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const translations = {
    en: {
      skip: 'Skip to content', navWork: 'Works', navServices: 'Services', navAbout: 'About', navContact: 'Contact', letsTalk: "LET'S TALK",
      heroKicker: 'INDEPENDENT MV CREATOR / MOTION DESIGNER', heroOverline: '映像と音楽の、あいだに。', heroLine1: 'MAKING', heroLine2: 'MUSIC', heroLine3: 'VISIBLE.',
      heroIntro: 'Music video editing, creative typography, and subtle motion — crafted around the feeling of every song.', exploreWork: 'EXPLORE MY WORK', startProject: 'START A PROJECT', heroBased: 'BASED IN INDONESIA · WORKING WORLDWIDE', scroll: 'SCROLL TO DISCOVER ↓',
      sectionSelected: 'SELECTED PROJECTS', worksTitle: 'Selected <i>works.</i>', worksIntro: 'A selection of music videos and visual projects. Every piece has its own rhythm.', filterAll: 'ALL', filterMv: 'MUSIC VIDEO', filterVisual: 'OTHER VISUALS', worksNote: 'More projects and short edits are available on my social channels.', seeMore: 'SEE MORE ON YOUTUBE',
      sectionOffer: 'WHAT I DO', servicesTitle: 'Visuals that<br><i>feel the music.</i>', servicesIntro: 'From delicate lyric animation to high-impact visual edits, each project is shaped around the sound and story.',
      service1: 'Music Video Editing', service1Desc: 'Music-driven editing, scene composition, and smooth transitions for covers, originals, and VTuber projects.', service2: 'Lyric & Typography Motion', service2Desc: 'Expressive kinetic typography and lyric animation that follows the song without overpowering it.', service3: 'Character & Visual Motion', service3Desc: 'Layer-based parallax, subtle character movement, atmosphere, and motion graphics using supplied assets.', servicesPricing: 'Every commission is quoted based on scope, complexity, and deadline.', viewVgen: 'VIEW VGEN PROFILE',
      sectionAbout: 'A LITTLE ABOUT ME', aboutTitle: 'A little movement.<br><i>A lot of feeling.</i>', aboutCopy: "Hi, I'm Okyy_ID — an independent music video editor and motion designer based in Indonesia. I create visual experiences for music, combining pacing, typography, and atmospheric motion. I enjoy collaborating with artists and VTubers from around the world, especially Japan.", aboutFocusLabel: 'FOCUS', aboutFocus: 'Music Videos / Motion Graphics', aboutToolLabel: 'TOOLS', aboutLocationLabel: 'LOCATION', aboutLocation: 'Indonesia · Worldwide Remote', aboutLanguageLabel: 'LANGUAGES',
      sectionContact: "LET'S COLLABORATE", contactKicker: 'HAVE SOMETHING IN MIND?', contactTitle: "Let's make<br><i>something move.</i>", contactIntro: "Have a song, cover, or visual project in mind? Reach out on the platform you're most comfortable with. Send your idea, song length, references, and target deadline.", contactNote: 'For smoother planning, please include your budget range if available.',
      footerRights: 'ALL RIGHTS RESERVED.', backTop: 'BACK TO TOP',
      projectCategoryMv: 'MUSIC VIDEO', projectCategoryVisual: 'VISUAL PROJECT', modalRole: 'ROLE', modalYear: 'YEAR', modalCategory: 'CATEGORY', modalViewVideo: 'WATCH PROJECT', modalFindWorks: 'FIND MY WORK ON YOUTUBE', modalPlaceholder: 'An individual public video link has not been added yet. You can browse my YouTube channel in the meantime.', modalImageNotice: 'Preview image is a design placeholder; original MV still to be added.', modalClose: 'Close project details', emptyProjects: 'No projects in this category yet.', emailUnavailable: 'Email address is not configured yet. Please use Instagram, X, TikTok, or VGen.', emailComing: 'EMAIL (COMING SOON)', contactInstagram: 'INSTAGRAM', contactX: 'X / TWITTER', contactTikTok: 'TIKTOK', contactEmail: 'EMAIL', contactVgen: 'VGEN',
      contactInstagramSub: 'Direct message', contactXSub: 'Direct message', contactTikTokSub: 'Direct message', contactEmailSub: 'Business inquiries', contactVgenSub: 'Commission platform'
    },
    ja: {
      skip: '本文へスキップ', navWork: '作品', navServices: 'サービス', navAbout: 'プロフィール', navContact: 'お問い合わせ', letsTalk: 'お問い合わせ',
      heroKicker: 'MV制作 / モーションデザイナー', heroOverline: '映像と音楽の、あいだに。', heroLine1: '音楽を', heroLine2: '映像に', heroLine3: '変える。',
      heroIntro: '楽曲の空気感を大切に、MV編集・タイポグラフィ・繊細なモーションで音楽を視覚化します。', exploreWork: '作品を見る', startProject: '制作の相談', heroBased: 'インドネシア拠点 · 海外案件対応', scroll: '下へスクロール ↓',
      sectionSelected: '主な制作実績', worksTitle: 'Selected <i>works.</i>', worksIntro: '音楽に寄り添って制作したMVと映像作品の一部をご紹介します。', filterAll: 'すべて', filterMv: 'MV', filterVisual: 'その他の映像', worksNote: 'ほかの作品やショート動画はSNSでも公開しています。', seeMore: 'YOUTUBEでもっと見る',
      sectionOffer: '制作できること', servicesTitle: '音楽の魅力を、<br><i>映像の力で。</i>', servicesIntro: '繊細なリリックアニメーションからダイナミックな映像編集まで、楽曲の世界観に合わせて制作します。',
      service1: 'ミュージックビデオ編集', service1Desc: '歌ってみた・オリジナル曲・VTuber向けのMV編集、構図設計、楽曲に合わせたトランジション。', service2: 'リリック・タイポグラフィ', service2Desc: '音楽を邪魔せず、歌詞の意味とリズムを引き立てるキネティックタイポグラフィ。', service3: 'キャラクター・ビジュアルモーション', service3Desc: 'ご提供いただいた素材を使ったレイヤーアニメーション、パララックス、雰囲気作り、モーショングラフィックス。', servicesPricing: '料金は内容・難易度・納期に応じて個別にお見積もりいたします。', viewVgen: 'VGENのプロフィール',
      sectionAbout: '自己紹介', aboutTitle: '小さな動きに、<br><i>大きな感情を。</i>', aboutCopy: 'Okyy_IDです。インドネシアを拠点に活動するMVエディター・モーションデザイナーです。リズムに合った編集、タイポグラフィ、雰囲気を演出するモーションを組み合わせて、音楽の魅力を引き出します。日本をはじめ、世界中のアーティストやVTuberとの制作を楽しんでいます。', aboutFocusLabel: '専門', aboutFocus: 'MV制作 / モーショングラフィックス', aboutToolLabel: '使用ソフト', aboutLocationLabel: '拠点', aboutLocation: 'インドネシア · リモート対応', aboutLanguageLabel: '対応言語',
      sectionContact: 'お問い合わせ', contactKicker: '制作のご相談はこちら', contactTitle: '一緒に、<br><i>動く作品を。</i>', contactIntro: '楽曲・歌ってみた・映像制作のご相談は、お好きなSNSまたはメールからお気軽にどうぞ。ご希望の内容、楽曲の長さ、参考動画、希望納期をお知らせください。', contactNote: 'ご予算の目安も共有いただけると、よりスムーズにご案内できます。',
      footerRights: '無断転載禁止', backTop: 'ページ上部へ',
      projectCategoryMv: 'ミュージックビデオ', projectCategoryVisual: '映像作品', modalRole: '担当', modalYear: '制作年', modalCategory: 'カテゴリー', modalViewVideo: '動画を見る', modalFindWorks: 'YOUTUBEの作品一覧へ', modalPlaceholder: '作品への個別リンクはまだ設定されていません。YouTubeチャンネルから作品をご覧いただけます。', modalImageNotice: '画像は仮デザインです。実際のMV画像に差し替える予定です。', modalClose: '作品詳細を閉じる', emptyProjects: 'このカテゴリーの作品はまだありません。', emailUnavailable: 'メールアドレスはまだ未設定です。Instagram・X・TikTok・VGenをご利用ください。', emailComing: 'メール（準備中）', contactInstagram: 'INSTAGRAM', contactX: 'X / TWITTER', contactTikTok: 'TIKTOK', contactEmail: 'メール', contactVgen: 'VGEN',
      contactInstagramSub: 'DMで相談', contactXSub: 'DMで相談', contactTikTokSub: 'DMで相談', contactEmailSub: 'お仕事のお問い合わせ', contactVgenSub: 'コミッション受付'
    }
  };
  const state = { lang: 'en', filter: 'all', modalProject: null, lastFocus: null };
  try { if (localStorage.getItem('okyy-lang') === 'ja') state.lang = 'ja'; } catch (_) {}
  const tr = (key) => (translations[state.lang] || translations.en)[key] || key;
  const localized = (value) => (value && typeof value === 'object') ? (value[state.lang] || value.en || '') : (value || '');
  const isSafeUrl = (value) => {
    try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol); } catch (_) { return false; }
  };
  const h = (tag, className = '', text = '') => { const element = document.createElement(tag); if (className) element.className = className; if (text !== '') element.textContent = text; return element; };
  function applyLanguage() {
    document.documentElement.lang = state.lang === 'ja' ? 'ja' : 'en';
    document.title = state.lang === 'ja' ? 'Okyy_ID — MV制作・モーションデザイン' : 'Okyy_ID — Music Video & Motion Design';
    $('meta[name="description"]').content = state.lang === 'ja' ? 'Okyy_IDのMV制作・モーションデザインのポートフォリオ。ご相談はInstagram、X、TikTokなどから。' : 'Okyy_ID — music video editor and motion designer. Clean visuals, thoughtful pacing, and motion that follows the music.';
    $$('[data-i18n]').forEach(el => {
      const value = tr(el.dataset.i18n);
      // Only translations authored above use deliberate <i> and <br> markup.
      if (['worksTitle', 'servicesTitle', 'aboutTitle', 'contactTitle'].includes(el.dataset.i18n)) el.innerHTML = value;
      else el.textContent = value;
    });
    $$('.lang-btn').forEach(button => { const selected = button.dataset.lang === state.lang; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
    $('#modalClose').setAttribute('aria-label', tr('modalClose'));
    $('#menuToggle').setAttribute('aria-label', state.lang === 'ja' ? 'メニューを開く' : 'Open navigation');
    renderProjects(); renderContacts();
    if (state.modalProject) renderModal(state.modalProject);
  }
  function renderProjects() {
    const grid = $('#projectsGrid'); grid.replaceChildren();
    const projects = (config.projects || []).filter(p => state.filter === 'all' || p.type === state.filter);
    if (!projects.length) { grid.append(h('p', 'empty-state', tr('emptyProjects'))); return; }
    projects.forEach((project, index) => {
      const button = h('button', 'project-card'); button.type = 'button'; button.dataset.project = project.id;
      button.setAttribute('aria-label', `${localized(project.title)} — ${localized(project.subtitle)}`);
      const art = h('span', 'project-art');
      const img = h('img'); img.src = project.image; img.alt = `Editorial placeholder graphic for ${localized(project.title)}`; img.loading = index > 1 ? 'lazy' : 'eager'; img.decoding = 'async';
      const overlay = h('span', 'project-overlay'); const open = h('span', 'project-open', '↗');
      overlay.append(open); art.append(img, overlay);
      const info = h('span', 'project-info');
      const heading = h('span', 'project-heading'); heading.append(h('span', 'project-title', localized(project.title)), h('span', 'project-arrow', '↗'));
      const meta = h('span', 'project-meta', `${localized(project.subtitle)} / ${project.year}`);
      info.append(heading, meta); button.append(art, info);
      button.addEventListener('click', () => openModal(project, button)); grid.append(button);
    });
  }
  function renderContacts() {
    const holder = $('#contactLinks'); holder.replaceChildren();
    const socials = config.socials || {};
    const links = [
      { name: 'contactInstagram', desc: 'contactInstagramSub', logo: 'IG', url: socials.instagram },
      { name: 'contactX', desc: 'contactXSub', logo: 'X', url: socials.x },
      { name: 'contactTikTok', desc: 'contactTikTokSub', logo: 'TT', url: socials.tiktok },
      { name: 'contactEmail', desc: 'contactEmailSub', logo: '@', url: socials.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(socials.email) ? `mailto:${socials.email}?subject=${encodeURIComponent('MV Commission Inquiry — Okyy_ID')}` : '' },
      { name: 'contactVgen', desc: 'contactVgenSub', logo: 'VG', url: socials.vgen }
    ];
    links.forEach(item => {
      const valid = item.url.startsWith('mailto:') || isSafeUrl(item.url);
      const link = h(valid ? 'a' : 'button', `contact-link${valid ? '' : ' contact-disabled'}`);
      if (valid) { link.href = item.url; if (!item.url.startsWith('mailto:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; } }
      else { link.type = 'button'; link.addEventListener('click', () => showToast(tr('emailUnavailable'))); }
      const icon = h('span', 'contact-icon', item.logo);
      const details = h('span', 'contact-details');
      details.append(
        h('strong', '',
          !valid && item.name === 'contactEmail'
            ? tr('emailComing')
            : tr(item.name)
        ),
        h('small', '',
          item.name === 'contactEmail' && valid
            ? socials.email
            : tr(item.desc)
        )
      );
      const arrow = h('span', 'contact-arrow', valid ? '↗' : '—');
      link.append(icon, details, arrow); holder.append(link);
    });
  }
  function appendMeta(container, title, value) { const item = h('div', 'modal-data-item'); item.append(h('small', '', title), h('strong', '', value)); container.append(item); }
  function renderModal(project) {
    const body = $('#modalBody'); body.replaceChildren();
    const top = h('div', 'modal-top');
    const validYoutubeId = /^[a-zA-Z0-9_-]{11}$/.test(project.youtubeId || '');
    const poster = h('div', 'modal-poster');
    if (validYoutubeId) {
      const embed = h('iframe'); embed.src = `https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0`; embed.title = localized(project.title); embed.loading = 'lazy'; embed.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'; embed.allowFullscreen = true; poster.append(embed);
    } else {
      const img = h('img'); img.src = project.image; img.alt = `Editorial project preview graphic — ${localized(project.title)}`; poster.append(img);
    }
    const text = h('div', 'modal-text');
    text.append(h('div', 'modal-eyebrow', `OKYY_ID / ${project.year}`));
    const title = h('h2'); title.id = 'modalTitle'; title.textContent = localized(project.title); text.append(title);
    text.append(h('p', 'modal-subtitle', localized(project.subtitle)), h('p', 'modal-description', localized(project.description)));
    const metadata = h('div', 'modal-data'); appendMeta(metadata, tr('modalRole'), localized(project.role)); appendMeta(metadata, tr('modalYear'), project.year); appendMeta(metadata, tr('modalCategory'), tr(project.type === 'mv' ? 'projectCategoryMv' : 'projectCategoryVisual')); text.append(metadata);
    const videoUrl = isSafeUrl(project.videoUrl) ? project.videoUrl : (validYoutubeId ? `https://www.youtube.com/watch?v=${project.youtubeId}` : null);
    const link = h('a', 'button-primary modal-action', videoUrl ? tr('modalViewVideo') : tr('modalFindWorks'));
    link.href = videoUrl || (config.socials && isSafeUrl(config.socials.youtube) ? config.socials.youtube : 'https://vgen.co/Okyy'); link.target = '_blank'; link.rel = 'noopener noreferrer'; link.append(h('span', '', '↗')); text.append(link);
    if (!videoUrl) text.append(h('p', 'modal-notice', tr('modalPlaceholder')));
    if (/\.svg$/i.test(project.image)) text.append(h('p', 'modal-notice', tr('modalImageNotice')));
    top.append(poster, text); body.append(top);
  }
  function openModal(project, from) {
    state.modalProject = project; state.lastFocus = from; renderModal(project);
    const modal = $('#projectModal'); modal.hidden = false; document.body.classList.add('modal-open'); $('#modalClose').focus();
  }
  function closeModal() {
    const modal = $('#projectModal'); if (modal.hidden) return;
    modal.hidden = true; document.body.classList.remove('modal-open');
    const frame = $('iframe', $('#modalBody')); if (frame) frame.src = 'about:blank';
    state.modalProject = null; if (state.lastFocus && document.contains(state.lastFocus)) state.lastFocus.focus();
  }
  let toastTimer;
  function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 5000); }
  function init() {
    $('#year').textContent = String(new Date().getFullYear());
    $$('.lang-btn').forEach(button => button.addEventListener('click', () => { state.lang = button.dataset.lang === 'ja' ? 'ja' : 'en'; try { localStorage.setItem('okyy-lang', state.lang); } catch (_) {} applyLanguage(); }));
    $$('.filter-btn').forEach(button => button.addEventListener('click', () => { state.filter = button.dataset.filter; $$('.filter-btn').forEach(b => { const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); }); renderProjects(); }));
    const menuToggle = $('#menuToggle'); const mobileNav = $('#mobileNav');
    const closeMenu = () => { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.classList.remove('open'); };
    menuToggle.addEventListener('click', () => { const open = mobileNav.hidden; mobileNav.hidden = !open; menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.classList.toggle('open', open); });
    $$('a', mobileNav).forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
    $('#modalClose').addEventListener('click', closeModal);
    $('#projectModal').addEventListener('click', event => { if (event.target.dataset.close === 'true') closeModal(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') { closeModal(); closeMenu(); }
      if (event.key === 'Tab' && !$('#projectModal').hidden) {
        const focusables = $$('button, a[href], iframe', $('#projectModal')).filter(el => !el.disabled);
        if (!focusables.length) return; const first = focusables[0], last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('shown'); observer.unobserve(entry.target); } }), { threshold: .08, rootMargin: '0px 0px -20px 0px' });
      $$('.reveal').forEach(item => observer.observe(item));
    } else $$('.reveal').forEach(item => item.classList.add('shown'));
    if (isSafeUrl(config.socials?.youtube)) $('#youtubeWorks').href = config.socials.youtube;
    if (isSafeUrl(config.socials?.vgen)) $('#servicesVgen').href = config.socials.vgen;
    applyLanguage();
    requestAnimationFrame(() => document.body.classList.add('ready'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
