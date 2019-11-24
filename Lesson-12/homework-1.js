// Objects
// Опираясь на домашнее задание runner и классную работу реализовать объект,
// который будет манипулировать сферой, уменьшая и увеличивая ее размер ( transform scale ). 
// Методы увеличения и уменьшения могут быть названы как угодно.


var circle = {
    el: document.querySelector('.circle'),
    n: 1,
    scale: function (scaleValue) {
        var transform;
        switch (true) {
            case (scaleValue != this.n):
                transform = 'scale(' + (this.n *= scaleValue) + ', ' + this.n;
                break;
        }
        this.el.style.transform = transform;
    },
}


setTimeout(function () {
    circle.scale(5.1);
    setTimeout(function () {
        circle.scale(0.4);
    }, 500)

}, 500)

