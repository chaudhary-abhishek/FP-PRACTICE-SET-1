const numbers = [1,3,5,15,18,30,45,60,23];
const divisibleBy3And5 = number=>number%5===0&&number%3===0;
/* console.log(divisibleBy3And5(18)) */

console.log(numbers.filter(divisibleBy3And5));
