function solve(n, k){
    let result = [1];

    for(let i = 1; i < n; i++){
        let lastK = result.slice(-k);
        let sum = 0;

        for(let num of lastK){
            sum += Number(num);
        }
        result.push(sum);
    }
    return result;
}


solve(6, 3);

// [1, 1, 2, 4, 7, 13]

solve(8, 2);

// [1, 1, 2, 3, 5, 8, 13, 21]