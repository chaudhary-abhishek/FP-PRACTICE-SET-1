const books = [{name:"The Alchemist",author:"Paulo cohelo",genre:"Fiction"},{name:"The Hitchikker's guide to galaxy",author:"Douglas Adams",genre:"Science Fiction"},{name:"1984",author:"George orwell",genre:"Science Fiction"}];

const filterByGenre = book =>book.genre==="Science Fiction";
/* console.log(filterByGenre({name:"The Alchemist",author:"Paulo cohelo",genre:"Science Fiction"})) */

console.log(books.filter(filterByGenre));
