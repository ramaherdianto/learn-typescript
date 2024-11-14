"use strict";
// tanpa menentukan tipe data dari hasil function
// const concatenateValues = (a: string, b: string) => {
//     return a + b;
// };
const User = {
    id: 200,
    name: 'Name of User',
    greet(message) {
        console.log(`Username: ${User.name}, with Id user: ${User.id}. ${message}`);
    },
};
if (!User.age) {
    console.log('User has no age.');
}
else {
    console.log(User.age);
}
User.greet('Haloo users');
