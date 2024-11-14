// Intersection => untuk menaggabungkan suatu objek menjadi suatu objek yang baru

interface UserIdentity {
    id: number;
    email: string;
}

interface BusinessPartner {
    name: string;
    creditScore: number;
}

type Employee = UserIdentity & BusinessPartner; // intersections

const signContract = (employee: Employee): void => {
    console.log(`Contract signed by ${employee.name} with email: ${employee.email}`);
};

signContract({ id: 299, name: 'Rama', email: 'rama@gmail.com', creditScore: 2900000 });
