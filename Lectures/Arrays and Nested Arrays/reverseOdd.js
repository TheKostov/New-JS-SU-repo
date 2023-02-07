function solve(startArr){
    let doubleArr = [];
    for (let i = 0; i < startArr.length; i++){
        if (i % 2 !== 0){
            startArr[i] = startArr[i] * 2;
            doubleArr.push(startArr[i]);
        }
    }

    console.log(doubleArr.reverse().join(' '));
}


solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);