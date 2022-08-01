function myHitung(...value) {
  //   let hitung = value.reduce((jumlah, rest) => {
  //     return jumlah + rest;
  //   });
  //   return hitung;

  //Menggunakan for of
  let hitung = 0;
  for (const m of value) {
    hitung = hitung + m;
  }
  return hitung;
}

console.log(myHitung(1, 2, 3, 4, 5, 6));

//array distraktering
const mhs = ['sabda', 'setiawan', 'budi', 'erlangga', 'ariandi'];
const [ketua, wakil, ...anggota] = mhs;
console.log(ketua);

//object disctraktering
const kelompok1 = {
  name: 'Sabda Setiawan',
  umur: 33,
  email: 'sabdasetiawan206@gmail.com'
};

const { name, ...ket } = kelompok1;
console.log(ket);

//filtering
function filtering(type, ...nilai) {
  return nilai.filter((m) => typeof m === type);
}

console.log(filtering('string', 1, 2, 3, 4, 'tes', 'budi'));
