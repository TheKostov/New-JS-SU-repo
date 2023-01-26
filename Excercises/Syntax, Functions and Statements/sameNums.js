function solve(startInt){
    let result = 0;
    let startString = startInt.toString();
    let isSame = true;
    let firstNum = startString[0];
    for (let i = 0; i < startString.length; i++){
        if(firstNum !== startString[i]){
            isSame = false;
        }
        result += Number(startString[i]);
    }
    console.log(isSame);
    console.log(result);

}



solve(2222222);
solve(1234);