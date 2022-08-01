//For of
//array
const mhs = ['Sabda', 'Rahmat', 'Fahri'];

for (const m of mhs) {
  console.log(m);
}
// mhs.forEach((m) => console.log(m));

//String
// const nama = 'Sabda Setiawan';
// for (const n of nama) {
//   console.log(n);
// }

//NodeList
const liNama = document.getElementsByClassName('name');
console.log(liNama);

for (const li of liNama) {
  console.log(li.innerHTML);
}

function penjumlahan() {
  let jumlah = 0;
  for (const m of arguments) {
    jumlah += m;
  }
  return jumlah;
}

console.log(penjumlahan(1, 2, 3, 4, 5, 6));

const mhs1 = {
  name: 'Sabda',
  umur: 21,
  email: 'sabdasetiawan206@gmail.com'
};

for (const m in mhs1) {
  console.log(mhs1[m]);
}
