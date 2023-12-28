// tugas kecil 1

/*
1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan user
2. menentukan hari dan tanggal yang ada saat ini di pc
3. jangan gunakan chatgpt ya broo
**/

let saldoAwal = 100000;
let saldoGaji = 300000;

const saldoAkhir = saldoAwal + saldoGaji;

alert(`saya memiliki uang sebesar Rp.${saldoAwal} lalu baru gajian sebesar Rp.${saldoGaji} sehingga uang saya sekarang adalah ${saldoAkhir}`);

const hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];

let hariIni = new Date().getDay();

switch (hariIni) {
  case 1:
    hari = hari[0];
    break;
  case 2:
    hari = hari[1];
    break;
  case 3:
    hari = hari[2];
    break;
  case 4:
    alert(`hari ini adalah hari ${hari[3]}`);
    console.log(hari[3]);
    break;
  case 5:
    hari = hari[4];
    break;
  case 6:
    hari = hari[5];
    break;
  case 7:
    hari = hari[6];
    break;
  default:
    hari = hari[7];
}
