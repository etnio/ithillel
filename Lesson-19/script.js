// var units = document.getElementsByClassName('unit');
// var unitsQueried = document.querySelectorAll('unit')
// var wrapper = document.querySelector('.wrapper');
// var wrapperUnits = wrapper.getElementsByClassName('unit');

// console.log(units.length);
// console.log(unitsQueried.length);

// wrapper.innerHTML = '';

// console.log(units.length);
// console.log(unitsQueried.length);
// console.log(wrapperUnits.length);

// console.log(wrapperUnits === units);

// console.log(wrapperUnits[0].hasAttribute('key'));
// console.log(wrapperUnits[0].getAttribute('key'));
// console.log(wrapperUnits[0].setAttribute('key', 'vvv'));
// console.log(wrapperUnits[0].getAttribute('key'));

// var newDiv = document.createElement('div');

// wrapper.appendChild(newDiv);

// setTimeout(function() {
//     newDiv.setAttribute('test', 'omg' )
// }, 5000)

// newDiv.innerHTML = '<span>HEllo World</span>';

// newDiv.classList.add('a', 'b', 'c')


var wrapper = document.getElementById("wrapper");
​
function cardAsElement(content) {
  var wrapper = document.createElement("div");
  var header = document.createElement("div");
​
  wrapper.classList.add("card__wrapper");
  header.classList.add("card__header");
​
  wrapper.append(header);
  header.appendChild(document.createTextNode(content));
​
  return {
    wrapper: wrapper,
    header: header
  };
}
​
function card(content) {
  return (
    '<div class="card__wrapper"> \
        <div class="card__header"> \
        ' +
    content +
    "\
        </div> \
    </div>"
  );
}
​
var cardElements = cardAsElement("Another card");
​
cardElements.header.classList.add("new--class");
​
wrapper.innerHTML += card("My content");
wrapper.append(cardElements.wrapper);