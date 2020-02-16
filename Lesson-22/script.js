ES6 

var foo = 3;
{
    var foo = 6;
}

let foo = 3;
{
    let foo = 6;
}
console.log(foo, )

function foo(bar = 'test') {
    console.log(bar);
}

foo(0);

