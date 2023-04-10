//Write an ES6 function that takes an array of string and returns an array with all the string capitalize using map method
const arrayOfString = ["acha","chalta","hu","duwao","mai","yaadrakhna"];
const capitalizeString = aString =>aString.toUpperCase();
/* console.log(capitalizeString("abhishek")); */
console.log(arrayOfString.map(capitalizeString));
