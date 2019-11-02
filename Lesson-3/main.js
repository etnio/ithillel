// var a = 2;
// var b = a;

// a = 3;

// console.log(b); // 2

// ---
// Conditions

var defaultZoom = 15,
zoom = defaultZoom,
maxZoom = Math.floor(defaultZoom + defaultZoom * .33),
minZoom = Math.floor(defaultZoom - defaultZoom * .33);

console.log(defaultZoom, zoom, maxZoom, minZoom);

if (zoom > maxZoom) {
    console.log('Sorry! It\'s too much');
} else {
    console.log('It\'s to low');
}

var middle = window.outerHeight / 2; // высота окна браузера
window.addEventListener ('mousemove', function (event) {
    
    var cursorPositionY = event.pageY,
    direction;

    if (cursorPositionY < middle) {
        direction = 'up';
        
        if ((zoom + 1) > maxZoom) {
            console.log('Sorry! It\s too much'); 
        } else {
            zoom++;
        }
    } else {
        direction = 'down';
        if ((zoom - 1) < minZoom) {
            console.log('It\'s too low!'); 
        } else {
            zoom--;
        }
    }

    console.log(zoom);
    //console.log (direction, middle, direction, event.pagey)
});