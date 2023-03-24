function getFibonator() {
    let num  = 1;
    let previous = 0;

    function fib () {
        let fibNumber = num + previous;
        num = previous;
        previous = fibNumber;
        return fibNumber;
    }

    return fib; 
}





let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13