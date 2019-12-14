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


var rocketeer = new MilitaryResource('rocketeer', 34, 1000);
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


Squad.prototype.combineResources = function (resource) {
   return this.squad = this.squad.concat(resource);
};
var resourceSquad = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad);


Squad.prototype.isReadyToMove = function () {
   return this.squad.every(function (resource) {
      return resource.isReadyToMove();
   })
};
var resourceSquad2 = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad2.isReadyToMove());


Squad.prototype.isReadyToFight = function () {
   return this.squad.some(function (resource) {
      return resource.isReadyToFight();
   })
};
var resourceSquad3 = new Squad([solder, archer, archer]);
console.log(resourceSquad3.isReadyToFight());


Squad.prototype.restore = function () {
   return new Squad(this.squad.map(function (resource) {
      return resource.restore();
   }))
};
var resourceSquad4 = new Squad([rocketeer, archer, miner]);
console.log(resourceSquad4.restore());


Squad.prototype.getReadyToMoveResources = function () {
   return this.squad.filter(function (resource) {
      return resource.isReadyToMove();
   })
};
var resourceSquad5 = new Squad([solder, archer, rocketeer]);
console.log(resourceSquad5.getReadyToMoveResources());


Squad.prototype.cloneResource = function () {
   return new Squad(this.squad)
};
var resourceSquad6 = new Squad([solder, archer, miner]);
console.log(resourceSquad6, resourceSquad6.cloneResource());
