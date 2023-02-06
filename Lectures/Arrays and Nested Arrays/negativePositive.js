function solve(initialArr){
    let newArr = []
    for (let i = 0; i < initialArr.length; i++){
        if (initialArr[i] < 0){
            newArr.unshift(initialArr[i]);
        }
        else {
            newArr.push(initialArr[i]);
        }
    }
    console.log(newArr.join('\n'));
}


solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);