// Доп:
// Реализовать функцию нахождения факториала

function factorial(n) {
    if (n > 1) {
        return n * factorial(n-1);
    } return 1;
    
}

console.log(factorial(7));