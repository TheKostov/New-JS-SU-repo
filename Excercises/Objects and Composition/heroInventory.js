function solve(stringArr){
    const result = stringArr.reduce((acc, curr) => {
        const [name, level, item] = curr.split( " / ");
        const hero = {
            name,
            level: Number(level),
            items: item ? item.split(', ') : [],
        };
        acc.push(hero);
        return acc;
    }, []);
    return JSON.stringify(result);
}