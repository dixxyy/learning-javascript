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

let r = prompt('masukkan jari-jari lingkaran: ');
let a = prompt('masukkan alas: ');
let t = prompt('masukkan tinggi: ');
let p = prompt('masukkan panjang: ');
let l = prompt('masukkan lebar:');

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

const jajarGenjang = (a, t) => {
  console.log('luas jajar genjang adalah: ', a * t);
};

lingkaran(r);
segitiga(a, t);
persegiPanjang(p, l);
jajarGenjang(a, t);

let nama = prompt('Masukkan nama: ');
let gaji = prompt('masukkan gaji anda perhari: ');
let hari = prompt('jumlah hari masuk kerja: ');

const totalGaji = (gaji, hari) => {
  console.log(`nama anda adalah ${nama} dan jumlah gaji anda adalah Rp.${gaji * hari}`);
};

totalGaji(gaji, hari);
