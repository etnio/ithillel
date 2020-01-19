// Lesson-23
const arrNames = ['Sveta', 'Veronika', 'Olga', 'Natalia'];
const newNames = ['Nikolay', 'Dmitriy'];

const updateArr = function (arr, newArr) {
    let arr = [...newArr];
    return arr;
}

console.log(updateArr(arrNames, newNames))