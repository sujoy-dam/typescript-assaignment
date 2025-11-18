type Book = {
  title:string;
  rating: number;
}
const filterByRating =(bok:Book[]):Book[]=>{
    console.log(bok)
    const ratingBook = bok.filter((item)=>item.rating >=4)
    return ratingBook;
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));