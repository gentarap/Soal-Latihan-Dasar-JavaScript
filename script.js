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

  