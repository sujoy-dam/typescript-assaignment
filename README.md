### What are some differences between interfaces and types in TypeScript?
- **interface সহজে extends করা যায়-**
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

-**type ও extend করা যায়, intersection (&) ব্যবহার করে।**
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};

- **type দিয়ে প্রকাশ করা যায়—**

- Union types
- Primitive types
- Tuple types
- Function types

type Status = "success" | "error" | "loading";
type ID = number | string;



- **Interfaces দিয়ে Object প্রকাশ করা হয়**

- Interfaces সাধারণত object shape বা class structure define করতে ব্যবহৃত হয়।

interface Car {
  id:number ;
  name:string;

}

### Provide an example of using union and intersection types in TypeScript.
