//closures des fonctions
let pierre = { name: 'Pierre' };
let mathilde = { name: 'Mathilde' };
let nom = 'Junior';

function disBonjour() {
    alert('Bonjour ' + this.name);
}
pierre.bonjour = disBonjour;
mathilde.bonjour = disBonjour;

function infos() {
    let age = 19;
    function affiche() {
        return nom + 'est age de' + age + 'ans';
    };
    return affiche();
}

alert(infos());

function compteur() {
    let count = 0;
    return function () {
        return count++;
    };
}
let plusUn = compteur();
alert(plusUn()); //0 
alert(plusUn()); //0 