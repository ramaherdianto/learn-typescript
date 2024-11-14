// tanpa menentukan tipe data dari hasil function
// const concatenateValues = (a: string, b: string) => {
//     return a + b;
// };

// menentukan tipe data dari hasil function dibawah yaitu harus menghasilkan jenis string
// const concatenateValues = (a: string, b: string): string => {
//     return a + b;
// };

// console.log(concatenateValues('Hello ', 'World'));
// console.log(concatenateValues('5', '10'));

// Interface => merupakan blueprint untuk membuat struktur objek, termasuk menentukan nama dan tipe dari properti yang harus ada pada objek tersebut.
// function with void => jika function tidak me--return apapun.
interface UserInterface {
    id: number;
    name: string;
    age?: number; //tanda tanya agar tidak error karena membuat age menjadi optional atau tidak ada valuenya atau tidak dipanggil.
    greet(message: string): void;
}

const User: UserInterface = {
    id: 200,
    name: 'Name of User',
    greet(message) {
        console.log(`Username: ${User.name}, with Id user: ${User.id}. ${message}`);
    },
};

if (!User.age) {
    console.log('User has no age.');
} else {
    console.log(User.age);
}

User.greet('Haloo users');
