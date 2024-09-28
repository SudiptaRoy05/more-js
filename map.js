const arr = [1, 3, 5, 7, 9]
const newArr = [];
for (const number of arr) {
    if (number % 2 !== 0) {
        const sum = number + 1;
        newArr.push(sum);
    }
}

console.log(newArr)

const newArr1 = arr.map(n => n + 1)
console.log(newArr1)


// forEach 
arr.forEach(n => console.log(n));

// filter 
const arr1 = [1, 2, 4, 5, 3, 6, 7, 8]
const newArr2 = arr1.filter(n => n % 2 === 0);
console.log(newArr2)



// find 
const newArr3 = arr1.find(n => n % 2 === 0);
console.log(newArr3);


console.log('................................')
// reduce 
const newArr4 = arr1.reduce((acc, num) => acc + num, 0)
console.log(newArr4);

console.log('----------------------Array of Obj-------------------')
const products = [
    {
        id: 1, name: 'lenovo', price: 34555
    },
    {
        id: 2, name: 'Asus', price: 74555
    },
    {
        id: 3, name: 'Dell', price: 64555
    },
    {
        id: 4, name: 'MSI', price: 94555
    }
]

const names = products.map(n => n.name);
console.log(names)

// map 
const prices = products.map(p => p.price);
console.log(prices)


// reduce 
const totalPrice = products.reduce((a,n) => a+n.price,0);
console.log(totalPrice);

// forEach 
products.forEach(p => console.log(p.id));

// filter 
const expensive = products.filter(p => p.price > 70000);
console.log(expensive)

// cheap 
const cheap = products.find(p => p.price < 70000);
console.log(cheap);