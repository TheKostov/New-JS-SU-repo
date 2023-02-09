function solve(numArr){
    let sortedNumArr = numArr.sort((a, b) => a - b);
    let finalArr = [];
    while (sortedNumArr.length !== 0){
        finalArr.push(sortedNumArr.shift());
        finalArr.push(sortedNumArr.pop());
    }
    console.log(finalArr);
}





solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);