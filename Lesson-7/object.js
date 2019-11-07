var card = {
    name : 'Test',
    date : '04.11.2019',
    description : 'Test description',
    active : true,
    position : 0
};

var customObj = Object.create(Object.prototype, {
    closed : {
        writeble : false,
        confugurable : false,
        enumarable : false,
        value : 'private data'
    }
});
console.log(customObj);

for (var key in customObj) {
    console.log(key, card[key]);
}