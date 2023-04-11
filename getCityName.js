const cities = [{name:'New York',population:238291293},{name:'New Delhi',population:320003000}];
const getCitiesName = (city)=>city.name;
/* console.log(getCitiesName({name:'New York',population:238291293})); */
console.log(cities.map(getCitiesName));
