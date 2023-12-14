export default function findMultiples(num) {
    let returnArray=[];
    let multipleThreeArr = [];
    for (let i=1; i<=num; i++){
        returnArray.push(i);
    }
    // loop through returnArray, using modulo, see if the return value is 0
    for (let j = 0; j <= returnArray.length; j++) {
        if (returnArray[j] % 3 === 0) {
            multipleThreeArr.push(returnArray[j]);
        }
    }
    return multipleThreeArr;
}

// var % 3 = 0
// if more than 0 = not divisible by 3.