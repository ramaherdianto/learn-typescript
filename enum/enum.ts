// Enum => tipe khusus yang digunakan untuk mendefinisikan kumpulan nilai konstan yang berhubungan, membuat kode lebih mudah dibaca dan aman dari kesalahan.

enum LoginError {
    Unauthorized = 'unauthorized',
    NoUser = 'nouser',
    WrongCredentials = 'wrongcredentials',
    Internal = 'internal',
}

const printErrorMsg = (error: LoginError): void => {
    if (error == LoginError.Unauthorized) {
        console.log('User not authorized');
    } else if (error == LoginError.NoUser) {
        console.log('User not found');
    } else if (error == LoginError.WrongCredentials) {
        console.log('Wrong Username/Password combination');
    } else {
        console.log('Internal Error');
    }
};

printErrorMsg(LoginError.NoUser);
