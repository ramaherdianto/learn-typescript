"use strict";
// Intersection => untuk menaggabungkan suatu objek menjadi suatu objek yang baru
const signContract = (employee) => {
    console.log(`Contract signed by ${employee.name} with email: ${employee.email}`);
};
signContract({ id: 299, name: 'Rama', email: 'rama@gmail.com', creditScore: 2900000 });
