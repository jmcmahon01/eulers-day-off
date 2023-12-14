//export { getArray, findThreeMultiples, findFiveMultiples, arrSum };

export default function getSumOfMultiples(num) {
    // we need 2 arrays: 1) all nums 2) for three and five 
    // use .reduce() to get all the sums
    let array = [];
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      array.push(i);
    };
    for (let j = 0; j <= array.length; j++){
        if(array[j] % 3 === 0 || array[j] % 5 === 0) {
            sum += array[j];
            // if array[j] is 3, sum will be 0 + 3
        }
    }
    return sum;
};

// function getArray(num) {
//   let array = [];
//   for (let i = 1; i <= num; i++) {
//     array.push(i);
//   };
//   return array;
// };

// function findThreeMultiples(num) {
//   const array = getArray(num);
//   let threeArr = [];
//   // loop through returnArray, using modulo, see if the return value is 0
//   for (let j = 0; j <= array.length; j++) {
//     if (array[j] % 3 === 0 ) {
//       threeArr.push(array[j]);
//     }
//   }
//   return threeArr;
// }
// function findFiveMultiples(num) {
//   const array = getArray(num);
//   let fiveArr = [];
//   // loop through returnArray, using modulo, see if the retur value is 0
//   for (let k = 0; k <= array.length; k++) {
//     if (array[k] % 5 === 0) {
//       fiveArr.push(array[k]);
//     }
//   }
//   return fiveArr;
// }

// function arrSum(num) {
//   let arrOfThree = findThreeMultiples(num);
//   let arrOfFive = findFiveMultiples(num);
//   return arrOfThree.concat(arrOfFive).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
//function calculateTotalSum(arr1, arr2) {
// Combine the two arrays into one array of pairs
//const combinedArray = arr1.map((value, index) => value + arr2[index]);

// Use reduce to calculate the total sum
//const totalSum = combinedArray.reduce((sum, currentValue) => sum + currentValue, 0);

//return result;
//}

/*
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, val) => acc + val, 0);""

console.log(sum); // Output: 15
*/
