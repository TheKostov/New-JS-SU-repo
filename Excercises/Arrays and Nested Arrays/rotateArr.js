function solve(inputArr, rotations){
    let fodder = 0;
    for (let i = 0; i < rotations; i++){
        fodder = inputArr.pop();
        inputArr.unshift(fodder);
    }
    console.log(inputArr.join(' '));
}

solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);