//How to use evenListener
p1 = document.getElementById('p1');
p3 = document.getElementById('p3');
msg = document.getElementById('msg');
vide = document.getElementById('vide');
vide2 = document.getElementById('vide2');

if (p1.hasAttributes()) {
    msg.textContent = 'p1 a un attribut!';
} else {
    msg.textContent = 'p1 n\'a pas d\'attribut';
}

p3.setAttribute('class', 'blue');

if (p1.hasAttributes()) {
    let attr = p1.attributes;
    console.log(attr);
    vide.innerHTML = 'Liste des attributs <br>';

    for (let i = 0; i < attr.length; i++) {
        vide.innerHTML += attr[i].name + '=' + attr[i].value + '<br>';
    }
}
if (p1.hasAttributes()) {
    let attri = p1.getAttributeNames();
    vide2.innerHTML = 'lISTE DES ATTRIIBUTS <br>';

    for (nom of attri) {
        valeur = p1.getAttribute(nom);
        vide2.innerHTML += nom + '=' + valeur;
    }
}

