/**
 * OKYY_ID WEBSITE CONFIGURATION — EDIT HERE
 * This is the only file you need to change for links and portfolio entries.
 * Do NOT include private/unreleased client previews without permission.
 */
window.OKYY_CONFIG = {
  socials: {
    instagram: 'https://www.instagram.com/okyy_id/',
    x: 'https://x.com/okyy_id',
    tiktok: 'https://www.tiktok.com/@okyy_id',
    youtube: 'https://www.youtube.com/@Okyy_ID',
    vgen: 'https://vgen.co/Okyy',
    // REQUIRED BEFORE PUBLISHING: your public business email. Leave empty to show 'coming soon'.
    email: ''
  },
  // These titles are examples from your known work history. SVGs are ORIGINAL
  // DESIGN PLACEHOLDERS, not actual MV thumbnails. Replace image with your own still.
  // To link a specific MV, fill in videoUrl (TikTok/YouTube/etc.).
  // Optional: set youtubeId to a public YouTube video ID to embed it in the details dialog.
  projects: [
    {
      id: 'lilas',
      title: { en: 'LilaS', ja: 'LilaS' },
      subtitle: { en: 'Fanmade Music Video', ja: 'ファンメイドMV' },
      description: {
        en: 'An anime-inspired personal music video edit driven by cinematic pacing, atmosphere, and emotion.',
        ja: 'シネマティックなテンポ、空気感、感情表現を大切にした、アニメをテーマにした自主制作MV。'
      },
      type: 'mv', year: '2026',
      role: { en: 'Editing / Motion', ja: '編集・モーション' },
      image: 'assets/work-lilas.svg', videoUrl: '', youtubeId: ''
    },
    {
      id: 'blue-gold',
      title: { en: 'Blue & Gold', ja: 'Blue & Gold' },
      subtitle: { en: 'Music Video Edit', ja: 'MV編集' },
      description: {
        en: 'A music-focused edit exploring color, energy, and transitions shaped around the rhythm.',
        ja: '色彩・エネルギー・リズムに合わせたトランジションを軸に制作したMV編集。'
      },
      type: 'mv', year: '2026',
      role: { en: 'Editing / Motion Graphics', ja: '編集・モーショングラフィックス' },
      image: 'assets/work-blue-gold.svg', videoUrl: '', youtubeId: ''
    },
    {
      id: 'awakening',
      title: { en: 'The Awakening', ja: 'The Awakening' },
      subtitle: { en: 'Yamekari — Lore Video', ja: 'Yamekari — ロア映像' },
      description: {
        en: 'A storytelling-led visual project with cinematic composition and dramatic editing.',
        ja: 'シネマティックな画面構成とドラマティックな編集を用いたストーリー重視の映像作品。'
      },
      type: 'visual', year: '2026',
      role: { en: 'Video Editing / Visual Direction', ja: '映像編集・ビジュアル演出' },
      image: 'assets/work-awakening.svg', videoUrl: '', youtubeId: ''
    },
    {
      id: 'kamippoi',
      title: { en: '神っぽいな', ja: '神っぽいな' },
      subtitle: { en: 'ShoyuVT — Cover MV', ja: 'ShoyuVT — 歌ってみたMV' },
      description: {
        en: 'A cover-song music video featuring punchy typography and beat-focused motion.',
        ja: 'ビートに合わせたモーションと印象的なタイポグラフィを取り入れた歌ってみたMV。'
      },
      type: 'mv', year: '2026',
      role: { en: 'Editing / Typography', ja: '編集・タイポグラフィ' },
      image: 'assets/work-kamippoi.svg', videoUrl: '', youtubeId: ''
    }
  ]
};
