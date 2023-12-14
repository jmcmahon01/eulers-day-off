import { getArray, findThreeMultiples, findFiveMultiples, arrSum } from "./../src/euler.js";

describe('getArray', () => {
    test('should return an array of all natural numbers ranging from 1 to the number in parameter', () => {
        const number = 5;
        expect(getArray(number)).toEqual([1, 2, 3, 4, 5]);
    });
});

describe("findThreeMultiples", ()=> {
    test('should return an array of every multiple of 3 in the number', ()=> {
      const number = 10;
      expect(findThreeMultiples(number)).toEqual([3, 6, 9]);
    });
});

describe("findFiveMultiples", ()=> {
  test('should return an array of every multiple of 5 in the number', ()=> {
    const number = 10;
    expect(findFiveMultiples(number)).toEqual([5, 10]);
  });
})

describe("arrSum", ()=> {
  test('should take the two arrays and combine all of the values within it to create one mass number', ()=> {
    const number = 10;
    expect(arrSum(number)).toEqual(33);
  })
})


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