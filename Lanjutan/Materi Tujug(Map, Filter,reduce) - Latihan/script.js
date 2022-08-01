//Mengambil Tag Video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//Filter Yang JavaScript Lanjutan
let jsLanjutan = videos
  .filter((video) => {
    return video.innerHTML.includes('JavaScript Lanjutan');
  })

  //Mengambil Durasi Video pada  element
  .map((item) => {
    return item.dataset.duration;
  })

  //Memecah durati menjadi array
  .map((item) => {
    const detik = item.split(':').map((item) => {
      return parseFloat(item);
    });
    return detik[0] * 60 + detik[1];
  })

  //Menjumlahkan Detik
  .reduce((total, detik) => {
    return total + detik;
  });

//Mengubah Detik Menjadi Jam
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

//Meletakan Nilai
const totalDurasi = document.querySelector('.TotalDurasi');
totalDurasi.innerHTML = `${jam} Jam , ${menit} Menit , ${detik} Detik`;

//Meletak Jumlah Video
const jumlahVideo = document.querySelector('.jumlahVideo');
const jmlVideo = videos.filter((item) =>
  item.innerHTML.includes('JavaScript Lanjuta')
).length;

jumlahVideo.innerHTML = `${jmlVideo} Video`;
