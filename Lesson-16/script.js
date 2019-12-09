
var croco = new CrocoTurtle(200, 5);
var croco = new Unit(200, 5);
console.log(croco);
console.log(unit);

unit.attack();

var newobj = Object.create(Unit.prototype);

console.log(newobj);