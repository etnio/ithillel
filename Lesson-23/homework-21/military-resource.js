class MilitaryResource {
  constructor(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = 100;
    this.distance = distance;
    this.maxDistance = 1000;
  }
  isReadyToMove(){
    return this.distance < this.maxDistance && this.health > 0;
  }
  isReadyToFight(){
    return this.health > 0;
  }
  restore(){
    this.distance = 0;
    this.health = this.maxHealth;
    return this
  }
  clone(){
    return new MilitaryResource(this.type, this.health, this.distance)
  }
}
