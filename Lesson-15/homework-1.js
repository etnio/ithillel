// Переписать реализацию предыдущего задания с использованием паттерна "модуль"
//// Реализовать интерфейс, описанный в гисте:
//// https://gist.github.com/fiWhy/3c23f59d2751d41f2faacd3402d8802a

var miner = new Resource('miner', 0, 750);
console.log(miner.isReadyToMove());


var rocketeer = new Resource('rocketeer', 34, 1000);
console.log(rocketeer.isReadyToFight());


var archer = new Resource('archer', 56, 179);
console.log(archer.clone());


var solder = new Resource('solder', 30, 500);
console.log(solder.restore());
console.log(solder);



var resourceSquad = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad);

var resourceSquad2 = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad2.isReadyToMove());

var resourceSquad3 = new Squad([solder, archer, archer]);
console.log(resourceSquad3.isReadyToFight());

var resourceSquad4 = new Squad([rocketeer, archer, miner]);
console.log(resourceSquad4.restore());

var resourceSquad5 = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad5.getReadyToMoveResources());

var resourceSquad6 = new Squad([solder, archer, miner]);
console.log(resourceSquad6, resourceSquad6.cloneResource());