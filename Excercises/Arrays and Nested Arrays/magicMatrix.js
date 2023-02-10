function solve(matrix){
    let sumRows = 0;
    let sumColumns = 0;

    for (let i = 0; i < matrix.length; i++){
        let currentArray = matrix[i].join("");
        for (let j = 0; j < currentArray.length; j++){
            sumRows += Number(currentArray[j]);
            sumColumns += Number(currentArray[0]);
        }
    }
    if (sumRows == sumColumns){
        console.log("true");
    } else {
        console.log("false");
    }
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);

solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);