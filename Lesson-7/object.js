var card = {
    name : 'Test',
    date : '04.11.2019',
    description : 'Test description',
    active : true,
    position : 0
};

for (var key in card) {
    console.log(key, card[key]);
}