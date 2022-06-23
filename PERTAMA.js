//Cara membuat object pada javaScript
// 1. Object literal
const mahasiswa = {
    nama: 'Nayandra',
    tenaga: 20,
    makan: function (porsi){
        this.tenaga += porsi;
        console.log(`selamat makan ${this.nama}`);
    }
}

// 2. function declaration
function Mahasiswa(Nama, energi){
    const mahasiswa = {};
    mahasiswa.nama = Nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function makan(porsi){
        this.energi += porsi;
    }
    return mahasiswa
}

const mahasiswa1 = Mahasiswa("Nayandra", 10);  
const mahasiswa2 = Mahasiswa("Shirogane", 50); 

// 3. constructor function
function Mahasiswa (Nama, energi){
    this.nama = Nama;
    this.energi = energi;

    this.makan = function (porsi){
        this.energi += porsi;
    }
    this.main = function (jam){
        this.energi -= jam;
    }
}

const mahasiswa1 = new Mahasiswa("Nayandra",  20);

// 4. Object.create()

const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi
    },
    tidur: function(jam){
        this.energi += jam*3
    }
}

function Mahasiswa(nama, energi){
    //Object.create()
    const mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi

    return mahasiswa
}

const mahasiswa1 = Mahasiswa("Nayandra", 10)