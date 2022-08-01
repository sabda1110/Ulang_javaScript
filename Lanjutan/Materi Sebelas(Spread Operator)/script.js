const judul = document.querySelector('.name');
const huruf = [...judul.innerHTML].map((m) => {
  return `<span>${m}</span>`;
});

judul.innerHTML = huruf.join('');
