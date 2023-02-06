function solve(numArr){
    let smallArr = [];
    let sorted = numArr.sort((a, b) => a - b);
    smallArr.push(sorted[0]);
    smallArr.push(sorted[1]);
    console.log(smallArr.join(' '));

}


solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);