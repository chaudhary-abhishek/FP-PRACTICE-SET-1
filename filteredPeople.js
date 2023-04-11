const peoples = [{name:"Radhika",age:95,city:"Indore"},{name:"Harsh",age:82,city:"Indore"},{name:"pankaj",age:45,city:"galiBanarasKi"},{name:"shreya",age:94,city:"Guwahti"}];

const filteredPeople = people => people.age>70&&people.city==="Indore";
/* console.log(filteredPeople({name:"Radhika",age:75,city:"Indore"})) */
console.log(peoples.filter(filteredPeople))
