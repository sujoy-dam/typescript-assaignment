const calculateTotalPrice = (price) => {
    const total = price.reduce((acc, {price, quantity,discount=0}) => {
        // console.log(acc)
        // console.log(current.quantity)
        const totalPriceOneItem =(price * quantity)
        return acc + (price * quantity) - (discount*totalPriceOneItem/100);
    }, 0)
    console.log(total)
    return total
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
calculateTotalPrice(products);