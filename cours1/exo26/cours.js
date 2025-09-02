//Manage of DOM and elements in javaScript
let b = document.body;
let newP = document.createElement('p');
newP.textContent = 'Text add to the new p';
p1 = document.getElementById('p1');
p2 = document.getElementById('p2');
p5 = document.getElementById('p5');
p6 = document.getElementById('p6');

p1.textContent = 'nouveau text inserbefore';
let newText = document.createTextNode('text add with method creatNod');

b.prepend(newP);
b.append(newText);
b.insertBefore(newP, p1);

p2.insertAdjacentElement('beforeend', newP);

b.insertBefore(p4, p3);

let cloneP1 = p3.cloneNode(true);
p2.insertAdjacentElement('beforeend', cloneP1);

b.removeChild(p5);
p6.remove();