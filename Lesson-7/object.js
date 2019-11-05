var card = {};
cardName = 'My card';

card.name = 'Test';
card.date = '04.11.2019';
card.description = 'Test description';
card.active = true;
card.position = 0;

//card.cardName = cardName; // card('cardName') = 'My card'
card[cardName] = cardName; // card('My card') = 'My card'

console.log(card);