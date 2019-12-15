var Squad = (function () {

   function Squad(defaultResources) {
      this.squad = [];
      if (defaultResources) this.combineResources(defaultResources);
   }
   Squad.prototype.combineResources = function (resource) {
      return this.squad = this.squad.concat(resource);
   };
   Squad.prototype.isReadyToMove = function () {
      return this.squad.every(function (resource) {
         return resource.isReadyToMove();
      })
   };
   Squad.prototype.isReadyToFight = function () {
      return this.squad.some(function (resource) {
         return resource.isReadyToFight();
      })
   };
   Squad.prototype.restore = function () {
      return new Squad(this.squad.map(function (resource) {
         return resource.restore();
      }))
   };
   Squad.prototype.getReadyToMoveResources = function () {
      return this.squad.filter(function (resource) {
         return resource.isReadyToMove();
      })
   };
   Squad.prototype.cloneResource = function () {
      return new Squad(this.squad)
   };
   return Squad
}());