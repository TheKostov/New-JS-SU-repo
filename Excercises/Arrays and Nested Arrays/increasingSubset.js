function solve(inputArr){
    let resulArr = [];
    let largest = inputArr[0];
    for (let i = 0; i < inputArr.length; i++){
        if (inputArr[i] >= largest){
            largest = inputArr[i];
            resulArr.push(largest);
        }
    }
    return resulArr;
}


solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);