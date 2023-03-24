function solve() {
    const arg = Array.from(arguments);
    const count = new Map();
    arg.forEach((element) => {
        const type = typeof element;
        console.log(`${type}: ${element}`)
    })


}








solve('cat', 42, function () { console.log('Hello world!'); });

/* string: cat

number: 42

function: function () { console.log('Hello world!'); }

string = 1

number = 1

function = 1 */