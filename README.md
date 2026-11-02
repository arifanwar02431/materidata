# 📊 Representasi Data – Koding Kelas 6

Website materi **Koding & Kecerdasan Artifisial kelas 6** bab **Representasi Data**, lengkap dengan alat interaktif dan dua latihan soal HOTS.

## Isi Materi
1. Apa itu data & informasi
2. Jenis data (kualitatif & kuantitatif) + game tebak jenis data
3. Mengumpulkan data & turus (penghitung turus interaktif)
4. Tabel (bisa diedit, otomatis memperbarui diagram)
5. Diagram: piktogram, batang, garis, lingkaran
   - ✏️ **Latihan 1**: Data, Tabel & Diagram (30 soal HOTS, Bab 1–5)
6. Simbol & kode (mesin kode huruf ↔ angka)
7. Bilangan biner (kartu biner, konversi desimal ↔ biner)
8. Gambar digital & piksel (studio piksel 8×8)
9. Struktur data: daftar, antrean, tumpukan, tabel, pohon, graf
10. Membaca data: rata-rata, median, modus, jangkauan (kalkulator data)
   - ✏️ **Latihan 2**: Simbol, Biner, Piksel & Struktur Data (30 soal HOTS, Bab 6–10)
11. Glosarium dengan pencarian

## Struktur File
```
index.html   → halaman utama
style.css    → tampilan
soal.js      → bank soal Latihan 1 & 2
script.js    → fitur interaktif
```
Tidak perlu instalasi atau build. Cukup buka `index.html` di browser.

## Upload ke GitHub
1. Buat repository baru di GitHub (misal `representasi-data`).
2. Klik **Add file → Upload files**, lalu upload `index.html`, `style.css`, `soal.js`, `script.js`, dan `README.md`.
3. Klik **Commit changes**.

## Deploy di Vercel
1. Login ke [vercel.com](https://vercel.com) dengan akun GitHub.
2. Klik **Add New… → Project**, pilih repository tadi, klik **Import**.
3. Pada **Framework Preset**, pilih **Other**. Biarkan Build Command dan Output Directory kosong.
4. Klik **Deploy**. Selesai! Website akan mendapat alamat seperti `representasi-data.vercel.app`.

Setiap kali file di GitHub diubah, Vercel otomatis memperbarui website.

## Mengubah Soal
Soal ada di `soal.js`: `const questions1 = [ ... ]` untuk Latihan 1 dan `const questions2 = [ ... ]` untuk Latihan 2. Format tiap soal:
```js
{ l: 'C4', q: 'Pertanyaan …', o: ['Pilihan A', 'Pilihan B', 'Pilihan C', 'Pilihan D'], a: 1, e: 'Pembahasan' },
```
`l` adalah level HOTS: C4 (Menganalisis), C5 (Mengevaluasi), C6 (Mencipta).
`a` adalah indeks jawaban benar (0 = A, 1 = B, 2 = C, 3 = D).
