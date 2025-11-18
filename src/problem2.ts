const getLength =(len: string | unknown[]):number=>{
   return len.length
}
const result1 = getLength('typescr ipt')
const result2 = getLength([10, 20, 30, 40])

console.log(result1)
console.log(result2)