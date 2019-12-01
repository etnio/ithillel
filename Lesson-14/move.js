function move(el) {
    return {
        el: el,
        x: 0,
        y: 0,
        move: function (direction, distance) {
            var transform;
            switch (direction) {
                case 'right':
                    transform = 'translate(' + (this.x += distance) + 'px, ' + (this.y) + 'px)';
                    break;
                case 'left':
                    transform = 'translate(' + (this.x -= distance) + 'px, ' + (this.y) + 'px)';
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
        left: function (distance) {
            this.move('left', distance);
        },
        right: function (distance) {
            this.move('right', distance);
        },
        up: function (distance) {
            this.move('up', distance);
        },
        down: function (distance) {
            this.move('down', distance);
        }
    }
}


var circleMover = move(document.querySelector('.circle')),
    squareMover = move(document.querySelector('.square'));

console.log(circleMover, squareMover);

setTimeout(function () {
    circleMover.right(310);
    squareMover.left(310);
    circleMover.up(200);
    squareMover.down(200);
    circleMover.right(200);
    squareMover.left(200);


    setTimeout(function () {
        circleMover.left(310);
        squareMover.right(310);
        circleMover.up(200);
        squareMover.down(200);
        circleMover.left(200);
        squareMover.right(200);

        setTimeout(function () {
            circleMover.down(400);
            squareMover.up(400);
        }, 500)
    }, 500)

}, 500)

