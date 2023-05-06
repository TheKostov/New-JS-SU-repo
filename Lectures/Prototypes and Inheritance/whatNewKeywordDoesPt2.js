function createConstructor(ctor) {
    return function(...params){
        const result = {};
        Object.setPrototypeOf(result, ctor.prototype);
        
        ctor.apply(result, params);
        return result;
    }
}

function Person(name, age) {
    this.name;
    this.age;
}

Person.prototype.sayHello = function() {
    console.log(`${this.name} says hi!`);   
}

const PersonConstructor = createConstructor(Person);

const person = PersonConstructor('John', 34);
 
console.log(person);