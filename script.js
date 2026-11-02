/* =========================================================
   Representasi Data – Kelas 6
   Semua fitur interaktif ada di file ini.
   ========================================================= */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ---------- Navigasi ---------- */
$('#navToggle').addEventListener('click', () => $('#navLinks').classList.toggle('open'));
$$('#navLinks a').forEach((a) => a.addEventListener('click', () => $('#navLinks').classList.remove('open')));
const toTop = $('#toTop');
window.addEventListener('scroll', () => toTop.classList.toggle('show', window.scrollY > 600));
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- Turus ---------- */
function tallyHTML(n) {
  let html = '';
  const fives = Math.floor(n / 5);
  const rest = n % 5;
  for (let i = 0; i < fives; i++) html += '<span class="tally-group five">||||</span>';
  if (rest) html += `<span class="tally-group">${'|'.repeat(rest)}</span>`;
  return html || '<span class="muted">–</span>';
}
$$('.tally-cell').forEach((td) => (td.innerHTML = tallyHTML(Number(td.dataset.tally))));

let tallyCount = 0;
function renderTally() {
  $('#tallyDisplay').innerHTML = tallyHTML(tallyCount);
  $('#tallyNum').textContent = tallyCount;
}
$('#tallyAdd').addEventListener('click', () => { if (tallyCount < 60) tallyCount++; renderTally(); });
$('#tallySub').addEventListener('click', () => { if (tallyCount > 0) tallyCount--; renderTally(); });
$('#tallyReset').addEventListener('click', () => { tallyCount = 0; renderTally(); });
renderTally();

/* ---------- Tebak jenis data ---------- */
const sortItems = [
  { t: 'Warna tas kesukaan', a: 'kualitatif' },
  { t: 'Tinggi badan 142 cm', a: 'kuantitatif' },
  { t: 'Jumlah buku di rak: 25', a: 'kuantitatif' },
  { t: 'Nama hewan peliharaan', a: 'kualitatif' },
  { t: 'Suhu badan 36,5°C', a: 'kuantitatif' },
  { t: 'Rasa es krim kesukaan', a: 'kualitatif' },
  { t: 'Nilai ulangan IPAS: 88', a: 'kuantitatif' },
  { t: 'Cita-cita siswa', a: 'kualitatif' },
];
const sortState = {};
function renderSorter() {
  $('#sorter').innerHTML = sortItems.map((it, i) => {
    const s = sortState[i];
    const cls = s === undefined ? '' : (s === it.a ? 'correct' : 'wrong');
    const mark = s === undefined ? '' : (s === it.a ? ' ✅' : ` ❌ (jawaban: ${it.a})`);
    return `<div class="sort-item ${cls}">
      <span><b>${it.t}</b>${mark}</span>
      <span class="btn-row" style="margin:0">
        <button class="btn btn-ghost" data-i="${i}" data-v="kualitatif">Kualitatif</button>
        <button class="btn btn-ghost" data-i="${i}" data-v="kuantitatif">Kuantitatif</button>
      </span></div>`;
  }).join('');
  const answered = Object.keys(sortState).length;
  const right = Object.entries(sortState).filter(([i, v]) => sortItems[i].a === v).length;
  $('#sorterScore').textContent = answered ? `Skor: ${right} benar dari ${answered} dijawab (total ${sortItems.length}).` : '';
}
$('#sorter').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  sortState[b.dataset.i] = b.dataset.v;
  renderSorter();
});
renderSorter();

/* ---------- Data buah (tabel + diagram) ---------- */
const defaultFruits = [
  { name: 'Apel', icon: '🍎', value: 8, color: '#ef4444' },
  { name: 'Jeruk', icon: '🍊', value: 6, color: '#f97316' },
  { name: 'Mangga', icon: '🥭', value: 10, color: '#eab308' },
  { name: 'Pisang', icon: '🍌', value: 4, color: '#65a30d' },
  { name: 'Anggur', icon: '🍇', value: 2, color: '#8b5cf6' },
];
let fruits = defaultFruits.map((f) => ({ ...f }));

