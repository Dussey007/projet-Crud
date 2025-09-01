document.getElementById('p1').innerHTML = history.length + ' pages visitées';

//recuperation du nb page visite et retour en arr av et pg suiv
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

b1.addEventListener('click', allerArr);
b2.addEventListener('click', Arriere);
b3.addEventListener('click', devant);

function allerArr() {
    history.go(-2);
}
function Arriere() {
    history.back();
}
function hforward() {
    history.devant();
}