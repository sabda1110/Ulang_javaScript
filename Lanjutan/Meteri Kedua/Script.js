// function Mahasiswa(name, energy) {
//   this.name = name;
//   this.energy = energy;
// }
// //Method makan
// Mahasiswa.prototype.makan = function (poris) {
//   this.energy += poris;
//   return `Hello ${this.name}, Selamat Makan`;
// };

// //Method Main
// Mahasiswa.prototype.main = function (jam) {
//   this.energy -= jam;
//   return `Hello ${this.name}, Selamat Main`;
// };

// let sabda = new Mahasiswa('Sabda', 10);

//Versi Menggunakan Class

class Mahasiswa {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return `Hello ${this.name}, Selamat Makan`;
  }

  main(jam) {
    this.energy -= jam;
    return `Hello ${this.name} , Selamat Main`;
  }

  tidur(jam) {
    this.energy = this.energy + 2 * jam;
    return `Hello ${this.name} , Selamat Turu`;
  }
}

let mahasiswaPertama = new Mahasiswa('Sabda', 10);
