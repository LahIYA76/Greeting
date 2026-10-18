const letterBtn = document.getElementById('letterBtn');
letterBtn.addEventListener('click', () => document.getElementById('letter').scrollIntoView({behavior:'smooth', block:'start'}));

const moodCopy = {
  nervous: 'Kamu nggak harus menghilangkan rasa gugup untuk bisa mengerjakan ujian dengan baik. Tarik napas, percaya sama persiapanmu, lalu mulai dari satu soal dulu.',
  tired: 'Istirahat sebentar bukan berarti menyerah, ya. Kamu manusia, bukan robot. Minum air, lemaskan bahu, lalu lanjut lagi kalau sudah lebih siap. Aku bangga kamu sudah berusaha.',
  ready: 'NAH, GITU DONG! 🔥 Baca soal dengan teliti, atur waktumu, dan tunjukkan apa yang sudah kamu pelajari. Pelan-pelan tapi yakin. Kamu siap kasih yang terbaik!'
};
document.querySelectorAll('.mood-btn').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.mood-btn').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const message = document.querySelector('#moodMessage p');
  message.textContent = moodCopy[button.dataset.mood];
  message.animate([{opacity:.25, transform:'translateY(5px)'},{opacity:1, transform:'translateY(0)'}], {duration:300, easing:'ease-out'});
}));

const surprises = [
  'Plot twist: ada yang sayang kamu banget. Petunjuknya? Yang bikin halaman ini. 💗',
  'Reminder: kamu lebih kuat dari rasa panikmu, dan satu soal sulit nggak menentukan semuanya. 🌷',
  'Misi mini: minum air 3 teguk, tarik napas dalam-dalam, lalu bilang: “aku akan coba yang terbaik!” ✨',
  'Kalau semangatmu bisa dipeluk, sekarang kamu pasti lagi dipeluk erat-erat. 🤗',
  'Hadiah setelah UTS: kamu wajib kasih dirimu waktu buat istirahat. Kamu pantas mendapatkannya. 🍰'
];
document.getElementById('surpriseBtn').addEventListener('click', () => {
  const message = document.getElementById('surpriseMessage');
  message.textContent = surprises[Math.floor(Math.random() * surprises.length)];
  message.animate([{opacity:0, transform:'translateY(6px)'},{opacity:1, transform:'translateY(0)'}], {duration:350});
  burstHearts(7);
});

document.getElementById('hugBtn').addEventListener('click', () => {
  document.getElementById('hugResult').textContent = 'Peluk virtual terkirim! Jangan lupa senyum sebentar, ya. ♡';
  burstHearts(18);
});
function burstHearts(count) {
  const symbols = ['♥','♡','✦','💕'];
  for (let i=0; i<count; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    heart.style.left = `${5 + Math.random()*90}%`;
    heart.style.fontSize = `${16 + Math.random()*20}px`;
    heart.style.animationDuration = `${1.7 + Math.random()*1.5}s`;
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), {once:true});
  }
}
