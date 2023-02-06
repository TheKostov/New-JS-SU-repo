function solve(startArr){
    startArr.sort((a, b) => a - b);
    let deletion  = Math.floor(startArr.length / 2);
    let newArr = startArr.slice(deletion, startArr.length);
    return newArr;
}



solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);