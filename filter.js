const arr = [33, 50, 79, 101, 90, 78, 30];

const newArr = arr.filter(n => n%10 === 0)
console.log(newArr)


const newArr1 =[];
for (const num of arr) {
    if(num%10 ===0){
        newArr1.push(num)
    }
}

console.log(newArr1)



const instructor = [
    {name:'Nodi', age:28,position:'senior'},
    {name:'Yodi', age:88,position:'junior'},
    {name:'Lodi', age:28,position:'senior'}
]
const instructor1 = instructor.filter(n => n.position === 'senior');
console.log(instructor1)