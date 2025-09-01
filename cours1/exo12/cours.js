//Notion sur les classes et instance de classe, etendre une classe

class Ligne {

    constructor(nom, longueur) {
        this.nom = nom;
        this.longueur = longueur;
    }
    taille() {
        document.getElementById('p1').innerHTML = ' Nom :' + this.nom + ' Longueur :' + this.longueur + '</br>';
    };
}

let g1 = new Ligne('g1', 15);
let g2 = new Ligne('g2', 35);


g1.taille();
g2.taille();

class Rectangle extends Ligne {
    constructor(nom, longueur, largeur) {
        super(nom, longueur)
        this.largeur = largeur;
    }
    aire() { document.getElementById('p2').innerHTML = ' Nom :' + this.nom + ' Longueur :' + this.longueur + 'largeur' + this.largeur; }
}

let g3 = new Rectangle('g3', 25, 16);

g3.aire();
g3.taille();


