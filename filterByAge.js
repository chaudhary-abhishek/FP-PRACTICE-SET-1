const persons = [{name:"Radhika",age:25},{name:"Harsh",age:32},{name:"pankaj",age:45},{name:"shreya",age:24}];
const isAgeGreaterThan30 = person => person.age>30;
//console.log(isAgeGreaterThan30({name:"Radhika",age:35}))
console.log(persons.filter(isAgeGreaterThan30));
