class Squad {
  constructor(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
  }
  combineResources(resource) {
    return (this.squad = this.squad.concat(resource));
  }
  isReadyToMove(){
    return this.squad.every( resource => resource.isReadyToMove())
  }
  isReadyToFight(){
    return this.squad.some( resource => resource.isReadyToFight())
  }
  restore(){
    return new Squad(this.squad.map( resource => resource.restore()))
  }
  getReadyToMoveResources(){
    return this.squad.filter( resource => resource.isReadyToMove())
  }
  cloneResource(){
    return new Squad(this.squad)
  }
}
