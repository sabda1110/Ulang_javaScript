// function init() {
//   let nama = 'Sabda';
//   function tampilNama() {
//     console.log(`Hello ${nama}`);
//   }
//   tampilNama();
// }
// init();

// Factory Function

// function ucapanSelamat(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama} , Selamat ${waktu} semoga hari mu menyenangkan`);
//   };
// }

// let selamatPagi = ucapanSelamat('pagi');
// let selamatSiang = ucapanSelamat('Siang');
// let selamatMalam = ucapanSelamat('Malam');

// selamatMalam('Sabda');

// Method Private

// let add = (function () {
//   let constrain = 0;
//   return function tambah() {
//     return ++constrain;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

function add() {
  let constrain = 0;
  return function tambah() {
    return ++constrain;
  };
}

let a = add();

console.log(a());
console.log(a());
console.log(a());
console.log(a());
