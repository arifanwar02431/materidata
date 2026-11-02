/* =========================================================
   BANK SOAL HOTS – Representasi Data Kelas 6
   Format tiap soal:
   { l: 'C4', q: 'Pertanyaan', o: ['A','B','C','D'], a: 0, e: 'Pembahasan' }
   l = level (C4 Menganalisis, C5 Mengevaluasi, C6 Mencipta)
   a = indeks jawaban benar (0 = A, 1 = B, 2 = C, 3 = D)
   ========================================================= */

/* ---------- Stimulus ---------- */
const stimOlahraga = `<p class="stim-title">Hasil survei olahraga kesukaan siswa kelas 6A dan 6B</p>
<table class="mini"><tr><th>Olahraga</th><th>6A</th><th>6B</th></tr>
<tr><td>Sepak bola</td><td>9</td><td>7</td></tr>
<tr><td>Bulu tangkis</td><td>6</td><td>8</td></tr>
<tr><td>Renang</td><td>4</td><td>6</td></tr>
<tr><td>Basket</td><td>5</td><td>3</td></tr>
<tr><td>Voli</td><td>4</td><td>4</td></tr></table>`;

const roti = (n) => '🍞'.repeat(Math.floor(n)) + (n % 1 ? '<span class="half">🍞</span>' : '');
const stimRoti = `<p class="stim-title">Piktogram penjualan roti Toko Sari</p>
<table class="mini pikto-mini">
<tr><td>Senin</td><td>${roti(3)}</td></tr>
<tr><td>Selasa</td><td>${roti(4.5)}</td></tr>
<tr><td>Rabu</td><td>${roti(2)}</td></tr>
<tr><td>Kamis</td><td>${roti(5)}</td></tr>
<tr><td>Jumat</td><td>${roti(3.5)}</td></tr></table>
<p class="stim-note">Keterangan: 1 🍞 = 10 roti</p>`;

const stimSuhu = `<p class="stim-title">Data diagram garis suhu udara di halaman sekolah</p>
<table class="mini"><tr><th>Pukul</th><td>06.00</td><td>09.00</td><td>12.00</td><td>15.00</td><td>18.00</td></tr>
<tr><th>Suhu (°C)</th><td>24</td><td>27</td><td>32</td><td>30</td><td>26</td></tr></table>`;

const stimTransport = `<p class="stim-title">Diagram lingkaran cara 40 siswa kelas 6 berangkat ke sekolah</p>
<table class="mini"><tr><th>Cara berangkat</th><th>Persentase</th></tr>
<tr><td>Jalan kaki</td><td>25%</td></tr>
<tr><td>Bersepeda</td><td>20%</td></tr>
<tr><td>Diantar motor</td><td>40%</td></tr>
<tr><td>Naik angkot</td><td>15%</td></tr></table>`;

const stimTurus = `<p class="stim-title">Catatan turus warna mobil yang parkir di depan sekolah</p>
<table class="mini"><tr><th>Warna</th><th>Turus</th></tr>
<tr><td>Merah</td><td>3 kelompok lima dan 2 garis tegak</td></tr>
<tr><td>Putih</td><td>2 kelompok lima dan 4 garis tegak</td></tr>
<tr><td>Hitam</td><td>4 kelompok lima</td></tr></table>`;

const stimRute = `<p class="stim-title">Jarak jalan antar tempat (graf)</p>
<table class="mini"><tr><th>Jalan</th><th>Jarak</th></tr>
<tr><td>Rumah – Pasar</td><td>3 km</td></tr>
<tr><td>Rumah – Taman</td><td>2 km</td></tr>
<tr><td>Pasar – Taman</td><td>2 km</td></tr>
<tr><td>Pasar – Sekolah</td><td>4 km</td></tr>
<tr><td>Taman – Sekolah</td><td>6 km</td></tr></table>`;

const pix = (rows) => `<pre class="pix-code">${rows.join('\n')}</pre>`;

/* =========================================================
   LATIHAN 1 – Data, Jenis Data, Turus, Tabel, Diagram (Bab 1–5)
   ========================================================= */
