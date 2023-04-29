const person = {
    name: 'Peter',
    age: 27
};


const prop = Object.defineProperty(person, 'name', {
    value: 'Peter',
    writable: true,
    enumerable: true,
    configurable: true
})

person.name = 'John';

console.log(person)

for(let key in person) {
    console.log(key);
}