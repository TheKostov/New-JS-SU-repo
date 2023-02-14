function solve(stringArr){
    const result = stringArr.reduce((acc, curr) => {
        const [name, level, item] = curr.split( " / ");
        const hero = {
            name,
            level: Number(level),
            item: item ? item.split(', ') : [],
        };
        acc.push(hero);
        return acc;
    }, []);
    console.log(JSON.stringify(result));
    // return JSON.stringify(result);
}