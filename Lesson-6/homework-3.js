// 3. Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль


var numMax = 100,
    numMin = 1;

multi = prompt ('Type a number');

for (i = numMin; i<=numMax; i++ ){
    if (i%+multi===0){
        console.log(i);
    }
}