//Membuat Menggunakan Object Literal
// let Mahasiswa = {
//   name: 'Sabda',
//   energy: 12,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Hello ${this.name} , Selamat Makan`);
//   }
// };

//Membuat Object Dengan Function Declarate
// function Mahasiswa(name, energy) {
//   let mahasiswa = {};
//   mahasiswa.name = name;
//   mahasiswa.energy = energy;
//   mahasiswa.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Hello ${this.name}, Selamat Makan`);
//   };
//   mahasiswa.main = function (jam) {
//     this.energy -= jam;
//   };
//   return mahasiswa;
// }

// //Pemanggilan Function
// let sabda = Mahasiswa('Sabda', 10);

// //Membuat Object Dengan Constructor Function
// function Mahasiswa(name, energy) {
//   this.name = name;
//   this.energy = energy;
//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`Hello ${this.name}, Selamat Makan`);
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//   };
// }

// //Pemanggilan Function
// let sabda = new Mahasiswa('Sabda', 10);

//Membuat Object Dengan Object Create

const methodMahasiswa = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Hello ${this.name}, Selamat Makan`);
  },
  main: function (jam) {
    this.energy -= jam;
  },
  tidur: function (jam) {
    this.energy = this.energy + 2 * jam;
    console.log(`Hello ${this.name}, Selamat Tidru`);
  }
};

function Mahasiswa(name, energy) {
  let mahasiswa = Object.create(methodMahasiswa); //Pemanggilan Object Create
  mahasiswa.name = name;
  mahasiswa.energy = energy;
  return mahasiswa;
}

let sabda = Mahasiswa('Sabda', 10);
