let mahasiswa = [
  'Sabda Setiawan',
  'Rahmat Ardiansyah',
  'Ahmad Riszky Fadhilah'
];

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);

let jumlahHuruf = mahasiswa.map((nama) => ({
  Name: nama,
  'Jumlah Huruf': nama.length
}));

console.log(jumlahHuruf);
