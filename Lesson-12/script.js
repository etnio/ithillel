//console.log('Новы JS урок');
//State

var circle = document.querySelector('.circle');
var currentDistance = 0;

function move(direction, distance) {
    var transform;
    switch (direction) {
        case 'right':
            transform = 'translate(' + (currentDistance += distance) + 'px, 0)';
            break;
        case 'left':
            transform = 'translate(' + (currentDistance -= distance) + 'px, 0)';
            break;
    }
    circle.style.transform = transform;
}


setTimeout(function () {
    move('right', 310);
    move('right', 200);

    setTimeout(function () {
        move('left', 100);

    }, 500)

}, 500)

