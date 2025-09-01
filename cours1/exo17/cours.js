//FONCTIONS FOR RESIZIMG THE FORM OF CURRENT WINDOW THAT WE JUST OPEN BY FUNCTION JS open.window

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let winSize = 'width=500, height=500';

b1.addEventListener('click', openWindow);
b2.addEventListener('click', resizeWindowBy);
b3.addEventListener('click', resizeWindowTo);
b4.addEventListener('click', moveWindowBy);
b5.addEventListener('click', moveWindowTo);
b6.addEventListener('click', scrollWindowBy);
b7.addEventListener('click', scrollWindowTo);
b8.addEventListener('click', closeWindow);

function openWindow() {
    //On recupère l'information renvoyée par open() dans une variable "fenetre"
    fenetre = window.open('', '', winSize);
}
function resizeWindowBy() {
    fenetre.resizeBy(200, 100);
}
function resizeWindowTo() {
    fenetre.resizeTo(960, 720);
}
function moveWindowBy() {
    fenetre.moveBy(100, 100);//Déplace la fenêtre 100px à droite et 100px en bas
}
function moveWindowTo() {
    fenetre.moveTo(0, 0);//Place la fenêtre contre le bord supérieur gauche
}
function scrollWindowBy() {
    fenetre.scrollBy(0, 200);//Défile de 200px vers le bas
}
function scrollWindowTo() {
    fenetre.scrollTo(0, 0);//Remonte en haut de la page
}
function closeWindow() {
    fenetre.close();
}