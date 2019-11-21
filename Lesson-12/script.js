//console.log('Новы JS урок');
//State

var circle = {
    el: document.querySelector('.circle'),
    x: 0,
    y: 0,
    move: function (direction, distance) {
        var transform;
        switch (direction) {
            case 'right':
                transform = 'translate(' + (this.x += distance) + 'px, ' + (this.y) +  'px)';
                break;
            case 'left':
                transform = 'translate(' + (this.x -= distance) + 'px, ' + (this.y) +  'px)';
                break;
            case 'up':
                transform = 'translate(' + (this.x) + 'px, ' + (this.y -= distance) + 'px)';
                break;
            case 'down':
                transform = 'translate(' + (this.x) + 'px, ' + (this.y += distance) + 'px)';
                break;
        }
        this.el.style.transform = transform;
    }
}






setTimeout(function () {
    circle.move('right', 310);
    circle.move('up', 100);
    circle.move('right', 200);

    setTimeout(function () {
        circle.move('left', 100);
        circle.move('up', 200);
        circle.move('left', 100);

    }, 500)

}, 500)

