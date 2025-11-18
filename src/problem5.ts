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
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));