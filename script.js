// Jawaban Nomer 1
const keranjang = [
  { nama: "Beras", harga: 12000, jumlah: 2 },
  { nama: "Gula", harga: 10000, jumlah: 1 },
  { nama: "Minyak", harga: 15000, jumlah: 3 },
];
const hitungTotalBelanja = (keranjang) => {
  let total = 0;
  for (let i = 0; i < keranjang.length; i++) {
    total += keranjang[i].harga * keranjang[i].jumlah;
  }
  return total;
};

console.log(hitungTotalBelanja(keranjang));

// Jawaban Nomer 2
const produk = [
  { nama: "Sabun", harga: 8000 },
  { nama: "Sampo", harga: 15000 },
  { nama: "Pasta Gigi", harga: 11000 },
];

const filterProdukMahal = (produk) => {
  const hasil = [];
  for (let i = 0; i < produk.length; i++) {
    if (produk[i].harga > 10000) {
      hasil.push(produk[i]);
    }
  }
  return hasil;
};

console.log(filterProdukMahal(produk));

// Jawaban Nomor 3
const produkLama = [{ nama: "Roti", harga: 5000 }];
const produkBaru = { nama: "Susu", harga: 12000 };

const tambahProduk = (produkLama, produkBaru) => {
  const hasil = [];
  for (let i = 0; i < produkLama.length; i++) {
    hasil.push(produkLama[i]);
  }
  hasil.push(produkBaru);
  return hasil;
};

console.log(tambahProduk(produkLama, produkBaru));

// Jawaban Nomor 4
const produk4 = [
  { nama: "Teh", harga: 3000 },
  { nama: "Kopi", harga: 4000 },
];
const cariProduk = (produk4, namaDicari) =>
  produk4.find((item) => item.nama === namaDicari); //menggunakan Find() untuk mengembalikan elemen pertama yang cocok dengan kondisi.

const hasil = cariProduk(produk4, "Kopi");

console.log(hasil);

// Jawaban Nomor 5
const produk5 = [
  { nama: "Susu", jumlah: 2 },
  { nama: "Keju", jumlah: 3 },
];
const totalJumlahProduk = (produk5) => {
  let total = 0;
  for (let i = 0; i < produk5.length; i++) {
    total += produk5[i].jumlah;
  }
  return total;
};
console.log(totalJumlahProduk(produk5));
