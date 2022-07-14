// let mahasiswa = [
//   'Sabda Setiawan',
//   'Rahmat Ardiansyah',
//   'Ahmad Riszky Fadhilah'
// ];

// // let jumlahHuruf = mahasiswa.map((nama) => nama.length);

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   Name: nama,
//   'Jumlah Huruf': nama.length
// }));

// console.log(jumlahHuruf);

// let Mahasiswa = function () {
//   this.name = 'Sabda';
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Hello ${this.name} umur saya ${this.umur} tahun`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// let manggil = new Mahasiswa();

const box = document.querySelector('.box');

box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
