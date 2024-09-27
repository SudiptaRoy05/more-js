const arr = [1,3,5,7,9]
const newArr = [];
for (const number of arr) {
    if(number % 2 !== 0){
        const sum = number+1;
        newArr.push(sum);
    }
}

console.log(newArr)

const newArr1 = arr.map(n =>n+1)
console.log(newArr1)