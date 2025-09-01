//Notion sur les prototypes

function Utilisateur(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;
}

Utilisateur.prototype.taille = 180;
Utilisateur.prototype.bonjour = function () {
    alert('Bonjour je suis ' + this.nom + ' j\ai ' + this.age + ' ans ' + ' je fais' + this.taille);
}

let User1 = new Utilisateur(['Bruce', 'wayne'], 20, 'wayne@gmail.com',);
let User2 = new Utilisateur(['Tata', 'Leila'], 20, 'tata@gmail.com',);