function buildFruitTable() {
  $('#fruitTable').innerHTML = fruits.map((f, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${f.icon} ${f.name}</td>
      <td class="tally-cell" id="tally-${i}"></td>
      <td><input type="number" min="0" max="30" value="${f.value}" data-i="${i}" aria-label="Jumlah ${f.name}"></td>
    </tr>`).join('');
}
$('#fruitTable').addEventListener('input', (e) => {
  const inp = e.target.closest('input[data-i]');
  if (!inp) return;
  let v = parseInt(inp.value, 10);
  if (isNaN(v) || v < 0) v = 0;
  if (v > 30) { v = 30; inp.value = 30; }
  fruits[inp.dataset.i].value = v;
  updateFruitViews();
});
$('#fruitReset').addEventListener('click', () => {
  fruits = defaultFruits.map((f) => ({ ...f }));
  buildFruitTable();
  updateFruitViews();
});

function updateFruitViews() {
  const total = fruits.reduce((s, f) => s + f.value, 0);
  fruits.forEach((f, i) => ($(`#tally-${i}`).innerHTML = tallyHTML(f.value)));
  $('#fruitTotal').textContent = total;

  const sorted = [...fruits].sort((a, b) => b.value - a.value);
  const maxV = sorted[0].value;
  const minV = sorted[sorted.length - 1].value;
  const most = fruits.filter((f) => f.value === maxV).map((f) => f.name).join(', ');
  const least = fruits.filter((f) => f.value === minV).map((f) => f.name).join(', ');
  $('#fruitInsight').innerHTML = `<b>💡 Informasi dari tabel:</b><ul>
    <li>Paling banyak disukai: <b>${most}</b> (${maxV} siswa)</li>
    <li>Paling sedikit disukai: <b>${least}</b> (${minV} siswa)</li>
    <li>Selisih terbanyak dan tersedikit: ${maxV} − ${minV} = <b>${maxV - minV}</b> siswa</li>
    <li>Jumlah seluruh siswa: <b>${total}</b></li>
    <li>Urutan dari terbanyak: ${sorted.map((f) => `${f.name} (${f.value})`).join(' → ')}</li></ul>`;

  renderPictogram();
  renderBar();
  renderPie(total);
}

function renderPictogram() {
  $('#pictogram').innerHTML = fruits.map((f) => {
    const full = Math.floor(f.value / 2);
    const half = f.value % 2;
    const icons = f.icon.repeat(full) + (half ? `<span class="half">${f.icon}</span>` : '');
    return `<div class="pikto-row"><b>${f.name}</b><span class="pikto-icons">${icons || '<span class="muted" style="font-size:1rem">(0)</span>'}</span></div>`;
  }).join('');
}

function renderBar() {
  const W = 520, H = 320, padL = 48, padR = 16, padT = 24, padB = 50;
  const cw = W - padL - padR, ch = H - padT - padB;
  const max = Math.max(10, ...fruits.map((f) => f.value));
  const step = max > 20 ? 5 : 2;
  const top = Math.ceil(max / step) * step;
  let s = '';
  for (let v = 0; v <= top; v += step) {
    const y = padT + ch - (v / top) * ch;
    s += `<line class="grid" x1="${padL}" x2="${W - padR}" y1="${y}" y2="${y}"/>`;
    s += `<text class="axis-label" x="${padL - 8}" y="${y + 4}" text-anchor="end">${v}</text>`;
  }
  const bw = cw / fruits.length;
  fruits.forEach((f, i) => {
    const h = (f.value / top) * ch;
    const x = padL + i * bw + bw * 0.18;
    const y = padT + ch - h;
    const w = bw * 0.64;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${f.color}"><title>${f.name}: ${f.value} siswa</title></rect>`;
    s += `<text class="bar-val" x="${x + w / 2}" y="${y - 6}" text-anchor="middle">${f.value}</text>`;
    s += `<text class="axis-label" x="${x + w / 2}" y="${padT + ch + 20}" text-anchor="middle">${f.name}</text>`;
  });
  s += `<line class="axis" x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + ch}"/>`;
  s += `<line class="axis" x1="${padL}" y1="${padT + ch}" x2="${W - padR}" y2="${padT + ch}"/>`;
  s += `<text class="axis-label" transform="translate(14 ${padT + ch / 2}) rotate(-90)" text-anchor="middle">Jumlah siswa</text>`;
  s += `<text class="axis-label" x="${padL + cw / 2}" y="${H - 6}" text-anchor="middle">Jenis buah</text>`;
  $('#barChart').innerHTML = s;
}

function renderPie(total) {
  const svg = $('#pieChart');
  const cx = 150, cy = 150, r = 135;
  if (!total) {
    svg.innerHTML = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#e5e7eb"/><text x="150" y="155" text-anchor="middle" class="axis-label">Belum ada data</text>`;
    $('#pieLegend').innerHTML = '';
    return;
  }
  let angle = -90;
  let s = '';
  let labels = '';
  fruits.forEach((f) => {
    if (!f.value) return;
    const deg = (f.value / total) * 360;
    if (deg >= 359.99) {
      s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f.color}"/>`;
    } else {
      const a1 = (angle * Math.PI) / 180;
      const a2 = ((angle + deg) * Math.PI) / 180;
      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
      const large = deg > 180 ? 1 : 0;
      s += `<path d="M${cx},${cy} L${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${large} 1 ${x2.toFixed(2)},${y2.toFixed(2)} Z" fill="${f.color}" stroke="#fff" stroke-width="2"><title>${f.name}: ${f.value}</title></path>`;
    }
    if (deg > 18) {
      const mid = ((angle + deg / 2) * Math.PI) / 180;
      const lx = cx + r * 0.62 * Math.cos(mid), ly = cy + r * 0.62 * Math.sin(mid);
      labels += `<text class="pie-label" x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" text-anchor="middle">${round1((f.value / total) * 100)}%</text>`;
    }
    angle += deg;
  });
  svg.innerHTML = s + labels;
  $('#pieLegend').innerHTML = fruits.map((f) => {
    const pct = round1((f.value / total) * 100);
    const deg = round1((f.value / total) * 360);
    return `<div><span class="swatch" style="background:${f.color}"></span><span><b>${f.name}</b>: ${f.value} siswa · ${pct}% · ${deg}°</span></div>`;
  }).join('');
}

function round1(x) {
  return Math.round(x * 10) / 10;
}

function renderLine() {
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  const vals = [2, 3, 5, 6, 8];
  const W = 520, H = 320, padL = 48, padR = 24, padT = 24, padB = 50;
  const cw = W - padL - padR, ch = H - padT - padB;
  const top = 10;
  let s = '';
  for (let v = 0; v <= top; v += 2) {
    const y = padT + ch - (v / top) * ch;
    s += `<line class="grid" x1="${padL}" x2="${W - padR}" y1="${y}" y2="${y}"/>`;
    s += `<text class="axis-label" x="${padL - 8}" y="${y + 4}" text-anchor="end">${v}</text>`;
  }
  const gap = cw / (days.length - 1);
  const pts = vals.map((v, i) => [padL + i * gap, padT + ch - (v / top) * ch]);
  s += `<polyline points="${pts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="#16a34a" stroke-width="4" stroke-linejoin="round"/>`;
  pts.forEach(([x, y], i) => {
    s += `<circle cx="${x}" cy="${y}" r="7" fill="#fff" stroke="#16a34a" stroke-width="4"><title>${days[i]}: ${vals[i]} cm</title></circle>`;
    s += `<text class="bar-val" x="${x}" y="${y - 14}" text-anchor="middle">${vals[i]}</text>`;
    s += `<text class="axis-label" x="${x}" y="${padT + ch + 20}" text-anchor="middle">${days[i]}</text>`;
  });
  s += `<line class="axis" x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + ch}"/>`;
  s += `<line class="axis" x1="${padL}" y1="${padT + ch}" x2="${W - padR}" y2="${padT + ch}"/>`;
  s += `<text class="axis-label" transform="translate(14 ${padT + ch / 2}) rotate(-90)" text-anchor="middle">Tinggi (cm)</text>`;
  s += `<text class="axis-label" x="${padL + cw / 2}" y="${H - 6}" text-anchor="middle">Hari</text>`;
  $('#lineChart').innerHTML = s;
}

buildFruitTable();
updateFruitViews();
renderLine();

/* ---------- Tabs ---------- */
$$('.tab').forEach((t) => t.addEventListener('click', () => {
  $$('.tab').forEach((x) => x.classList.remove('active'));
  $$('.tab-panel').forEach((x) => x.classList.remove('active'));
  t.classList.add('active');
  $('#' + t.dataset.tab).classList.add('active');
}));

/* ---------- Kode huruf ↔ angka ---------- */
function encodeText(str) {
  return str.toUpperCase().split(' ').filter(Boolean).map((word) =>
    word.split('').map((ch) => {
      const c = ch.charCodeAt(0);
      return c >= 65 && c <= 90 ? c - 64 : ch;
    }).join('-')
  ).join('  /  ');
}
function decodeText(str) {
  return str.split('/').map((word) =>
    word.split(/[-,\s]+/).filter(Boolean).map((n) => {
      const v = parseInt(n, 10);
      return v >= 1 && v <= 26 ? String.fromCharCode(64 + v) : '?';
    }).join('')
  ).join(' ');
}
function updateCodes() {
  $('#encOutput').textContent = encodeText($('#encInput').value) || '–';
  $('#decOutput').textContent = decodeText($('#decInput').value) || '–';
}
$('#encInput').addEventListener('input', updateCodes);
$('#decInput').addEventListener('input', updateCodes);
$('#alphaTable').innerHTML = Array.from({ length: 26 }, (_, i) => `<div>${String.fromCharCode(65 + i)} = ${i + 1}</div>`).join('');
updateCodes();

/* ---------- Kartu biner ---------- */
const binValues = [16, 8, 4, 2, 1];
const binBits = [0, 0, 0, 0, 0];
let binTarget = 13;
function renderBinCards() {
  $('#binCards').innerHTML = binValues.map((v, i) => `
    <button class="bin-card ${binBits[i] ? '' : 'off'}" data-i="${i}" aria-label="Kartu ${v}, ${binBits[i] ? 'terbuka' : 'tertutup'}">
      <span class="dots">${'<span class="dot"></span>'.repeat(v)}</span>
      <span class="lbl">${v}</span>
      <span class="bit">${binBits[i]}</span>
    </button>`).join('');
  const value = binBits.reduce((s, b, i) => s + b * binValues[i], 0);
  $('#binString').textContent = binBits.join('');
  $('#binValue').textContent = value;
  const fb = $('#binFeedback');
  if (value === binTarget) {
    fb.textContent = '🎉 Hebat! Benar!';
    fb.className = 'feedback ok';
  } else {
    fb.textContent = '';
    fb.className = 'feedback';
  }
}
$('#binCards').addEventListener('click', (e) => {
  const c = e.target.closest('.bin-card');
  if (!c) return;
  const i = Number(c.dataset.i);
  binBits[i] = binBits[i] ? 0 : 1;
  renderBinCards();
});
$('#binNew').addEventListener('click', () => {
  let n;
  do { n = 1 + Math.floor(Math.random() * 31); } while (n === binTarget);
  binTarget = n;
  $('#binTarget').textContent = n;
  renderBinCards();
});
renderBinCards();

/* ---------- Konversi ---------- */
function updateDecToBin() {
  let n = parseInt($('#decToBin').value, 10);
  const box = $('#decToBinSteps');
  if (isNaN(n) || n < 0 || n > 255) { box.innerHTML = 'Masukkan bilangan 0 sampai 255.'; return; }
  if (n === 0) { box.innerHTML = '<div class="final">0 desimal = 0 biner</div>'; return; }
  const orig = n;
  const rows = [];
  const rems = [];
  while (n > 0) {
    const q = Math.floor(n / 2), r = n % 2;
    rows.push(`${n} ÷ 2 = ${q} sisa <b>${r}</b>`);
    rems.push(r);
    n = q;
  }
  box.innerHTML = rows.join('<br>') + `<div class="final">Baca sisa dari bawah ke atas: ${orig} = ${rems.reverse().join('')}₂</div>`;
}
function updateBinToDec() {
  const raw = $('#binToDec').value.trim();
  const box = $('#binToDecSteps');
  if (!/^[01]{1,8}$/.test(raw)) { box.innerHTML = 'Hanya boleh angka 0 dan 1 (maksimal 8 digit).'; return; }
  const len = raw.length;
  const parts = raw.split('').map((b, i) => ({ b: Number(b), p: 2 ** (len - 1 - i) }));
  const total = parts.reduce((s, x) => s + x.b * x.p, 0);
  box.innerHTML = parts.map((x) => `${x.b} × ${x.p} = ${x.b * x.p}`).join('<br>') +
    `<div class="final">${parts.map((x) => x.b * x.p).join(' + ')} = ${total}<br>${raw}₂ = ${total}</div>`;
}
$('#decToBin').addEventListener('input', updateDecToBin);
$('#binToDec').addEventListener('input', updateBinToDec);
updateDecToBin();
updateBinToDec();
$('#binTable').innerHTML = Array.from({ length: 16 }, (_, i) =>
  `<div><span>${i}</span><code>${i.toString(2).padStart(4, '0')}</code></div>`).join('');

/* ---------- Piksel ---------- */
const exampleT = ['11111', '00100', '00100', '00100', '00100'];
$('#exampleGrid').innerHTML = exampleT.join('').split('').map((b) => `<div class="${b === '1' ? 'on' : ''}"></div>`).join('');

const presets = {
  hati: ['00000000', '01100110', '11111111', '11111111', '01111110', '00111100', '00011000', '00000000'],
  senyum: ['00111100', '01000010', '10100101', '10000001', '10100101', '10011001', '01000010', '00111100'],
  rumah: ['00011000', '00111100', '01111110', '11111111', '01000010', '01011010', '01011010', '01111110'],
};
let pixels = presets.hati.map((row) => row.split('').map(Number));

function renderPixels() {
  $('#pixelGrid').innerHTML = pixels.flatMap((row, r) =>
    row.map((v, c) => `<button type="button" class="${v ? 'on' : ''}" data-r="${r}" data-c="${c}" aria-label="Baris ${r + 1} kolom ${c + 1}"></button>`)
  ).join('');
  $('#pixelCode').value = pixels.map((row) => row.join('')).join('\n');
  const black = pixels.flat().filter(Boolean).length;
  $('#pixelInfo').textContent = `Gambar ini memakai 64 piksel = 64 bit = 8 byte. Piksel hitam: ${black}, piksel putih: ${64 - black}.`;
}
$('#pixelGrid').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  const r = Number(b.dataset.r), c = Number(b.dataset.c);
  pixels[r][c] = pixels[r][c] ? 0 : 1;
  renderPixels();
});
$$('[data-preset]').forEach((b) => b.addEventListener('click', () => {
  pixels = presets[b.dataset.preset].map((row) => row.split('').map(Number));
  renderPixels();
}));
$('#pixelClear').addEventListener('click', () => {
  pixels = Array.from({ length: 8 }, () => Array(8).fill(0));
  renderPixels();
});
$('#pixelInvert').addEventListener('click', () => {
  pixels = pixels.map((row) => row.map((v) => (v ? 0 : 1)));
  renderPixels();
});
$('#pixelDraw').addEventListener('click', () => {
  const lines = $('#pixelCode').value.split('\n').map((l) => l.replace(/[^01]/g, ''));
  pixels = Array.from({ length: 8 }, (_, r) =>
    Array.from({ length: 8 }, (_, c) => (lines[r] && lines[r][c] === '1' ? 1 : 0)));
  renderPixels();
});
renderPixels();

