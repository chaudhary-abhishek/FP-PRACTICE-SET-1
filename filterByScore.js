const students = [{name:"Radhika",score:95},{name:"Harsh",score:32},{name:"pankaj",score:85},{name:"shreya",score:84}];

const filterByScore = student => student.score>80;
//console.log(filterByScore({name:"Radhika",score:95}));

console.log(students.filter(filterByScore));
