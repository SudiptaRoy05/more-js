const glass ={
    name: 'glass',
    price : 234,
    color : 'white',
    isCleaned : true,
}
console.log(glass);
const keys = Object.keys(glass);
console.log(keys)

const values = Object.values(glass);
console.log(values)

// array of array or 2D array 
const entries = Object.entries(glass);
console.log(entries);


// delete glass.isCleaned;
// console.log(glass);

// const {isCleaned, ...shortGlass} = glass
// console.log(shortGlass)


// freeze
// Object.freeze(glass)
// glass.source = 'bangladesh';
// console.log(glass);


Object.seal(glass);
glass.source = 'bangladesh';
delete glass.isCleaned;
glass.price ="1230"
console.log(glass);