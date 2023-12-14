export { getArray, findThreeMultiples, findFiveMultiples };

function getArray(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  };
  return array;
};

function findThreeMultiples(num) {
  const array = getArray(num);
  let threeArr = [];
  // loop through returnArray, using modulo, see if the return value is 0
  for (let j = 0; j <= array.length; j++) {
    if (array[j] % 3 === 0) {
      threeArr.push(array[j]);
    }
  }
  return threeArr;
}
function findFiveMultiples(num) {
  const array = getArray(num);
  let fiveArr = [];
  // loop through returnArray, using modulo, see if the retur value is 0
  for (let k = 0; k <= array.length; k++) {
    if (array[k] % 5 === 0) {
      fiveArr.push(array[k]);
    }
  }
  return fiveArr;
}
// var % 3 = 0
// if more than 0 = not divisible by 3.

