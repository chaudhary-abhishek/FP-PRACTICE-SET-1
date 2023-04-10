//Write an ES6 function that takes array of Object representing person and return array of their age using map method

const person = [{
name:"Raghu",
age:27
},{
name:"Sambha",
age:23
},{
name:"lamba",
age:34
}]

const returnAge = person=>person.age;
/* console.log(returnAge({name:"Chal diye",age:19})); */

console.log(person.map(returnAge))