/* ---------- Kalkulator data ---------- */
function updateStats() {
  const nums = $('#statInput').value.split(/[,;\s]+/).map((x) => parseFloat(x.replace(',', '.'))).filter((x) => !isNaN(x));
  const out = $('#statOutput');
  if (!nums.length) { out.innerHTML = '<div class="wide">Masukkan minimal satu angka.</div>'; return; }
  const sorted = [...nums].sort((a, b) => a - b);
  const n = nums.length;
  const sum = nums.reduce((s, x) => s + x, 0);
  const mean = sum / n;
  const median = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  const freq = {};
  nums.forEach((x) => (freq[x] = (freq[x] || 0) + 1));
  const maxF = Math.max(...Object.values(freq));
  const modes = Object.keys(freq).filter((k) => freq[k] === maxF).map(Number).sort((a, b) => a - b);
  const modeText = maxF === 1 ? 'Tidak ada (semua muncul 1×)' : `${modes.join(', ')} (muncul ${maxF}×)`;
  const fmt = (x) => String(round2(x)).replace('.', ',');
  out.innerHTML = `
    <div class="wide"><small>Data diurutkan</small><b>${sorted.map(fmt).join(', ')}</b></div>
    <div><small>Banyak data</small><b>${n}</b></div>
    <div><small>Jumlah</small><b>${fmt(sum)}</b></div>
    <div><small>Rata-rata</small><b>${fmt(mean)}</b></div>
    <div><small>Median</small><b>${fmt(median)}</b></div>
    <div><small>Modus</small><b>${modeText}</b></div>
    <div><small>Tertinggi</small><b>${fmt(sorted[n - 1])}</b></div>
    <div><small>Terendah</small><b>${fmt(sorted[0])}</b></div>
    <div><small>Jangkauan</small><b>${fmt(sorted[n - 1] - sorted[0])}</b></div>`;
}
function round2(x) {
  return Math.round(x * 100) / 100;
}
$('#statInput').addEventListener('input', updateStats);
updateStats();

