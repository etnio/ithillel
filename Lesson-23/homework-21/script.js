const miner = new MilitaryResource('miner', 0, 750);
console.log(miner.isReadyToMove());


const rocketeer = new MilitaryResource('rocketeer', 34, 1000);
console.log(rocketeer.isReadyToFight());


const archer = new MilitaryResource('archer', 56, 179);
console.log(archer.clone());


const solder = new MilitaryResource('solder', 30, 500);
console.log(solder.restore());
console.log(solder);


const resourceSquad = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad);

const resourceSquad2 = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad2.isReadyToMove());

const resourceSquad3 = new Squad([solder, archer, archer]);
console.log(resourceSquad3.isReadyToFight());

const resourceSquad4 = new Squad([rocketeer, archer, miner]);
console.log(resourceSquad4.restore());

const resourceSquad5 = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad5.getReadyToMoveResources());

const resourceSquad6 = new Squad([solder, archer, miner]);
console.log(resourceSquad6, resourceSquad6.cloneResource());