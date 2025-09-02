let paras = document.getElementsByTagName('p');

document.querySelector('p').textContent = 'premier paragraphe changer';

let docDiv = document.querySelector('div');

docDiv.querySelector('p').textContent = 'premier para du div changer';

document.querySelector('p.bleu').style.color = 'blue';

let documentParas = document.querySelectorAll('p');

let divParas = docDiv.querySelectorAll('p');

documentParas.forEach(function (nom, index) {
    nom.textContent += ' (paragraphe n°:' + index + ')';
});

for (valeur of paras) {
    valeur.style.color = 'blue';
}