// const perkenalan = ['hallo', 'nama', 'saya', 'Sabda Setiawan'];

// const [awal, , , nama] = perkenalan;

// console.log(awal);

//Assigment Objek

// const mhs = {
//   nama: 'Sabda Setiawan',
//   umur: 33,
//   email: 'sabdasetiawan206@gmail.com'
// };

// const { nama, umur, email } = mhs;
// console.log(nama);

// const { nama, umur } = { nama: 'Sabda Setiawan', umur: 21 };

// console.log(umur);

//Mengambil field pada objek menggunakan function

const mhs = {
  id: 123,
  nama: 'Sabda Setiawan',
  umur: 33,
  email: 'sabdasetiawan206@gmail.com'
};

function getIdData({ id, nama }) {
  return nama;
}

console.log(getIdData(mhs));
