const employees = [
    {
        name: 'Samanta',
        salary: 4000,
        gender: 'female'
    },
    {
        name: 'John',
        salary: 2000,
        gender: 'male'
    },
    {
        name: 'Monika',
        salary: 1500,
        gender: 'female'
    },
    {
        name: 'Vanessa',
        salary: 5000,
        gender: 'female'
    },
];


function ownSome(arr, cb) {
    for (i = 0; i < arr.length; i++) {
        if (cb.call(cb, arr[i], i, arr)) return true;
    } return false;
};

function OwnFilter(arr, cb) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (cb.call(cb, arr[i], i, arr)) newArr.push(arr[i]);
    } return newArr;
};

function OwnReduce(arr, cb, firstValue) {
    let result = firstValue;
    for (i = 0; i < arr.length; i++) {
        result = cb.call(null, result, arr[i], i, arr);
    } return result;
};


console.log(ownSome(employees, (arr) => arr.salary > 4999));

console.log(OwnFilter(employees, (arr) => arr.gender === 'male'));

console.log(OwnReduce(employees,  (sum, current) => sum + current.salary, 0));