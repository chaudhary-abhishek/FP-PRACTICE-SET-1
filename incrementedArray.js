const number = [1,2,3,4,5];
const numberIncrementedBy3 = (individualItem)=>individualItem+3;
const incrementedArray = number.map(numberIncrementedBy3);
console.log(incrementedArray);
console.log(number);