const questions1 = [
  { l: 'C4', q: 'Rina mencatat: <i>"Hari ini hujan, suhu udara 25°C, dan 12 siswa membawa payung."</i> Analisis yang tepat tentang jenis data dalam catatan tersebut adalah …',
    o: ['Semua data termasuk kuantitatif', '"Hujan" termasuk kualitatif, sedangkan "25°C" dan "12 siswa" termasuk kuantitatif', 'Semua data termasuk kualitatif', '"12 siswa" termasuk kualitatif karena menyebut orang'],
    a: 1, e: '"Hujan" adalah keterangan keadaan (kualitatif). 25°C diperoleh dari mengukur dan 12 siswa dari menghitung, jadi keduanya kuantitatif.' },
  { l: 'C5', q: 'Nomor punggung pemain sepak bola (7, 10, 23) berupa angka. Pendapat yang paling tepat tentang jenis data ini adalah …',
    o: ['Kuantitatif, karena semua data berupa angka pasti kuantitatif', 'Kualitatif, karena angka itu hanya label/nama, bukan hasil menghitung atau mengukur', 'Kuantitatif cacah, karena berupa bilangan bulat', 'Bukan data, karena tidak bisa dijumlahkan'],
    a: 1, e: 'Data kuantitatif adalah angka hasil menghitung atau mengukur. Nomor punggung hanya penanda, tidak bermakna jika dijumlah atau dirata-rata, sehingga termasuk kualitatif.' },
  { l: 'C4', q: 'Manakah yang merupakan <b>informasi</b>, bukan sekadar data?',
    o: ['7, 8, 6, 9, 8', 'Hijau, merah, hijau, biru', 'Sebagian besar siswa kelas 6 berangkat ke sekolah dengan bersepeda', 'Tinggi badan 140 cm'],
    a: 2, e: 'Informasi adalah data yang sudah diolah sehingga punya makna (berupa kesimpulan). Pilihan lain masih berupa data mentah.' },
  { l: 'C5', q: 'Sekolah ingin memilih menu kantin baru yang disukai sebagian besar dari 300 siswa dalam waktu 2 hari. Cara mengumpulkan data yang paling efektif adalah …',
    o: ['Mewawancarai siswa satu per satu', 'Menyebarkan angket/survei kepada semua siswa', 'Mengamati menu yang dibeli siswa selama satu jam', 'Menimbang berat makanan di kantin'],
    a: 1, e: 'Angket dapat menjangkau banyak responden sekaligus dalam waktu singkat. Wawancara 300 siswa terlalu lama, sedangkan observasi satu jam belum mewakili semua siswa.' },
  { l: 'C5', q: 'Doni ingin mengetahui banyak kendaraan yang lewat di depan sekolah pukul 06.30–07.00. Cara yang paling tepat adalah …',
    o: ['Membagikan angket kepada para pengendara', 'Mewawancarai kepala sekolah', 'Mengamati langsung sambil mencatat dengan turus', 'Mencari datanya di internet'],
    a: 2, e: 'Kendaraan yang lewat harus diamati langsung (observasi). Turus memudahkan mencatat dengan cepat saat kendaraan terus berdatangan.' },
  { l: 'C6', q: 'Hasil survei menunjukkan 12 siswa menyukai kucing. Penulisan turus yang benar untuk angka 12 adalah …',
    o: ['12 garis tegak berjajar', '2 kelompok lima (4 garis tegak dicoret 1 garis miring) dan 2 garis tegak', '1 kelompok lima dan 7 garis tegak', '3 kelompok lima'],
    a: 1, e: '12 = 5 + 5 + 2. Setiap kelompok lima ditulis 4 garis tegak yang dicoret 1 garis miring.' },
  { l: 'C4', q: `${stimTurus}Selisih banyak mobil hitam dan mobil putih adalah …`,
    o: ['3 mobil', '4 mobil', '6 mobil', '2 mobil'],
    a: 2, e: 'Hitam = 4 × 5 = 20. Putih = 2 × 5 + 4 = 14. Selisih = 20 − 14 = 6 mobil.' },
  { l: 'C5', q: `${stimTurus}Setelah dicek ulang, ternyata 3 mobil merah salah dicatat sebagai mobil putih. Kesimpulan yang tepat setelah data diperbaiki adalah …`,
    o: ['Mobil merah paling banyak sendirian', 'Mobil merah dan hitam sama banyak, masing-masing 20', 'Mobil putih paling banyak', 'Mobil hitam paling banyak sendirian'],
    a: 1, e: 'Merah semula 17, ditambah 3 menjadi 20. Putih 14 − 3 = 11. Hitam tetap 20. Jadi merah dan hitam sama banyak.' },
  { l: 'C4', q: `${stimOlahraga}Pernyataan yang BENAR berdasarkan tabel adalah …`,
    o: ['Bulu tangkis paling disukai di kedua kelas', 'Jumlah siswa 6A lebih banyak daripada 6B', 'Peminat renang di 6B dua orang lebih banyak daripada di 6A', 'Basket paling sedikit peminatnya di kedua kelas'],
    a: 2, e: 'Renang 6B = 6, 6A = 4, selisih 2. Di 6A sepak bola paling disukai; jumlah siswa sama-sama 28; di 6A yang paling sedikit renang dan voli, bukan basket.' },
  { l: 'C5', q: `${stimOlahraga}Sekolah hanya mampu membuka 2 ekstrakurikuler olahraga untuk gabungan kelas 6A dan 6B, dipilih yang peminatnya paling banyak. Keputusan yang tepat adalah …`,
    o: ['Sepak bola dan basket', 'Sepak bola dan bulu tangkis', 'Bulu tangkis dan renang', 'Basket dan voli'],
    a: 1, e: 'Gabungan: sepak bola 16, bulu tangkis 14, renang 10, basket 8, voli 8. Dua terbanyak adalah sepak bola dan bulu tangkis.' },
  { l: 'C4', q: `${stimOlahraga}Jika data gabungan kedua kelas dibuat diagram lingkaran, olahraga yang juringnya tepat <b>1/7</b> lingkaran adalah …`,
    o: ['Renang', 'Basket dan voli', 'Bulu tangkis', 'Sepak bola'],
    a: 1, e: 'Total gabungan = 56. Basket = 8 dan voli = 8. 8/56 = 1/7.' },
  { l: 'C5', q: `${stimOlahraga}Diagram yang paling tepat untuk membandingkan pilihan olahraga kelas 6A dan 6B sekaligus adalah …`,
    o: ['Satu diagram lingkaran', 'Diagram garis', 'Diagram batang dengan batang 6A dan 6B berdampingan', 'Piktogram tanpa keterangan'],
    a: 2, e: 'Diagram batang berdampingan memudahkan membandingkan dua kelompok untuk setiap kategori. Diagram garis untuk perubahan waktu, satu diagram lingkaran hanya untuk satu kelompok.' },
  { l: 'C4', q: `${stimRoti}Jumlah roti yang terjual selama lima hari adalah …`,
    o: ['18 roti', '160 roti', '175 roti', '180 roti'],
    a: 3, e: '30 + 45 + 20 + 50 + 35 = 180 roti. Setengah gambar bernilai 5 roti.' },
  { l: 'C5', q: `${stimRoti}Pemilik toko ingin menambah stok pada hari penjualan tertinggi dan mengurangi stok pada hari penjualan terendah. Keputusan yang tepat adalah …`,
    o: ['Menambah stok hari Kamis dan mengurangi stok hari Rabu', 'Menambah stok hari Selasa dan mengurangi stok hari Senin', 'Menambah stok hari Jumat dan mengurangi stok hari Rabu', 'Menambah stok hari Kamis dan mengurangi stok hari Senin'],
    a: 0, e: 'Penjualan tertinggi Kamis (50 roti), terendah Rabu (20 roti).' },
  { l: 'C6', q: `${stimRoti}Jika keterangan piktogram diubah menjadi 1 🍞 = 5 roti, banyak gambar untuk hari Kamis adalah …`,
    o: ['5 gambar', '10 gambar', '25 gambar', '2½ gambar'],
    a: 1, e: 'Kamis = 5 × 10 = 50 roti. Dengan keterangan baru: 50 ÷ 5 = 10 gambar.' },
  { l: 'C6', q: `${stimRoti}Pada hari Sabtu terjual 25 roti. Cara menggambarkannya pada piktogram tersebut adalah …`,
    o: ['2 gambar', '2 gambar utuh dan setengah gambar', '25 gambar', '3 gambar'],
    a: 1, e: '25 ÷ 10 = 2,5. Jadi digambar 2 gambar utuh dan setengah gambar.' },
  { l: 'C4', q: `${stimSuhu}Kenaikan suhu terbesar terjadi pada rentang waktu …`,
    o: ['06.00–09.00', '09.00–12.00', '12.00–15.00', '15.00–18.00'],
    a: 1, e: '06–09 naik 3°C, 09–12 naik 5°C, 12–15 turun 2°C, 15–18 turun 4°C. Kenaikan terbesar pukul 09.00–12.00.' },
  { l: 'C5', q: `${stimSuhu}Diagram yang paling tepat untuk menyajikan data tersebut beserta alasannya adalah …`,
    o: ['Diagram lingkaran, karena menunjukkan bagian dari keseluruhan', 'Diagram garis, karena menunjukkan perubahan dari waktu ke waktu', 'Piktogram, karena lebih menarik', 'Diagram batang, karena suhu adalah kategori'],
    a: 1, e: 'Data suhu berubah sesuai waktu, sehingga diagram garis paling tepat untuk melihat naik-turunnya.' },
  { l: 'C5', q: `${stimSuhu}Jika pola setelah pukul 12.00 terus berlanjut, perkiraan suhu pada pukul 21.00 adalah …`,
    o: ['Lebih dari 32°C', 'Tetap 32°C', 'Lebih rendah dari 26°C', 'Tepat 30°C'],
    a: 2, e: 'Setelah pukul 12.00 suhu terus turun (32 → 30 → 26). Jika pola berlanjut, pukul 21.00 suhu lebih rendah dari 26°C.' },
  { l: 'C4', q: `${stimTransport}Selisih banyak siswa yang diantar motor dan yang bersepeda adalah …`,
    o: ['4 siswa', '6 siswa', '8 siswa', '20 siswa'],
    a: 2, e: 'Diantar motor = 40% × 40 = 16 siswa. Bersepeda = 20% × 40 = 8 siswa. Selisih = 8 siswa.' },
  { l: 'C4', q: `${stimTransport}Juring yang besar sudutnya 72° menunjukkan siswa yang …`,
    o: ['Jalan kaki', 'Bersepeda', 'Diantar motor', 'Naik angkot'],
    a: 1, e: '72° ÷ 360° = 1/5 = 20%, yaitu siswa yang bersepeda.' },
  { l: 'C5', q: `${stimTransport}Sekolah ingin mengurangi kemacetan di depan gerbang. Berdasarkan diagram, kelompok yang paling tepat diajak beralih ke cara lain adalah siswa yang …`,
    o: ['Jalan kaki', 'Bersepeda', 'Diantar motor', 'Naik angkot'],
    a: 2, e: 'Siswa yang diantar motor paling banyak (40%) dan kendaraannya berhenti di depan gerbang, sehingga paling berpengaruh pada kemacetan.' },
  { l: 'C4', q: 'Dalam diagram lingkaran buah kesukaan 36 siswa, juring apel besarnya 120°. Banyak siswa yang menyukai apel adalah …',
    o: ['10 siswa', '12 siswa', '18 siswa', '30 siswa'],
    a: 1, e: '120/360 × 36 = 1/3 × 36 = 12 siswa.' },
  { l: 'C5', q: 'Sebuah diagram lingkaran warna kesukaan berisi: merah 35%, biru 30%, hijau 25%, kuning 15%. Penilaian yang tepat tentang diagram ini adalah …',
    o: ['Sudah benar karena semua warna tercantum', 'Salah, karena jumlah persentasenya 105%, padahal seharusnya 100%', 'Salah, karena warna merah harus paling kecil', 'Sudah benar karena semua persentase di bawah 50%'],
    a: 1, e: '35 + 30 + 25 + 15 = 105%. Seluruh lingkaran hanya 100%, jadi ada data yang salah.' },
  { l: 'C5', q: 'Bayu membuat diagram batang dengan angka pada sumbu tegak: 0, 2, 4, 6, 10, 12. Kesalahan Bayu adalah …',
    o: ['Sumbu tegak tidak boleh dimulai dari 0', 'Jarak skala tidak sama karena angka 8 terlewat', 'Sumbu tegak harus berisi nama kategori', 'Angka pada sumbu tegak harus ganjil'],
    a: 1, e: 'Skala harus naik dengan selisih yang sama (0, 2, 4, 6, 8, 10, 12). Jika 8 terlewat, tinggi batang menjadi menyesatkan.' },
  { l: 'C5', q: 'Sinta membuat piktogram jumlah buku perpustakaan, tetapi lupa menuliskan keterangannya. Akibat yang paling mungkin adalah …',
    o: ['Piktogram tetap bisa dibaca dengan tepat', 'Pembaca tidak tahu nilai satu gambar, sehingga jumlah buku sebenarnya tidak dapat diketahui', 'Gambar pada piktogram akan hilang', 'Piktogram berubah menjadi diagram batang'],
    a: 1, e: 'Keterangan menunjukkan nilai satu gambar. Tanpa keterangan, 3 gambar bisa berarti 3, 30, atau 300 buku.' },
  { l: 'C5', q: 'Manakah pasangan data dan diagram yang <b>TIDAK</b> tepat?',
    o: ['Tinggi tanaman setiap minggu – diagram garis', 'Persentase golongan darah siswa – diagram lingkaran', 'Jumlah siswa setiap kelas – diagram batang', 'Perubahan berat badan bayi setiap bulan – diagram lingkaran'],
    a: 3, e: 'Perubahan berat bayi dari bulan ke bulan adalah data perubahan waktu, seharusnya memakai diagram garis.' },
  { l: 'C6', q: 'Tabungan Ani (dalam ribuan rupiah) pada diagram batang: Januari 20, Februari 35, Maret 30, April 45. Ani ingin total tabungan Januari–Mei menjadi Rp175.000. Tabungan yang harus dikumpulkan pada bulan Mei adalah …',
    o: ['Rp35.000', 'Rp40.000', 'Rp45.000', 'Rp50.000'],
    a: 2, e: 'Januari–April = 20 + 35 + 30 + 45 = 130 ribu. Kekurangan = 175 − 130 = 45 ribu.' },
  { l: 'C5', q: 'Survei di kelas 6A (28 siswa) menunjukkan sepak bola paling disukai. Riko lalu menyimpulkan, <i>"Sepak bola adalah olahraga yang paling disukai seluruh siswa SD di Indonesia."</i> Penilaian yang tepat terhadap kesimpulan Riko adalah …',
    o: ['Tepat, karena datanya berasal dari survei', 'Kurang tepat, karena data hanya dari satu kelas sehingga tidak mewakili seluruh siswa SD di Indonesia', 'Tepat, karena 28 siswa sudah banyak', 'Kurang tepat, karena seharusnya memakai diagram garis'],
    a: 1, e: 'Kesimpulan hanya berlaku untuk kelompok yang disurvei. Untuk seluruh Indonesia diperlukan data dari banyak sekolah dan daerah.' },
  { l: 'C6', q: 'Guru ingin membuat tabel nilai 3 mata pelajaran (Matematika, IPAS, Bahasa Indonesia) untuk 30 siswa agar mudah dibaca. Rancangan tabel yang paling tepat adalah …',
    o: ['Satu kolom berisi semua nama dan nilai yang ditulis berurutan', 'Baris berisi nama siswa, kolom berisi mata pelajaran, dan sel berisi nilai', 'Setiap siswa dibuatkan diagram lingkaran sendiri', 'Nilai ditulis acak tanpa judul kolom'],
    a: 1, e: 'Setiap baris mewakili satu siswa dan setiap kolom satu mata pelajaran, sehingga nilai mudah dicari dan dibandingkan.' },
];

