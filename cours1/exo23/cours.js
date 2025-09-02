let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

p2.parentNode.style.backgroundColor = 'yellow';
p1Enfant = p1.childNodes;

p1Enfant[1].style.fontWeight = 'bold';
let p1Elmt = p1.childNodes;

p1Elmt[1].style.textDecoration = 'underline';

let ElementDiv = document.querySelector('div');

ElementDiv.firstChild.style.color = 'red';

