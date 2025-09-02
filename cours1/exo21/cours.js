
document.querySelector('p').textContent = 'premier paragraphe changer';

let docDiv = document.querySelector('div');

docDiv.querySelector('p').textContent = 'premier para du div changer';

document.querySelector('p.bleu').style.color = 'blue';

let documentParas = document.querySelectorAll('p');

let divParas = documentDiv.querySelectorAll('p');

documentParas.forEach(function (nom, index) {
    nom.textContent += ' (paragraphe n°:' + index + ')';
});