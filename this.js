class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is Sleeping now`)
    }
    activity(){
        this.sleep();
    }
}

const sizan = new Person('Sizan', 19);
console.log(sizan);
sizan.sleep();

const siraj = new Person('Siraj',25);
siraj.activity();