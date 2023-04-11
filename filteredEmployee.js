const employees = [{name:"Ravikant",age:28,salary:26000},{name:"Amit",age:24,salary:64000},{name:"Anshu",age:29,salary:29000}];
const filteredEmployee = employee => employee.age>25&&employee.salary>22000;
/* console.log(filteredEmployee({name:"Ravikant",age:18,salary:26000})) */

console.log(employees.filter(filteredEmployee))
