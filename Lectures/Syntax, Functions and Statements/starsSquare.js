function Stars(input){
    let starsArray = [];
    for (let i = 0; i < input; i++){
        starsArray[i] = '*';
    }
    let arrToString = starsArray.join(' ');
    for (let j = 0; j < input; j++){
        console.log(arrToString);
    }
}
Stars(5);