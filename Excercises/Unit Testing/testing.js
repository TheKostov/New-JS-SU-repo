function isOddOrEven (string) {
    if(typeof(string) !== 'string'){
        return undefined;
    }
    if (string.length % 2 == 0){
        return 'even';
    }
    return 'odd';
}

module.exports = isOddOrEven;



// Uncaught Error Error: Cannot find module '/home/thekostov/SoftUniJS/SU-JS-Advanced-Jan2023/New-JS-SU-repo/Lectures/Advanced Functions/node_modules/mocha/bin/_mocha'