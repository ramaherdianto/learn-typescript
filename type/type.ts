// pipe symbol or tanda (|) berfungsi jika suatu variable akan memiliki optional tipe data contoh dibawah id memiliki tipe data antara string atau number

// type => untuk membuat code lebih rapih dan menggunakan pipe symbol

type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
    console.log('ID: ', id);
};

printID(2345432);
