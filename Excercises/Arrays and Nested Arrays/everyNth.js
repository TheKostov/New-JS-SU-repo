function solve(strArr, num){
    let resultArrr = [];
    for (let i = 0; i < strArr.length; i++){
        if (i % num == 0 || i == 0){
            resultArrr.push(strArr[i]);
        }
    }
    console.log(resultArrr);
}


solve(['5', '20', '31', '4', '20'], 2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);