/* =========================================================
   LATIHAN 2 – Simbol, Biner, Piksel, Struktur Data, Membaca Data (Bab 6–10)
   ========================================================= */
const questions2 = [
  { l: 'C5', q: 'Rambu lalu lintas umumnya menggunakan gambar atau simbol, bukan tulisan panjang. Alasan yang paling tepat adalah …',
    o: ['Agar rambu terlihat lebih berwarna', 'Agar pesan cepat dipahami pengendara, bahkan oleh orang yang berbeda bahasa', 'Agar biaya membuat rambu lebih murah', 'Agar hanya polisi yang memahaminya'],
    a: 1, e: 'Simbol menyampaikan informasi dengan singkat dan dipahami lintas bahasa, penting bagi pengendara yang harus memutuskan dengan cepat.' },
  { l: 'C4', q: 'Dengan kode A=1, B=2, … Z=26, Rani ingin menulis kata <b>KAMU</b>, tetapi temannya membacanya sebagai <b>KAUM</b>. Kode yang ditulis Rani dan kesalahannya adalah …',
    o: ['11-1-21-13, urutan dua huruf terakhir tertukar', '11-1-13-21, tidak ada kesalahan', '12-1-13-21, huruf pertama salah', '11-2-21-13, huruf kedua salah'],
    a: 0, e: 'KAMU = 11-1-13-21. Jika ditulis 11-1-21-13, terbaca K-A-U-M. Huruf M (13) dan U (21) tertukar.' },
  { l: 'C4', q: 'Sebuah sandi menggeser setiap huruf satu langkah ke depan (A→B, B→C, dan seterusnya). Pesan sandi <b>LPEJOH</b> artinya …',
    o: ['KODING', 'MQFKPI', 'LODING', 'KOPING'],
    a: 0, e: 'Untuk membaca, setiap huruf digeser satu langkah ke belakang: L→K, P→O, E→D, J→I, O→N, H→G = KODING.' },
  { l: 'C6', q: 'Dengan aturan sandi yang sama (setiap huruf digeser satu langkah ke depan), kata <b>DATA</b> ditulis menjadi …',
    o: ['EBUB', 'CZSZ', 'EBTB', 'DBUB'],
    a: 0, e: 'D→E, A→B, T→U, A→B = EBUB.' },
  { l: 'C4', q: 'Kamu memiliki kartu biner bernilai 16, 8, 4, 2, 1. Untuk membentuk angka 19, susunan kartu (1 = terbuka, 0 = tertutup) adalah …',
    o: ['10011', '10101', '11001', '10110'],
    a: 0, e: '19 = 16 + 2 + 1. Kartu 16, 2, dan 1 terbuka: 1 0 0 1 1.' },
  { l: 'C4', q: 'Dengan 5 kartu biner (16, 8, 4, 2, 1), angka terbesar yang dapat dibentuk adalah …',
    o: ['16', '25', '31', '32'],
    a: 2, e: 'Semua kartu terbuka: 16 + 8 + 4 + 2 + 1 = 31 (biner 11111).' },
  { l: 'C4', q: 'Untuk menuliskan bilangan desimal 40 dalam biner, paling sedikit dibutuhkan … digit.',
    o: ['4', '5', '6', '8'],
    a: 2, e: '40 = 32 + 8 = 101000₂, yaitu 6 digit. Dengan 5 digit, nilai terbesar hanya 31.' },
  { l: 'C4', q: 'Manakah bilangan biner yang nilainya paling besar?',
    o: ['1001', '0111', '1010', '0110'],
    a: 2, e: '1001 = 9, 0111 = 7, 1010 = 10, 0110 = 6. Yang terbesar 1010.' },
  { l: 'C4', q: 'Perhatikan pola bilangan biner berikut: 1, 10, 11, 100, 101, … Bilangan berikutnya adalah …',
    o: ['102', '110', '111', '1000'],
    a: 1, e: 'Pola tersebut adalah 1, 2, 3, 4, 5 dalam biner. Berikutnya 6 = 110.' },
  { l: 'C5', q: 'Bimo mengerjakan soal: <i>"1100₂ = 1 + 1 + 0 + 0 = 2"</i>. Penilaian yang tepat terhadap jawaban Bimo adalah …',
    o: ['Benar, karena angka 1 dijumlahkan', 'Salah, karena setiap angka harus dikalikan nilai tempatnya; jawaban yang benar 12', 'Salah, jawaban yang benar 1100', 'Salah, jawaban yang benar 4'],
    a: 1, e: '1100₂ = 1×8 + 1×4 + 0×2 + 0×1 = 12. Bimo lupa mengalikan dengan nilai tempat.' },
  { l: 'C4', q: 'Lima lampu berjajar mewakili bilangan biner (menyala = 1, mati = 0). Urutan lampu: 💡 ⚫ 💡 💡 ⚫. Bilangan desimal yang ditunjukkan adalah …',
    o: ['11', '13', '22', '26'],
    a: 2, e: '10110₂ = 16 + 0 + 4 + 2 + 0 = 22.' },
  { l: 'C5', q: 'Jika digit paling kanan sebuah bilangan biner diubah dari 0 menjadi 1, maka nilai bilangan tersebut akan …',
    o: ['Bertambah 1', 'Menjadi dua kali lipat', 'Berkurang 1', 'Tidak berubah'],
    a: 0, e: 'Digit paling kanan bernilai tempat 1. Mengubahnya dari 0 ke 1 menambah nilai sebesar 1.' },
  { l: 'C4', q: 'Bilangan biner 101 ditambah angka 0 di ujung kanan menjadi 1010. Perubahan nilainya adalah …',
    o: ['Bertambah 1', 'Menjadi dua kali lipat', 'Menjadi sepuluh kali lipat', 'Tidak berubah'],
    a: 1, e: '101₂ = 5 dan 1010₂ = 10. Menambah 0 di kanan membuat setiap digit naik satu nilai tempat, jadi nilainya dua kali lipat.' },
  { l: 'C4', q: 'Dalam kode ASCII, huruf A = 65 = 01000001 dan B = 66 = 01000010. Berdasarkan pola tersebut, huruf C ditulis …',
    o: ['01000011', '01000010', '01000100', '01000111'],
    a: 0, e: 'C = 67 = 64 + 2 + 1 = 01000011.' },
  { l: 'C4', q: `Perhatikan kode gambar piksel berikut (1 = hitam, 0 = putih).${pix(['00100', '01110', '11111', '01110', '00100'])}Gambar yang terbentuk adalah …`,
    o: ['Huruf T', 'Belah ketupat', 'Garis tegak', 'Persegi'],
    a: 1, e: 'Piksel hitam melebar dari atas ke tengah lalu menyempit lagi, membentuk belah ketupat (wajik).' },
  { l: 'C6', q: 'Kamu ingin menggambar huruf <b>L</b> pada kotak 4×4 (kolom paling kiri dan baris paling bawah berwarna hitam). Kode yang tepat adalah … (tanda / berarti pindah baris)',
    o: ['1000 / 1000 / 1000 / 1111', '0001 / 0001 / 0001 / 1111', '1111 / 1000 / 1000 / 1000', '1111 / 0001 / 0001 / 0001'],
    a: 0, e: 'Tiga baris atas hanya kolom kiri yang hitam (1000), baris bawah semua hitam (1111).' },
  { l: 'C4', q: `Perhatikan kode piksel berikut.${pix(['1111', '1001', '1001', '1111'])}Banyak piksel hitam dan bentuk gambarnya adalah …`,
    o: ['8 piksel, persegi penuh', '12 piksel, bingkai persegi', '16 piksel, persegi penuh', '4 piksel, titik di tengah'],
    a: 1, e: 'Baris 1 dan 4 masing-masing 4, baris 2 dan 3 masing-masing 2. Total 12 piksel hitam membentuk bingkai persegi.' },
  { l: 'C4', q: 'Gambar hitam-putih berukuran 8 × 8 piksel. Jika setiap piksel memerlukan 1 bit, ukuran gambar tersebut adalah …',
    o: ['8 bit', '16 bit', '8 byte', '64 byte'],
    a: 2, e: '8 × 8 = 64 piksel = 64 bit. 64 ÷ 8 = 8 byte.' },
  { l: 'C5', q: 'Jika semua angka pada kode gambar piksel dibalik (1 menjadi 0 dan 0 menjadi 1), maka gambar akan …',
    o: ['Terbalik atas-bawah', 'Warna hitam dan putih saling bertukar', 'Menjadi berwarna', 'Tidak berubah'],
    a: 1, e: 'Piksel hitam berubah menjadi putih dan sebaliknya, seperti gambar negatif. Posisi gambar tetap.' },
  { l: 'C4', q: 'Sebuah gambar dicerminkan kiri-kanan. Jika satu barisnya semula berkode <b>1100</b>, setelah dicerminkan kodenya menjadi …',
    o: ['0011', '1100', '0110', '1001'],
    a: 0, e: 'Dicerminkan kiri-kanan berarti urutan digit dalam baris dibalik: 1100 → 0011.' },
  { l: 'C5', q: 'Foto A berukuran 100 × 100 piksel dan foto B berukuran 400 × 400 piksel dengan objek yang sama. Pernyataan yang tepat adalah …',
    o: ['Foto A lebih tajam dan ukuran filenya lebih besar', 'Foto B lebih tajam, tetapi ukuran filenya lebih besar', 'Keduanya sama tajam karena objeknya sama', 'Foto B lebih buram karena pikselnya terlalu banyak'],
    a: 1, e: 'Semakin banyak piksel (resolusi tinggi), gambar semakin tajam, tetapi data yang disimpan juga semakin besar.' },
  { l: 'C5', q: 'Data jadwal pelajaran berisi hari (Senin–Jumat) dan jam pelajaran ke-1 sampai ke-6. Struktur data yang paling tepat untuk menyimpannya adalah …',
    o: ['Pohon', 'Graf', 'Tabel', 'Tumpukan'],
    a: 2, e: 'Data memiliki dua keterangan sekaligus (hari dan jam), paling mudah disusun dalam baris dan kolom (tabel).' },
  { l: 'C4', q: 'Di komputer, file <b>Tugas.docx</b> tersimpan di dalam folder Kelas6, yang berada di dalam folder Sekolah, yang berada di dalam folder Dokumen. Jenis struktur data dan jalur yang benar adalah …',
    o: ['Graf: Tugas.docx → Kelas6 → Sekolah → Dokumen', 'Pohon: Dokumen → Sekolah → Kelas6 → Tugas.docx', 'Daftar: Sekolah → Dokumen → Kelas6 → Tugas.docx', 'Pohon: Kelas6 → Dokumen → Sekolah → Tugas.docx'],
    a: 1, e: 'Folder bercabang dari atas ke bawah membentuk pohon. Jalurnya dimulai dari folder paling luar (akar).' },
  { l: 'C5', q: `${stimRute}Rute terpendek dari Rumah ke Sekolah adalah …`,
    o: ['Rumah → Taman → Sekolah (8 km)', 'Rumah → Pasar → Sekolah (7 km)', 'Rumah → Taman → Pasar → Sekolah (8 km)', 'Rumah → Pasar → Taman → Sekolah (11 km)'],
    a: 1, e: 'Rumah–Pasar–Sekolah = 3 + 4 = 7 km. Rute lain 8 km atau 11 km.' },
  { l: 'C4', q: 'Graf pertemanan: Ani berteman dengan Budi dan Citra; Budi berteman dengan Dodi; Citra berteman dengan Dodi dan Eka. Siswa yang memiliki teman paling banyak adalah …',
    o: ['Ani', 'Budi', 'Citra', 'Dodi'],
    a: 2, e: 'Citra terhubung dengan Ani, Dodi, dan Eka (3 teman). Ani, Budi, dan Dodi masing-masing 2 teman, Eka 1 teman.' },
  { l: 'C4', q: 'Di loket tiket, A, B, dan C mengantre berurutan. Satu orang dilayani, lalu D datang mengantre, kemudian satu orang lagi dilayani. Siapa yang sekarang berada paling depan?',
    o: ['A', 'B', 'C', 'D'],
    a: 2, e: 'Antrean: A, B, C → A dilayani → B, C → D masuk → B, C, D → B dilayani → C, D. Paling depan C.' },
  { l: 'C4', q: 'Buku ditumpuk berurutan: Matematika, IPAS, Bahasa. Satu buku diambil dari atas, lalu buku Seni ditaruh, kemudian satu buku diambil lagi dari atas. Buku yang sekarang paling atas adalah …',
    o: ['Matematika', 'IPAS', 'Bahasa', 'Seni'],
    a: 1, e: 'Tumpukan: M, I, B → B diambil → M, I → Seni ditaruh → M, I, S → S diambil → M, I. Paling atas IPAS.' },
  { l: 'C6', q: 'Nilai lima siswa adalah 7, 8, 8, 9, dan satu nilai yang hilang. Jika rata-ratanya 8, nilai yang hilang adalah …',
    o: ['6', '7', '8', '9'],
    a: 2, e: 'Total = 8 × 5 = 40. Jumlah yang diketahui = 7 + 8 + 8 + 9 = 32. Nilai yang hilang = 40 − 32 = 8.' },
  { l: 'C5', q: 'Uang saku lima siswa (dalam ribuan rupiah): 5, 5, 6, 6, 28. Ukuran yang paling tepat untuk menggambarkan uang saku kebanyakan siswa adalah …',
    o: ['Rata-rata (10 ribu), karena semua data dihitung', 'Median (6 ribu), karena tidak terpengaruh nilai 28 yang jauh berbeda', 'Nilai tertinggi (28 ribu)', 'Jangkauan (23 ribu)'],
    a: 1, e: 'Rata-rata = 50 ÷ 5 = 10 ribu, padahal 4 dari 5 siswa uang sakunya hanya 5–6 ribu. Median 6 ribu lebih mewakili karena tidak terpengaruh nilai ekstrem.' },
  { l: 'C5', q: 'Nilai enam siswa: 70, 75, 80, 80, 85, 90. Kemudian seorang siswa baru dengan nilai 100 bergabung. Yang terjadi pada rata-rata dan median adalah …',
    o: ['Rata-rata naik, median tetap', 'Rata-rata tetap, median naik', 'Keduanya turun', 'Keduanya tetap'],
    a: 0, e: 'Sebelum: rata-rata 480 ÷ 6 = 80, median (80 + 80) ÷ 2 = 80. Sesudah: rata-rata 580 ÷ 7 ≈ 82,9 (naik), median data ke-4 = 80 (tetap).' },
];
