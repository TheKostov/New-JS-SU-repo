function solve(stringArr){
    let result = ''
    for (let i = 0; i < stringArr.length; i++){
        if (i % 2 == 0){
            result += stringArr[i] + " ";
        }
    }
    console.log(result);
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);