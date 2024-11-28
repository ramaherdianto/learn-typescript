describe('Union Type', function () {
    it('should be Union Type', function () {
        const proccess = (value: string | boolean | number) => {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value + 2;
            } else {
                return !value;
            }
        };

        expect(proccess('rama')).toBe('RAMA');
        expect(proccess(18)).toBe(20);
        expect(proccess(false)).toBe(true);
    });
});
