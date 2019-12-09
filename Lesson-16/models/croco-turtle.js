var CrocoTurtle = (function () {
    function CrocoTurtle(health, level) {}

    CrocoTurtle.prototype = Object.create(Unit.prototype);
    CrocoTurtle.prototype.constructor = CrocoTurtle;
    
    return CrocoTurtle;
}());