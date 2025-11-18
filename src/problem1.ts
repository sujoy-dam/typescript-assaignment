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
const result1 = formatValue("hellow") 
const result2 = formatValue(50) 
const result3 = formatValue(false)
console.log(result1) 
console.log(result2) 
console.log(result3) 