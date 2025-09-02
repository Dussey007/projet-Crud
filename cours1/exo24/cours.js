let p1 = document.getElementById('p1');

let p1PreviousSibling = p1.previousSibling;
let p1NextSibling = p1.nextSibling;
let p1PreviousElementSibling = p1.previousElementSibling;
let p1NextElementSibling = p1.nextElementSibling;

p1PreviousElementSibling.style.color = 'blue';
p1NextElementSibling.style.backgroundColor = 'gray';