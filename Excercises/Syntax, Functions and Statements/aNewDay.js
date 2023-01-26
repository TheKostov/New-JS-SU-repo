function solve(inputYear, inputMonth, inputDay){
    const realDate = new Date();
    realDate.setFullYear(inputYear);
    realDate.setMonth(inputMonth - 1);
    realDate.setDate(inputDay - 1);
    console.log(`${realDate.getFullYear()}-${realDate.getMonth() + 1}-${realDate.getDate()}`);
}



solve(2016, 9, 30);
solve(2015, 5, 10);