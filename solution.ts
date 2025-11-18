const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return value.toUpperCase()
    }
    else if (typeof value === "number") {
        return value * 10
    }
    else if (typeof value === "boolean") {
        return !value;
    }
}
const getLength =(len: string | unknown[]):number=>{
   return len.length
}
class Person{
    name:string;
    age: number
    constructor(name:string, age:number){
        this.name = name,
        this.age = age
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
type Book = {
  title:string;
  rating: number;
}
const filterByRating =(bok:Book[]):Book[]=>{
    console.log(bok)
    const ratingBook = bok.filter((item)=>item.rating >=4)
    return ratingBook;
}
type User ={
    id:number;
    name:string;
    email:string;
    isActive: boolean;
}
const filterActiveUsers = (active: User[]):User[]=>{
console.log(active)
const activeUser = active.filter(item=>item.isActive)
return activeUser
}
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book):string=>{
    // console.log(book)
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
}
type Total={
    name: string;
    price: number;
    quantity: number;
    discount?:number
}

const calculateTotalPrice = (price:Total[]):number=>{
     const total = price.reduce((acc, {price, quantity,discount=0}) => {
        // console.log(acc)
        // console.log(current.quantity)
        const totalPriceOneItem =(price * quantity)
        return acc + (price * quantity) - (discount*totalPriceOneItem/100);
    }, 0)
    console.log(total)
    return total
}