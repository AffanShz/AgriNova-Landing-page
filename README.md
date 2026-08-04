# AgriNova Landing Page

Landing page AgriNova — aplikasi agritech AI untuk deteksi penyakit tanaman, cuaca real-time, dan jadwal tanam bagi petani Indonesia. Dibangun dengan [Astro](https://astro.build) + Tailwind CSS 4.

## Persyaratan

- Node.js >= 22.12

## Menjalankan

```sh
npm install
npm run dev        # server dev di localhost:4321
```

## Perintah

| Perintah                 | Aksi                                                              |
| :----------------------- | :---------------------------------------------------------------- |
| `npm run dev`            | Jalankan server dev                                                |
| `npm run build`          | Build produksi ke `./dist/`                                        |
| `npm run preview`        | Preview hasil build lokal                                          |
| `npm run check`          | Type-check & validasi komponen (`astro check`)                     |
| `npm run assets:rasterize` | Regenerate `*.webp` dari SVG di `src/assets`                     |

## Struktur

```
src/
├── assets/          # SVG sumber + webp hasil rasterisasi
├── components/      # Nav, ScanDemo, FeatureCard, ContourDivider, Icon, Footer
├── layouts/         # Layout.astro (head, SEO, meta sosial)
├── lib/site.ts      # Konstanta bersama (URL unduh, domain)
├── pages/index.astro
└── styles/global.css # Token desain (warna, tipografi, motion)
```

## Desain

Panduan desain lengkap ada di `design.md` — baca sebelum mengubah komponen apa pun.