/* ---------- Latihan soal ---------- */
// Bank soal ada di file soal.js (questions1 dan questions2)
const letters = ['A', 'B', 'C', 'D'];
const levelName = { C4: 'Menganalisis', C5: 'Mengevaluasi', C6: 'Mencipta' };

function setupQuiz(id, questions) {
  const form = $(`#${id}-form`);
  const result = $(`#${id}-result`);
  let checked = false;

  let order = [];
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function render() {
    order = questions.map((item) => shuffle(item.o.map((_, j) => j)));
    form.innerHTML = questions.map((item, i) => `
      <div class="q" id="${id}-q${i}">
        <div class="q-head"><span class="q-num">${i + 1}</span><div class="q-text">${item.l ? `<span class="lvl lvl-${item.l}">${item.l} · ${levelName[item.l]}</span>` : ''}${item.q}</div></div>
        <div class="q-opts">
          ${order[i].map((j, pos) => `
            <label class="q-opt" data-j="${j}">
              <input type="radio" name="${id}-q${i}" value="${j}">
              <span><b>${letters[pos]}.</b> ${item.o[j]}</span>
            </label>`).join('')}
        </div>
      </div>`).join('');
    checked = false;
    result.hidden = true;
    progress();
  }
  const picked = (i) => form.querySelector(`input[name="${id}-q${i}"]:checked`);
  const answered = () => questions.filter((_, i) => picked(i)).length;
  function progress() {
    const n = answered();
    $(`#${id}-bar`).style.width = (n / questions.length) * 100 + '%';
    $(`#${id}-count`).textContent = `Terjawab ${n} dari ${questions.length} soal`;
  }
  form.addEventListener('change', progress);
  form.addEventListener('click', (e) => {
    if (checked && e.target.closest('.q-opt')) e.preventDefault();
  });

  $(`#${id}-check`).addEventListener('click', () => {
    const n = answered();
    if (n < questions.length && !confirm(`Masih ada ${questions.length - n} soal yang belum dijawab. Tetap periksa?`)) return;
    let right = 0;
    questions.forEach((item, i) => {
      const box = $(`#${id}-q${i}`);
      const p = picked(i);
      const pv = p ? Number(p.value) : -1;
      box.classList.add('done');
      box.classList.toggle('correct', pv === item.a);
      box.classList.toggle('incorrect', pv !== item.a);
      box.querySelectorAll('.q-opt').forEach((lab) => {
        const j = Number(lab.dataset.j);
        lab.classList.toggle('right', j === item.a);
        lab.classList.toggle('wrongpick', j === pv && pv !== item.a);
      });
      box.querySelectorAll('input').forEach((inp) => (inp.disabled = true));
      if (!box.querySelector('.q-ex')) {
        box.insertAdjacentHTML('beforeend', `<div class="q-ex">${pv === item.a ? '✅ Benar!' : `❌ Jawaban benar: <b>${letters[order[i].indexOf(item.a)]}</b>.`} ${item.e}</div>`);
      }
      if (pv === item.a) right++;
    });
    checked = true;
    const score = Math.round((right / questions.length) * 100);
    let msg = 'Tetap semangat! Baca lagi materinya, lalu coba ulangi. 💪';
    if (score >= 90) msg = 'Luar biasa! Kamu sangat menguasai materi ini! 🏆';
    else if (score >= 75) msg = 'Bagus sekali! Sedikit lagi sempurna. 🌟';
    else if (score >= 60) msg = 'Cukup baik! Pelajari lagi bagian yang salah. 👍';
    result.innerHTML = `<div class="score">${score}</div><p><b>${right}</b> benar dari <b>${questions.length}</b> soal</p><p>${msg}</p>`;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  $(`#${id}-reset`).addEventListener('click', () => {
    render();
    $('#' + id).scrollIntoView({ behavior: 'smooth' });
  });
  render();
}

setupQuiz('latihan1', questions1);
setupQuiz('latihan2', questions2);

/* ---------- Glosarium ---------- */
const glossary = [
  ['Data', 'Kumpulan fakta berupa angka, kata, simbol, gambar, atau suara yang belum diolah.'],
  ['Informasi', 'Data yang sudah diolah sehingga bermakna dan mudah dipahami.'],
  ['Representasi data', 'Cara menyajikan data dalam bentuk tertentu, misalnya tabel, diagram, simbol, atau kode.'],
  ['Data kualitatif', 'Data berupa kategori atau keterangan, bukan angka. Contoh: warna kesukaan.'],
  ['Data kuantitatif', 'Data berupa angka hasil menghitung atau mengukur. Contoh: tinggi badan.'],
  ['Turus', 'Tanda garis untuk mencatat data. Setiap kelompok 5 ditandai 4 garis tegak dan 1 garis miring.'],
  ['Tabel', 'Susunan data dalam baris dan kolom.'],
  ['Piktogram', 'Diagram yang memakai gambar/simbol untuk mewakili jumlah data tertentu.'],
  ['Diagram batang', 'Diagram berbentuk batang untuk membandingkan data antar kategori.'],
  ['Diagram garis', 'Diagram berupa titik yang dihubungkan garis untuk menunjukkan perubahan dari waktu ke waktu.'],
  ['Diagram lingkaran', 'Diagram berbentuk juring lingkaran untuk menunjukkan bagian dari keseluruhan.'],
  ['Simbol', 'Tanda atau gambar yang mewakili suatu makna, misalnya rambu lalu lintas.'],
  ['Kode', 'Sistem aturan untuk mengganti informasi menjadi bentuk lain, misalnya A=1.'],
  ['Bilangan biner', 'Bilangan basis 2 yang hanya memakai angka 0 dan 1.'],
  ['Bilangan desimal', 'Bilangan basis 10 yang memakai angka 0–9, dipakai sehari-hari.'],
  ['Bit', 'Satuan data terkecil di komputer, bernilai 0 atau 1.'],
  ['Byte', 'Kumpulan 8 bit.'],
  ['ASCII', 'Kode standar yang mengubah huruf dan simbol menjadi angka/biner. Contoh: A = 65.'],
  ['Piksel', 'Titik/kotak terkecil penyusun gambar digital.'],
  ['Resolusi', 'Banyaknya piksel pada gambar. Makin tinggi, makin tajam.'],
  ['RGB', 'Red, Green, Blue: tiga warna cahaya yang dicampur untuk membentuk warna di layar.'],
  ['Struktur data', 'Cara menyusun dan menyimpan data agar mudah dicari dan digunakan.'],
  ['Daftar (list)', 'Struktur data yang menyusun data secara berurutan.'],
  ['Antrean (queue)', 'Struktur data: yang pertama masuk, pertama keluar.'],
  ['Tumpukan (stack)', 'Struktur data: yang terakhir masuk, pertama keluar.'],
  ['Pohon (tree)', 'Struktur data bercabang dari satu akar, seperti silsilah atau folder.'],
  ['Graf (graph)', 'Struktur data berupa simpul (titik) yang dihubungkan sisi (garis).'],
  ['Rata-rata (mean)', 'Jumlah seluruh data dibagi banyak data.'],
  ['Median', 'Nilai tengah dari data yang sudah diurutkan.'],
  ['Modus', 'Nilai yang paling sering muncul.'],
  ['Jangkauan', 'Selisih nilai tertinggi dan terendah.'],
];
function renderGlossary(filter = '') {
  const f = filter.toLowerCase();
  const items = glossary.filter(([t, d]) => t.toLowerCase().includes(f) || d.toLowerCase().includes(f));
  $('#glossGrid').innerHTML = items.length
    ? items.map(([t, d]) => `<div class="gloss"><b>${t}</b><p>${d}</p></div>`).join('')
    : '<p class="muted">Istilah tidak ditemukan.</p>';
}
$('#glossSearch').addEventListener('input', (e) => renderGlossary(e.target.value));
renderGlossary();
