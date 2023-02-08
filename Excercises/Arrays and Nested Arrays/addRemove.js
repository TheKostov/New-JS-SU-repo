function solve(commandArr){
    let numArr = []
    let counter = 0;
    for (let i = 0; i < commandArr.length; i++){
        if (commandArr[i] == 'add'){
            counter++;
            numArr.push(counter);
        }
        if (commandArr[i] == 'remove'){
            counter++;
            numArr.pop();
        }
    }
    if (numArr.length < 1){
        console.log('Empty')
    } else {
        console.log(numArr.join('\n'));
    }
}


solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);