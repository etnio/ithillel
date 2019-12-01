// Реализовать интерфейс, описанный в гисте:
// https://gist.github.com/fiWhy/3c23f59d2751d41f2faacd3402d8802a

function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distance = distance;
    this.maxDistance = maxDistance;
 }
 
 MilitaryResource.prototype.isReadyToMove;
 MilitaryResource.prototype.isReadyToFight;
 MilitaryResource.prototype.restore;
 MilitaryResource.prototype.clone;
 
 
 function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
 }
 
 Squad.prototype.isReadyToMove;
 Squad.prototype.isReadyToFight;
 Squad.prototype.restore;
 Squad.prototype.getReadyToMoveResources;
 Squad.prototype.combineResources;
 Squad.prototype.cloneResource;