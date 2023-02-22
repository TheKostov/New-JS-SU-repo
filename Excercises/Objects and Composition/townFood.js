function solve(arr){
    let obj = {};

    for (let index = 0; index < arr.length; index++){
        const element = arr[index];
        const [town, product, price] = element.split(' | ');
        if (!obj[town]) obj[product] = {};
        obj[product][town] = Number(price);
    }
    let finaResult = [];
    for (const key in obj){
        let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        let [town, price] = sorted[0];
        finaResult.push(`${key} -> ${price} (${town})`)
    }
    return finaResult.join('\n');
}


solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])