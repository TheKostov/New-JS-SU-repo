function solve(pies, first, last){
    const firstIndex = pies.indexOf(first);
    const lastIndex = pies.indexOf(last);
    return pies.slice(firstIndex, lastIndex +1);
}