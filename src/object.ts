// Object
// perbedaan type dan interface => keduanya sama, tapi yang membedakan yaitu interface digunakan jika objek memiliki suatu properti fungsi atau function, sedangkan type dikhususkan digunakan hanya untuk menentukan objek biasa tanpa adanya properti function di dalamnya.

// type
type HooperType = {
    name: string;
    isRetired: boolean;
    achievements: (string | number)[];
    age?: number;
};

// interface
interface HooperInterface {
    name: string;
    isRetired: boolean;
    achievements: (string | number)[];
    age?: number; //? means optional, the type will be either number or undefined
    greet(hooper: HooperInterface): void;
}

let Steph: HooperType = {
    name: 'Steph Curry',
    isRetired: false,
    achievements: ['Nba Champ', 3, 'MVP'],
    age: 37,
};

let Mj: HooperType = {
    name: 'Michael Jordan',
    isRetired: true,
    achievements: [6, 'Nba Champ', 2, 'DPOY'],
};

const greetHooper = (hooper: HooperType): void => {
    if (hooper.age) {
        console.log(`Hello ${hooper.name}, age: ${hooper.age}`);
    }

    console.log(`Hello ${hooper.name}`);
};
