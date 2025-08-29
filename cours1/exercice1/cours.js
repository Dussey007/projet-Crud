let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');
let a = 2;
let x = 4;
let y = 3;

bonjour.addEventListener('click', alerte);
ajouter.addEventListener('click', ajout);

function alerte(){
    alert("Bonjour");
}

function ajout(){
    let para = document.createElement('p');
    para.textContent="texte ajouter";
    document.body.appendChild(para);
}
// Operateur arithmetique
c = a + x;
d = x % 2;
e = x * a;
f = y / x;

alert(
    '\nc contient '+ c +
    '\nd contient '+ d+
    '\ne contient '+ e+
     '\nf contient '+ f
);

