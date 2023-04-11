const fruits = ["Apple","Banana","pineApple","WaterMelon"];
const getFruitLengthGreaterThan5 = fruit=>fruit.length>5;
//console.log(getFruitLengthGreaterThan5("Apple"));
console.log(fruits.filter(getFruitLengthGreaterThan5));
