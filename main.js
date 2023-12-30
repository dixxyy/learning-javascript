/*
  TUGAS BESAR: 
  1 MEMBUAT PERHITUNGAN MATEMATIKA
  - luas lingkaran
  - luas segitiga
  - luas persegi panjang
  - luas jajar genjang
  
  2. menghitung total gaji yang didapat dalam satu bulan
    dengan input minimal:
    - nama karyawan
    - gaji perhari
    - jumlah hari masuk kerja
*/

// let x = prompt('masukkan angka pertama: '); // Prompt akan menampilkan dialog untuk pengguna memasukkan nilai
// let y = prompt('masukkan angka kedua: '); // Prompt akan menampilkan dialog untuk pengguna memasukkan nilai

const phi = 3.14;

const lingkaran = (r) => {
  console.log('luas lingkaran adalah: ', phi * r * r);
};

const segitiga = (a, t) => {
  console.log('luas segitiga adalah: ', (a * t) / 2);
};

const persegiPanjang = (p, l) => {
  console.log('luas persegi panjang adalah: ', p * l);
};

lingkaran(5);
segitiga(4, 3);
persegiPanjang(6, 7);
