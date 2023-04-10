//Most used utility function 
//understanding ---> can take function as a parameter
//--->Return Functions
//--->Or both

// map
//Syntax
//map(functionThatTakeOneElementAtATime)
//          or
//map(functionThatTakeOneElementAtATimeAndIndex)

/* const numbers = [1,4,9,16];
const roots = (number)=>Math.sqrt(number);
//console.log(roots(36));
console.log(numbers.map(roots)); */

/* const numbers = [1,2,3,4,5,6];
const square = number=>number*number;
//console.log(square(8));
console.log(numbers.map(square)); */

/* const arrayOfString = ["Hey","let's","learn","together"];
const strLength = individualString=>individualString.length;
//console.log(strLength("Raghav"));

console.log(arrayOfString.map(strLength)); */

//filter
//to use filter the call back function should return boolean value
//it filters array based on particular condition

/* const numbers = [1,2,3,4,5,6,7,8,9];
const isOdd = number=>number%2!=0;
console.log(isOdd(4));
console.log(numbers.filter(isOdd)); */

/* const numbers = [10,23,24,110,230,43,320];
//const isDivisibleBy10 = number=>number%10==0;
//console.log(isDivisibleBy10(10))
console.log(numbers.filter(number=>number%10==0)); */

/* const numbers = [1,23,5,43,5,3,65,8];
const numberGreaterThan10 = number =>number>=10;
console.log(numbers.filter(numberGreaterThan10)) */
