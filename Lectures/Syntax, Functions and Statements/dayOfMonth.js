function solve(m, Y){
    const now = new Date();
    now.setMonth(m);
    now.setFullYear(Y);
    now.setDate(0);
    console.log(now.getDate());
}


solve(1, 2012);
solve(2, 2021);