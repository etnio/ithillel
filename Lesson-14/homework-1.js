// Реализовать интерфейс, описанный в гисте:
// https://gist.github.com/fiWhy/3c23f59d2751d41f2faacd3402d8802a

function MilitaryResource(type, health, distance) {
   this.type = type;
   this.health = health;
   this.maxHealth = 100;
   this.distance = distance;
   this.maxDistance = 1000;
}

MilitaryResource.prototype.isReadyToMove = function () {
   return this.distance < this.maxDistance && this.health > 0;
};

MilitaryResource.prototype.isReadyToFight = function () {
   return this.health > 0;
};

MilitaryResource.prototype.restore = function () {
   this.distance = 0;
   this.health = this.maxHealth;
   return this
};

MilitaryResource.prototype.clone = function () {
   return new MilitaryResource(this.type, this.health, this.distance)
};


var miner = new MilitaryResource('miner', 0, 750);
console.log(miner.isReadyToMove());

var rocketeer = new MilitaryResource('rocketeer', 34, 0);
console.log(rocketeer.isReadyToFight());

var archer = new MilitaryResource('archer', 56, 179);
console.log(archer.clone());

var solder = new MilitaryResource('solder', 30, 500);
console.log(solder.restore());
console.log(solder);

function Squad(defaultResources) {
   this.squad = [];
   if (defaultResources) this.combineResources(defaultResources);
}

// function Squad(unitOne, unitNext) {
//    return Array.prototype.reduce
//       .apply(arguments, function (unitOne, unitNext) {
//          return unitOne + unitNext;
//       }, 0)
// }

Squad.prototype.combineResources = function (defaultResources) {
   var ArrUnits = [];
   for (i = 0; i < arguments.length; i++) {
       ArrUnits.push(defaultResources[i]);    
   }
   return this.squad = ArrUnits;
};

// Squad.prototype.combineResources = function () {
//    return Array.prototype.reduce
//       .apply(arguments, function (acc, next) {
//          return acc + next;
//       }, 0)
// };



var resourceSquad = new Squad(solder, solder, solder, archer, rocketeer);
console.log(Squad(solder, solder, solder, archer, rocketeer));


Squad.prototype.isReadyToMove = function () {
   return this.squad.every(function (unit) {
      return unit.isReadyToMove();
   })
};

Squad.prototype.isReadyToFight = function () {
   return this.squad.some(function (unit) {
      return unit.isReadyToFight();
   })
};

Squad.prototype.restore;

Squad.prototype.getReadyToMoveResources;

Squad.prototype.cloneResource;

