//Get element methods
// get a element by ID
console.log(document.getElementById('one'));
//get elements by className
//NOTE: return to HTMLCollection <=> Array
console.log(document.getElementsByClassName('number'));
//get elements by tagname
console.log(document.getElementsByTagName('h2'));
//get element by querySelector
console.log(document.querySelector('h1'));
//get elements by querySelector
//NOTE: return to NodeList <=> Array
console.log(document.querySelectorAll('h2'));
//Get element methods-2
var boxNode = document.querySelector('.box2');
console.log(boxNode);
var aElement = boxNode.getElementsByTagName('p');
console.log(aElement);
//Get element methods -3

//----------Dom attribute
var headingElement =
    document.querySelector('h1');
console.log(headingElement);
//add attribute 
// use setter
headingElement.title = 'Heading';
headingElement.className = 'myClass';
//use method
headingElement.setAttribute('id', 'heading1');
//get attribute
console.log(headingElement.getAttribute('id'));
//-----------innerText and textContent properties
console.log(headingElement.textContent);
console.log(headingElement.innerText);
//change content
// headingElement.innerText = 'New Heading';
// headingElement.textContent = 'New Heading 1';
// different between textContent and innerText
//innerText tra ve những gì ta thấy trên website
//textContent  tra ve nhung noi dung thuc su dang co trong source code
//textContent hieu theo cau truc DOM
//NOTE: innerText is attribute of Element!
//-------------innerHTML and outerHTML properties
var boxElement = document.querySelector('.box');
//add element node in boxElement
boxElement.innerHTML = 
    '<h1 title = "name">Nguyen Van Khanh</h1>';
//-----------------some node properties
//-------------------DOM CSS
boxElement.style.backgroundColor = 'red';
//Thay doi nhieu thuoc tinh
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
});
//get properties
console.log(boxElement.style.backgroundColor);
//---------------Classlist property
//length, value
console.log(boxElement.classList.length);
console.log(boxElement.classList.value);
console.log(boxElement.classList[0]);
//add
boxElement.classList.add('myBox')
//contains
console.log(boxElement.classList.contains('myBox'));
//remove
boxElement.classList.remove('myBox');
console.log(boxElement.classList.contains('myBox'));
//toggle
boxElement.classList.toggle('myBox');
//ứng dụng
// setInterval(function() {
//     boxElement.classList.toggle('myBox');
// }, 1000)
//----------DOM Events
//attribute events (line 22 in source index.html)
//Assign even using the element node
var h1Element = document.querySelector('h1');
h1Element.onmouseover = function() {
    h1Element.style.color = 'blue';
}
//su dung PointerEvent de lay ra element dang nhan Event
var h1Elements = document.querySelectorAll('h1');
for(var i = 0; i<h1Elements.length; i++) {
    h1Elements[i].onclick = function(e) {
        console.log(e.target);
    }
}
//------------DOM events example
//change event
//input event
//keyup and keydown event
var inputElement =
document.querySelector('input[type="text"]');
var inputValue;
// inputElement.onchange/*or oninput*/ = function(e) {
//     inputValue = e.target.value;
//     console.log(inputValue);
// }
 var inputCheckElement =
 document.querySelector('input[type="checkbox"]');
inputCheckElement.onchange = function(e) {
    console.log(e.target.checked);
}
var selectElement =
document.querySelector('select');
selectElement.onchange = function(e) {
    console.log(e.target.value);
}
inputElement.onkeyup = function(e) {
    inputValue = e.which;
    switch (inputValue) {
        case 27:
            console.log('Exit');
            break; 
        case 13:
            console.log('Enter');
            break;
        default:
            break;
    }
}
//preventDefault (bo event mac dinh cua trinh duyet)
var aElements = document.querySelectorAll('a');
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function (e) {
        //thuc hien bo events mac dinh
        if(!e.target.href.startsWith('http://f8.edu.vn')){
            e.preventDefault();
        }
    }
}
var ulElement = document.querySelector('.list');
ulElement.onmousedown = function (e) {
    e.preventDefault();
    console.log(e.target.innerText)
}
//stopPropagation
var divElement = document.querySelector('#clickDiv');
divElement.onclick = function (e) {
    console.log('DIV');
}
var buttonElement = document.querySelector('#clickButton');
buttonElement.onclick = function (e) {
    console.log('Click me');
    //bo hien tuong noi bot de chi click duoc button
    e.stopPropagation();
}

