const myarray = [1, 7, 4, 2, 8, 3, 13, 11, 5, 6, 9, 10, 12, 14, 15, 16, 17, 18, 19, 20];

let sorted = myarray.sort((a,b) => a - b);
let sortedDesc = myarray.sort((a,b) => { return b - a; });
const sortedRandom = myarray.sort((a, b) => Math.random() - 0.5);
console.log(`Sorted array: ${sorted}`);
console.log(`Sorted array (descending): ${sortedDesc}`);
console.log(`Sorted array (random): ${sortedRandom}`);
