var Unit = (function () {
    function Unit(health, level) {
        this.maxHealth = this.health = health;
        this.level = level;
    }

    Unit.prototype.attack = function () {
        console.log('Attack');
    }
    
    return Unit;
}());

