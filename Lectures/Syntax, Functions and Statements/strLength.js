function strLength(input1, input2, input3){
    let lengthSum = input1.length + input2.length + input3.length
    let avgLength = Math.floor(lengthSum/3);
    console.log(lengthSum);
    console.log(avgLength);
}


strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');