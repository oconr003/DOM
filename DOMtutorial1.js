// EXAMINE THE DOCUMENT OBJECT //

 console.dir(document);							// shows in console everything of the html page of properties and methods 
 console.log(document.domain);	
 console.log(document.URL);
 console.log(document.title);
 console.log(document.doctype);					// e.g html
 console.log(document.head);					// outputs the whole head element to the console
 console.log(document.body);
 console.log(document.all);
 console.log(document.all[10]);					// array (html collection) of everything in the DOM (by tag)
 console.log(document.forms[0]);
 console.log(document.links);
 console.log(document.images);

// GET ELEMENT BY ID 
 console.log(document.getElementById('header-title'));
 var headerTitle = document.getElementById('header-title');
 var header = document.getElementById('main-header');
 console.log(headerTitle);
 headerTitle.textContent = 'Hello';
 headerTitle.innerText = 'Goodbye';				// This overides textContent in header title
 console.log(headerTitle.innerText);			// innerText pays attention to the styling
 headerTitle.innerHTML = '<h3>Hello</h3>'; 		// Puts HTML inside the <h1> dom element
 header.style.borderBottom = 'solid 3px #000';	// .style changes CSS but needs to be camelcase

// GET ELEMENTS BY CLASS NAME 
 var items = document.getElementsByClassName('list-group-item');
 console.log(items);
 console.log(items[1]);
 items[1].textContent = 'Hello 2';
 items[1].style.fontWeight = 'bold';			
 items[1].style.backgroundColor = 'yellow';

// Gives error if we try and make a change to all those in the list
// items.style.backgroundColor = '#f4f4f4';

 for(var i = 0; i < items.length; i++){
   items[i].style.backgroundColor = '#f4f4f4';
 }

// GET ELEMENTS BY TAG NAME 
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
 for(var i = 0; i < li.length; i++){
   li[i].style.backgroundColor = '#f4f4f4';
 }

// QUERYSELECTOR //
var header = document.querySelector('#main-header');				// use # for the id when using queryselector
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');						// will grab first input in html file
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');		// so we can choose the submit input
submit.value="SEND"													// this changes the submit button to SEND

var item = document.querySelector('.list-group-item');				// will get the first item on the page and turn red
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');// :last-child for last on the list
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERYSELECTORALL //
var titles = document.querySelectorAll('.title');					// can put classes, ids, tags inside this

console.log(titles);												// gives us node list of titles, but can run array functions with this (starting at index 0)
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');			// this is a CSS pseudo selector to grab all odd ones by forelooping
var even= document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
   odd[i].style.backgroundColor = '#f4f4f4';
   even[i].style.backgroundColor = '#ccc';
 }

