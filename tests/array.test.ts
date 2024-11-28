describe('Array', function () {
    // array biasa
    it('should be Array', function () {
        let hobbies: string[] = ['Gaming', 'Coding', 'Traveling'];
        console.info(hobbies);
    });

    // array readonly => tidak bisa merubah isi data array, bersifat dibaca saja.
    it('should be readonly Array', function () {
        let person: ReadonlyArray<string> = ['Ramadhan', 'Herdianto', 'Married'];

        console.info(person);
    });

    // array tuple with readonly => array yang berisi data yang sudah diatur tipe datanya.
    it('shouold be readonly array tuple', function () {
        let person: readonly [string, string, number, boolean] = [
            'Ramadhan',
            'Herdianto',
            23,
            false,
        ];
        // person[0] = 90; //cannot be assign because its readonly
        console.info(person);
    });
});
