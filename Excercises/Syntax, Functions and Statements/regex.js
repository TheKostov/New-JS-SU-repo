function solve(words){
    const regex = /[A-z0-9]+/g;
    let result = words.match(regex);
    console.log(result.join(', ').toUpperCase());
}