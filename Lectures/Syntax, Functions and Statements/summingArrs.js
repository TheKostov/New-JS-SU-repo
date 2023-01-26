function solve(numArrs){
    let sum = 0;
    let sum1 = 0;
    let sum2 = '';
    for (let i = 0; i < numArrs.length; i++){
        sum += numArrs[i];
        sum1 += 1 / numArrs[i];
        sum2 += String(numArrs[i]);
    }
    console.log(sum);
    console.log(sum1);
    console.log(sum2);
}



solve([1, 2, 3]);
