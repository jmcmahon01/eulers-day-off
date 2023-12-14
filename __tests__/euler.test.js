import findMultiples from "./../src/euler.js";
describe("findMultiples", ()=> {
  test('should return an array of every multiple of 3 in the number', ()=> {
    const number = 10;
    expect(findMultiples(number)).toEqual([3, 6, 9]);
  });
});

/*
import formatName from '../src/name.js';

describe('formatName', () => {
    test('should return a name with the first letter in upper case and the rest in lower case(s)', () => {
        const name = "monica";
        expect(formatName(name)).toEqual("Monica");
    });

    test('should return a name with the first letter in upper case and the rest in lower case(s)', () => {
        const name = "BOBBY";
        expect(formatName(name)).toEqual("Bobby");
    });
})
*/