// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

const kalkulasi = (a, b) => {
  return [a + b, a - b, a * b, a / b];
};

const [tambah, kurang, kali, bagi] = kalkulasi(3, 3);

console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

//Function Objek

const aritmatika = function (a, b) {
  return {
    tambah1: a + b,
    kurang1: a - b
  };
};

const { tambah1, kurang1 } = aritmatika(2, 3);
console.log('====================================');
console.log(tambah1);
console.log(kurang1);

//function objeck yang lain
console.log('=======================================');

const mhs = {
  nama: 'Sabda Setiawan',
  umur: 21,
  email: 'sabdasetiawan206@gmail.com',
  nilai: {
    uas: 90,
    uts: 80,
    kehadiran: 90
  }
};

function sayHello({ nama, umur, nilai: { uts, uas, kehadiran } }) {
  console.log(
    `Hallo Nama Saya ${nama} ,Umur Saya Saat ini ${umur},dan saya Memperoleh nilai dengan ${
      (uas + uts + kehadiran) / 3
    }`
  );
}

sayHello(mhs);
