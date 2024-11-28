"use strict";
// Object
// perbedaan type dan interface => keduanya sama, tapi yang membedakan yaitu interface digunakan jika objek memiliki suatu properti fungsi atau function, sedangkan type dikhususkan digunakan hanya untuk menentukan objek biasa tanpa adanya properti function di dalamnya.
let Steph = {
    name: 'Steph Curry',
    isRetired: false,
    achievements: ['Nba Champ', 3, 'MVP'],
    age: 37,
};
let Mj = {
    name: 'Michael Jordan',
    isRetired: true,
    achievements: [6, 'Nba Champ', 2, 'DPOY'],
};
const greetHooper = (hooper) => {
    if (hooper.age) {
        console.log(`Hello ${hooper.name}, age: ${hooper.age}`);
    }
    console.log(`Hello ${hooper.name}`);
};
