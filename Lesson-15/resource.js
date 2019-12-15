var Resource = (function () {

   function Resource(type, health, distance) {
       this.type = type;
       this.health = health;
       this.maxHealth = 100;
       this.distance = distance;
       this.maxDistance = 1000;
       return this
   }
   Resource.prototype.isReadyToMove = function() {
       return this.distance < this.maxDistance && this.health > 0;
   };
   Resource.prototype.isReadyToFight = function () {
       return this.health > 0;
   };
   Resource.prototype.restore = function () {
       this.distance = 0;
       this.health = this.maxHealth;
       return this
   };
   Resource.prototype.clone = function () {
       return new Resource(this.type, this.health, this.distance)
   };
   return Resource
}());