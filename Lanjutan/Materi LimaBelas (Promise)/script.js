// let ditepati = false;
// const janji1 = new Promise((berhasil, gagal) => {
//   if (ditepati) {
//     berhasil('Ok Janji Ditepati');
//   } else {
//     gagal('Anda Bohong');
//   }
// });

// janji1
//   .then((response) => console.log(`Ok : ${response}`))
//   .catch((response) => console.log(`Not Oke :${response}`));

//contoh 2
// let ditepati = false;
// const janji2 = new Promise((berhasil, gagal) => {
//   if (ditepati) {
//     setTimeout(() => {
//       berhasil('Ok Janji Ditepati');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       gagal('Janji Tidak Ditepati');
//     }, 2000);
//   }
// });

// console.log('Mulai');
// janji2
//   .finally(() => console.log('Data Done'))
//   .then((response) => {
//     console.log(`Ok :${response}`);
//   })
//   .catch((response) => {
//     console.log(`Not Ok : ${response}`);
//   });
// console.log('Selesai');

//contoh 3
const film = new Promise((berhasil) => {
  setTimeout(() => {
    berhasil([
      {
        judul: 'Avengers',
        tahun: 2020,
        penerbit: 'Erlangga'
      }
    ]);
  }, 1000);
});

const mahasiswa = new Promise((berhasil) => {
  setTimeout(() => {
    berhasil([
      {
        name: 'Sabda Setiawan',
        npm: 193510101,
        kelas: 'VI B'
      }
    ]);
  }, 500);
});

// film.then((response) => {
//   console.log(response);
// });

// mahasiswa.then((response) => {
//   console.log(response);
// });

Promise.all([film, mahasiswa]).then((response) => {
  const [film, mahasiswa] = response;
  console.log(mahasiswa);
});
