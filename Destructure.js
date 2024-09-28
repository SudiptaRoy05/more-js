const actor ={
    name : 'ananta',
    age : 32,
    phone : '4567890',
    money : 345678908765432,
}

// console.log(actor.phone);
const aPhone = actor.phone
console.log(aPhone);

// DISTRUCTORE 

const {phone} =  actor;
console.log(phone)

const {age : boyos} = actor;
console.log(boyos);


const numbers = [2,3,12,43,55]
const[,,,x,y] = numbers;
console.log(x,y);


function double(a,b){
    return [a*2, b*2];
}

console.log(double(4,5))

const [first, second] = double(6,7);
console.log(first, second);