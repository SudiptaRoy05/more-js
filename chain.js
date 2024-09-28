// data access 
const data = [{ id: 1, name: 'abul', address: 'mirpur' }];
const add = data[0].address;
console.log(add);


const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo Loptop', price: 43222 },
        { id: 2, name: 'Asus Loptop', price: 53222 },
        { id: 3, name: 'Dell Loptop', price: 63222 },
        { id: 4, name: 'Mac Loptop', price: 143222 },
        { id: 5, name: 'MSI Loptop', price: 93222 }
    ]
}

console.log(products.data[1].price);


const user = {
    id: 432,
    name: 'nasir ali',
    address:{
        street:{
            first:'41/a',
            second:'santibag',
            third:'dhaka',
        }
    }
}

// dot notation 
console.log(user.address.street.second)

// bracket notation 
console.log(user['address']['street']['second'])

const user2 = {
    id: 4321,
    name: 'Vnasir ali',
    address:{
        street:{
            city:'chittagong',
            country:'dhaka',
        }
    }
}

// dot notation 
console.log(user2.address.street?.second)

// without question mark i got undefined, why? 