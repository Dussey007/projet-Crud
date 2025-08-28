let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

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