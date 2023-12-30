/*
  PERULANGAN JAVASCRIPT
  BUAT PERULANGAN DARI SUATU VARIABLE BERTIPE ARRAY 
  contoh: 
  const x = [3, 5, 12]
  // loop data
  // total nilai adalah 20 karena 3 + 5 + 12 = 20

  looping data tersebut menggunakan for, while, dan do-while.
  munculkan jumlah hasil penambahan semua angka yang ada
  di dalam array tersebut seperti contoh
*/

const i = [4, 7, 15];
let total = 0;

for (let j = 0; j < i.length; j++) {
  total = total + i[j];
  console.log(total);
}

console.log(`jumlah penambahan dari for looping array [4, 7, 15] adalah ${total}`);

const l = [4, 7, 15];
let jumlah = 0;
let k = 0;

while (k < l.length) {
  jumlah = jumlah + l[k];
  k++;
  console.log(jumlah);
}

console.log(`jumlah penambahan dari while looping array [4, 7, 15] adalah ${jumlah}`);
