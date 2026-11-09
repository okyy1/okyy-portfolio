# OKYY_ID — Website Portofolio (English / 日本語)

Website portofolio **Japanese Minimalist**, dibuat khusus untuk **GitHub Pages**. Website statis HTML + CSS + JavaScript; **tidak perlu Node.js, database, framework, atau biaya hosting** (untuk repository publik).

## Isi paket

- `index.html` — halaman utama dan struktur website
- `css/styles.css` — desain responsif
- `js/main.js` — perpindahan bahasa, filter karya, dialog proyek, navigasi mobile
- **`js/config.js` — satu tempat untuk mengedit akun dan isi portofolio**
- `assets/` — desain poster pengganti sementara (SVG), favicon, dan preview gambar media sosial
- `.nojekyll` — mematikan proses Jekyll supaya file statis diterbitkan apa adanya
- `404.html` — halaman ketika URL salah

## WAJIB diperiksa sebelum website dipublikasikan

1. **Isi email bisnis** di `js/config.js`: ubah `email: ''` menjadi misalnya `email: 'alamatmu@example.com'` menggunakan alamat ASLI milikmu. Tombol email otomatis menjadi `mailto:` dan membuka aplikasi email pengunjung. Tidak ada formulir yang menyimpan pesan.
2. **Ganti gambar portofolio SVG dengan screenshot MV asli** yang kamu punya hak untuk tampilkan. File `assets/work-*.svg` saat ini adalah *desain abstrak placeholder buatan khusus*, **BUKAN** tangkapan layar video aslinya. Cara termudah: simpan screenshot JPG/WEBP di folder `assets/`, lalu ganti `image: 'assets/work-lilas.svg'` menjadi `image: 'assets/nama-file.webp'`, dst.
3. **Tambahkan tautan video langsung** di setiap objek `projects` di `js/config.js`: ubah `videoUrl: ''` menjadi URL publik yang sesuai, misalnya video YouTube/TikTok. Jika proyek ada di YouTube, isi juga `youtubeId` dengan 11 karakter video ID agar videonya dapat ditonton dari popup. Jangan cantumkan preview **unlisted** atau pekerjaan klien yang belum diizinkan.
4. Akun Instagram, X, TikTok, YouTube, dan VGen sudah diset dari tautan di profil VGen Okyy_ID. **Klik dan pastikan masing-masing cocok** sebelum dipublikasikan.
5. Sesuaikan judul, deskripsi, role, tahun pada tiap proyek di `config.js` jika perlu. Seluruh entri punya versi English (`en`) dan Jepang (`ja`).
6. Ganti `assets/social-preview.png` jika ingin preview link memakai screenshot MV asli.

### Contoh mengganti 1 proyek

```js
{
  id: 'lilas',
  title: { en: 'LilaS', ja: 'LilaS' },
  subtitle: { en: 'Fanmade Music Video', ja: 'ファンメイドMV' },
  description: {
    en: 'Your English project description.',
    ja: '日本語の作品紹介。'
  },
  type: 'mv', // 'mv' atau 'visual'
  year: '2026',
  role: { en: 'Editing / Motion', ja: '編集・モーション' },
  image: 'assets/lilas-real.webp',
  videoUrl: 'https://www.youtube.com/watch?v=ABCDEFGHIJK',
  youtubeId: 'ABCDEFGHIJK'
}
```

*URL dan ID pada contoh di atas hanya contoh format — bukan video nyata.*

## Preview website di komputer

1. Ekstrak ZIP.
2. Klik dua kali `index.html` untuk preview awal.
3. Bila ada masalah font, buka lewat local server: di folder website jalankan `python -m http.server 8000`, kemudian buka `http://localhost:8000/` (jika Python terpasang).
4. Uji di HP dengan Chrome DevTools (`F12` → Toggle device toolbar) atau akses melalui GitHub Pages setelah terbit.

## Upload ke GitHub Pages (tanpa command terminal)

1. Masuk ke **github.com** lalu klik **New repository**.
2. Beri nama misalnya **`okyy-portfolio`**, pilih **Public**, kemudian **Create repository**.
3. Klik **uploading an existing file** atau **Add file → Upload files**. Upload **ISI ZIP** (index.html, css/, js/, assets/, dan file lainnya), **jangan upload file ZIP saja**. Pastikan `index.html` berada di **root repository**, bukan di dalam subfolder `okyy-id-portfolio`.
4. Klik **Commit changes**.
5. Buka **Settings → Pages**. Pada **Build and deployment**, pilih **Deploy from a branch**. Pilih branch **main**, folder **/(root)** lalu **Save**.
6. Setelah Pages diterbitkan, website akan memiliki alamat `https://USERNAME.github.io/okyy-portfolio/` (ganti USERNAME dengan username GitHub milikmu). GitHub menyebut publikasi dapat membutuhkan hingga sekitar 10 menit.
7. Kalau ingin domain sendiri nanti, atur di **Settings → Pages → Custom domain** dan ikuti petunjuk DNS. Tidak harus membeli domain sekarang.

Alternatif: untuk URL paling rapi `https://USERNAME.github.io/`, nama repo harus tepat `USERNAME.github.io`.

## Tips edit dan maintenance

- Update karya dengan mengedit `js/config.js` atau menambah file foto di `assets/`.
- UI bilingual dari `js/main.js`, disimpan pada browser melalui `localStorage`. Pilihan bahasa tetap bertahan ketika dibuka lagi.
- Tidak ada tracking analytics, pembayaran, backend, atau pengumpulan data pengguna.
- Gunakan file screenshot WebP 1280×840 (rasio sekitar 1.5:1) dengan ukuran kecil agar website cepat.
- Jangan simpan password, data klien rahasia, file mentah berbayar, maupun token API di repository publik.
- Chrome, Firefox, Safari modern didukung; animasi menghormati pengaturan *Reduce Motion*.

## Referensi panduan resmi

- [GitHub Pages — Creating a site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Dibuat untuk **Okyy_ID** · Japanese Minimalist Portfolio
