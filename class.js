// const products = [
//     { id: 1, name: 'lenovo', price: 34555 },
//     { id: 2, name: 'Asus', price: 74555 },
//     { id: 3, name: 'Dell', price: 64555 },
//     { id: 4, name: 'MSI', price: 94555 }
// ]


// class Product {
//     country ="Bangladesh";
//     constructor(name) {
//         this.name = name;
//     }
//     speak(talk) {
//         console.log(`talking about ${talk}`);
//     }
// }

// const lenovo = new Product('lelenovo');
// lenovo.speak('hola')
// console.log(lenovo)



class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject
    }
    lecture(){
        console.log('sir is teaching math');
    }
}

const tapan = new Teacher('Tapan', 'math');
console.log(tapan);

tapan.lecture();

