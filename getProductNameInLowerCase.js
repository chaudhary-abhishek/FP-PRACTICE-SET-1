const products = [{name:"Headphone",stock:150},{name:"speaker",stock:23},{name:"wireless keyboard",stock:350}];
const productNameInLowerCase = product=>product.name.toLowerCase();
/* console.log(productNameInLowerCase({name:"Headphone",stock:150})); */
console.log(products.map(productNameInLowerCase));
