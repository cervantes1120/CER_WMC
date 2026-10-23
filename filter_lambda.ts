const myarray = [1, 7, 4, 2, 8, 3, 13, 11, 5, 6, 9, 10, 12, 14, 15, 16, 17, 18, 19, 20];

let filterCount = 0;
function isEven(x: number) {
    filterCount++;
    return (x % 3 !== 0); 
}


function primeNumber(x: number) {
    return (x > 1 && x / 1 === x && x / x === 1);
}

const evenNumbers = myarray.filter(x => x % 3 !== 0);
const primeNumbers = myarray.filter(primeNumber);
console.log(`Even numbers in the array: ${evenNumbers} `);
console.log(`Prime Numbers in the array: ${primeNumbers} `);



