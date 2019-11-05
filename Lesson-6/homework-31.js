// 3.1 (Усложняем) Кроме кратного запросить количество числе, которые следует вывести


var numMax = 100,
    numMin = 1;

multi = prompt ('Type number ');
count = prompt ('Type count of numbers to show');

for (i = numMin; i <= numMax; i++ ){
    if (i%+multi === 0 && +count !==0){
        console.log(i); 
        count--
    }
}