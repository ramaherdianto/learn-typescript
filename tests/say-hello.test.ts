import { sayHello } from '../src/say-hello';

describe('sayHello', function () {
    it('should be hello', function () {
        expect(sayHello('Rama')).toBe('Hello Rama');
    });
});
