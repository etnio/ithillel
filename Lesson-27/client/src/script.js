const ajax = new XMLHttpRequest();
const host = 'http://localhost:3000';
ajax.open('get', host + '/users');
ajax.setRequestHeader('Content-Type', 'application/json');
ajax.addEventListener('load', ev => {
    console.log(JSON.parse(ev.target.response));
});

ajax.send();