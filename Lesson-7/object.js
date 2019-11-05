var card = {
    name : 'Test',
    date : '04.11.2019',
    description : 'Test description',
    active : true,
    position : 0
};

card.additionalProp = 'new properties';

const cardList = [];
cardList[cardList.length] = card;

console.log(card.name, cardList);
console.log(card['name'], cardList);