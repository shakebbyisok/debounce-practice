import { debounce } from '../src/debounce';

describe('debounce', () => {
    let func: jest.Mock;
    let debouncedFunc: Function;

    beforeEach(() => {
        func = jest.fn();
        debouncedFunc = debounce(func, 1000); // Debounce de 1 segon
    });

    it('should call the function after the specified time', done => {
        debouncedFunc();
        expect(func).not.toBeCalled();

        setTimeout(() => {
            expect(func).toBeCalled();
            done();
        }, 1001);
    });

    it('should not call the function immediately', () => {
        debouncedFunc();
        expect(func).not.toBeCalled();
    });

    it('should call the function only once if debounced function is called multiple times', done => {
        for (let i = 0; i < 10; i++) {
            debouncedFunc();
        }

        setTimeout(() => {
            expect(func).toBeCalledTimes(1);
            done();
        }, 1001);
    });
});
