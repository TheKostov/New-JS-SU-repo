function solve(inputStr){
    let result = {};
    for (let i = 0; i < inputStr.length; i++){
        const product = inputStr[i];
        const calories = inputStr[i + 1];
        if (i % 2 === 0){
            result[product] = Number(calories);
        }
    }
    console.log(result);
}



solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);