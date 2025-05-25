# Latihan Dasar JavaScript: Function, Array, dan Object

Repositori ini berisi kumpulan soal latihan JavaScript dasar yang berfokus pada penggunaan **function**, **array**, dan **object**. Latihan ini cocok untuk pemula yang ingin memperkuat logika dasar dalam JavaScript.

---

## Soal 1: Hitung Total Belanja

### Deskripsi:

Buatlah sebuah function bernama `hitungTotalBelanja` yang menerima sebuah array berisi objek produk.  
Setiap objek produk memiliki properti `nama`, `harga`, dan `jumlah`.  
Function ini harus mengembalikan total harga dari seluruh produk.

### Contoh Input:

```javascript
const keranjang = [
  { nama: "Beras", harga: 12000, jumlah: 2 },
  { nama: "Gula", harga: 10000, jumlah: 1 },
  { nama: "Minyak", harga: 15000, jumlah: 3 }
];

Output yang diharapkan:
77000

```

## Soal 2: Filter Produk Mahal

### Deskripsi:

Buatlah sebuah function `filterProdukMahal` yang menerima array produk dan
mengembalikan array baru yang hanya berisi produk dengan harga lebih dari 10000.

### Contoh Input:

```javascript
const produk = [
{ nama: "Sabun", harga: 8000 },
{ nama: "Sampo", harga: 15000 },
{ nama: "Pasta Gigi", harga: 11000 }
];

Output yang diharapkan:
[ { nama: "Sampo", harga: 15000 }, { nama: "Pasta Gigi", harga: 11000 } ]

```

## Soal 3: Tambah Produk Baru

### Deskripsi:

Buatlah sebuah function `tambahProduk` yang menerima array produk dan sebuah objek
produk baru. Function harus menambahkan produk baru ke array dan mengembalikan
array yang diperbarui.

### Contoh Input:

```javascript
Contoh:
const produk = [ { nama: "Roti", harga: 5000 } ];
const produkBaru = { nama: "Susu", harga: 12000 };

Output:
[ { nama: "Roti", harga: 5000 }, { nama: "Susu", harga: 12000 } ]

```

## Soal 4: Cari Produk

### Deskripsi:

Buatlah function `cariProduk` yang menerima array produk dan nama produk. Function
harus mengembalikan objek produk yang namanya sesuai dengan input.

### Contoh Input:

```javascript
Contoh:
const produk = [
{ nama: "Teh", harga: 3000 },
{ nama: "Kopi", harga: 4000 } ];

const hasil = cariProduk(produk, "Kopi");

Output:
{ nama: "Kopi", harga: 4000 }
```

## Soal 5: Total Jumlah Produk

### Deskripsi:

Buatlah function `totalJumlahProduk` yang menerima array produk dan mengembalikan
total jumlah semua produk.

### Contoh Input:

```javascript
Contoh:
const produk = [
    { nama: "Susu", jumlah: 2 },
    { nama: "Keju", jumlah: 3 } ];

Output:
5
```

## Jawaban Tersedia Di File: script.js