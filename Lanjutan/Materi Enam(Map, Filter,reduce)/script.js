const angka = [-8, -9, 8, 9, 5, 4, 3, 2, -1, 8, 9, 10];
// Filter Menggunakan Looping biasa
// let tampung = [];
// // Filter yang >=3
// for (let i = 0; i <= angka.length; i++) {
//   if (angka[i] >= 3) {
//     tampung.push(angka[i]);
//   }
// }

// console.log(tampung);

const newAngka = angka.filter((e) => e >= 3);
console.log(newAngka);

//Map
const newMap = angka.map((e) => e * 2);
console.log(newMap);

//Reduce
const newReduce = angka.reduce((acc, letak) => acc + letak);
console.log(newReduce);

//Chaining
//1.Setiap Array >=3
//2.Dikalikan 3
//3. Ditambahkan Semuanya
const newChaining = angka
  .filter((e) => e >= 3)
  .map((e) => e * 3)
  .reduce((acc, letak) => acc + letak);

console.log(newChaining);
