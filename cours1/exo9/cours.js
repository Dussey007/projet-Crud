//UTILISATION DES OBJETS LITTERAL ET TABLEAU 
let utilisateur = {
    nom: ['KOdjo', 'Regis'],
    age: 23,
    mail: 'regisdussey@gmail.com',

    bonjour: function () {
        alert('Bonjour je me nomme ' + this.nom[1] + ' j\'ai ' + this.age + ' ans ' + ' voici mon mail ' + this.mail);
    }
};

let Wayne = {
    nom: ['Wayne', 'Bruce'],
    age: 22,
    mail: 'wayne@gmail.com',

    salut: function () {
        alert('Bonjour je me nomme ' + this.nom[0] + ' j\'ai ' + this.age + ' ans ' + 'voici mon mail' + this.mail);
    }
};

Wayne[poids] = 50;

Wayne.affichage = function () {
    alert('Bonjour je me nomme ' + this.nom[0] + ' j\'ai ' + this.age + ' ans ' + ' voici mon mail ' + this.mail + ' je pese : ' + this.poids + 'kg');
};

document.getElementById('p1').innerHTML = '\nNom : ' + Wayne[nom][0];
document.getElementById('p2').innerHTML = ' \n Age: ' + Wayne[age] + ' \n mail ' + Wayne[mail];

utilisateur.age = 25;

Wayne.salut();

