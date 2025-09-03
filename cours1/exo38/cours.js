let text = 'Bonjour, je suis Moise et mon no. est le [90-41-91-72]';
let mask1 = /e(?=s)/g; //Permet de chercher "e" suivi de "r"
let mask2 = /e(?!r)/g; //Permet de chercher "e" non suivi de "r"
let mask3 = /(?<=i)s/g; //Permet de chercher "s" précédé de "i"
let mask4 = /(?<!i)s/g; //Permet de chercher "s" non précédé de "i"

let p0 = document.getElementById('p0');
let p1 = document.getElementById('p1');

p0.textContent = chaine;
p1.innerHTML =
    'Résultat masque 1 : ' + chaine.match(mask1) +
    '<br>Résultat masque 2 : ' + chaine.match(mask2) +
    '<br>Résultat masque 3 : ' + chaine.match(mask3) +
    '<br>Résultat masque 4 : ' + chaine.match(mask4);


let chaine = 'Bonjour, je suis Regis\n et mon no. est le [90-41-91-72]';

let masque1 = /regis/; //Cherche "regis" exactement
let masque2 = /regis/i; //Cherche "regis", "REGIS", "ReGiS"...
let masque3 = /e$/; //Cherche "e" en fin de chaine
let masque4 = /e$/gm; //Cherche "e" en fin de chaque ligne
let masque5 = /./gs; //Cherche tout caractère et effectue une recherche globale

let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

p0.textContent = chaine;
p1.innerHTML =
    'Résultat masque 1 : ' + chaine.match(masque1) +
    '<br>Résultat masque 2 : ' + chaine.match(masque2) +
    '<br>Résultat masque 3 : ' + chaine.match(masque3) +
    '<br>Résultat masque 4 : ' + chaine.match(masque4) +
    '<br>Résultat masque 5 : ' + chaine.match(masque5);