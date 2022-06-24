// //Cara membuat object pada javaScript
// // 1. Object literal
// const mahasiswa = {
//     nama: 'Nayandra',
//     tenaga: 20,
//     makan: function (porsi){
//         this.tenaga += porsi;
//         console.log(`selamat makan ${this.nama}`);
//     }
// }

// // 2. function declaration
// // Seperti membungkus object kedalam sebuah fuction 
// //sehingga bisa digunakan berulang kali
// function Mahasiswa(Nama, energi){
// // Membuat Object didalam fuction
//     const mahasiswa = {};
// // Membuat atribut(properti) ke dalam object mahasiswa
//     mahasiswa.nama = Nama;
//     mahasiswa.energi = energi;
// // Membuat function "makan" ke dalam object mahasiswa
//     mahasiswa.makan = function makan(porsi){
//         this.energi += porsi;
//     }
// // Return wajib di buat jika menggunkan fuction declaration. nilai yang 
// // di balikan adalah object mahasiswa
//     return mahasiswa
// }
//// Menginisialisasi function "Mahasiswa" yang berisi object "mahasiswa"
// const mahasiswa1 = Mahasiswa("Nayandra", 10);  
// const mahasiswa2 = Mahasiswa("Shirogane", 50); 

// // 3. constructor function
//// tidak perlu lagi membuat object didalam function, tetapi tiap properti
//// diberi keyword "this." sebelum nama properti
// function Mahasiswa (Nama, energi){
//// Membuat properti 
//     this.nama = Nama;
//     this.energi = energi;
//// Membuat properti yang berisi function.
//     this.makan = function (porsi){
//         this.energi += porsi;
//     }
//     this.main = function (jam){
//         this.energi -= jam;
//     }
// }

// const mahasiswa1 = new Mahasiswa("Nayandra",  20);

// // 4. Object.create()

// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi
//     },
//     tidur: function(jam){
//         this.energi += jam*3
//     }
// }

// function Mahasiswa(nama, energi){
//     //Object.create()
//     const mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi

//     return mahasiswa
// }

// const mahasiswa1 = Mahasiswa("Nayandra", 10)


// 5. Prototype
function Anggota(Nama, Umur){
    this.nama = Nama;
    this.umur = Umur;
}
//Membuat function ke dalam function "Aggota"
Anggota.prototype.tahunLahir = function(tahun){
    this.tahunLahir = tahun;
}
Anggota.prototype.posisi = function(posisi){
    this.posisi = posisi;
}
Anggota.prototype.masaKerja = function(TahunMasukKerja){
    this.masaKerja = `${2022 - TahunMasukKerja} Tahun`;
    

}
//Inisialisasi
const Anggota1 = new Anggota("Nayandra", 19);