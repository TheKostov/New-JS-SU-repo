function solve(startArr){
    let sum = Number(startArr.pop()) + Number(startArr.shift());

    return sum;
}



solve(['20', '30', '40']);

solve(['5', '10']);