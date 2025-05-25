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
