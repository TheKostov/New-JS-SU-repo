function solve(matrix){
    let highest = matrix[0][0];
    for (let row of matrix){
        for (let el of row){
            if (el > highest){
                highest = el;
            }
        }
    }
    return highest;
}

solve([[20, 50, 10], [8, 33, 145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);