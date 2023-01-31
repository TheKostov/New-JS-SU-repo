function chef(num1, task1, task2, task3, task4, task5){
    let taskArr = [task1, task2, task3, task4, task5]
    let result = num1
    for (let i = 0; i < taskArr.length; i++){
        switch(taskArr[i]){
            case 'chop': result = result / 2; console.log(result); break;
            case 'dice': result = Math.sqrt(result); console.log(result); break;
            case 'spice': result = result + 1; console.log(result); break;
            case 'bake': result = result * 3; console.log(result); break;
            case 'fillet': result = result - result * 0.2; console.log(result); break;
        }
    }
}

chef('32', 'chop', 'chop', 'chop', 'chop', 'chop');
chef('9', 'dice', 'spice', 'chop', 'bake', 'fillet');