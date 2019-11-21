function sum() {
    var res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];        
    }
    return res;

}

console.log(sum(4, 5, 7));