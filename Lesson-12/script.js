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
    },
    left: function(distance) {
        this.move('left', distance);
    },
    right: function(distance) {
        this.move('right', distance);
    },
    up: function(distance) {
        this.move('up', distance);
    },
    down: function(distance) {
        this.move('down', distance);
    },
}


setTimeout(function () {
    circle.right(310);
    circle.up(100);
    circle.right(200);

    setTimeout(function () {
        circle.left(100);
        circle.up(200);
        circle.left(100);

    }, 500)

}, 500)

