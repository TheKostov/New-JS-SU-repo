const myPrototype = {};

myPrototype.sayHello = function() {
    console.log(`${this.name} says hi!`);
};

function spawnObject(name, age) {
    const result = {};
    Object.setPrototypeOf(result, myPrototype);

    result.name = name;
    result.age = age;

    return result;
}

const person = spawnObject('John', 33);

console.log(person);

person.sayHello();