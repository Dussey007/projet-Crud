//les sous masques et asserssions
let chaine = 'Bonjour, je suis Pierre et mon no. est le [06-36-65-65-65]';
let mask1 = /er|t/g; //=> : "er" ou "t"
let mask2 = /e(r|t)/; //=> : "er" ou "et" + capture r ou t
let mask3 = /Bon(jour)/; //=>: "Bonjour" + capture "jour"
let mask4 = /Bon(jour)/g; //=>"Bonjour" + capture "jour"

let p0 = document.getElementById('p0');
let p1 = document.getElementById('p1');

let tb1 = chaine.match(mask1);
let tb2 = chaine.match(mask2);
let tb3 = chaine.match(mask3);

//Ne renvoie pas les résultats capturés car optoin g utilisée
let tb4 = chaine.match(mask4);

p0.textContent = chaine;
p1.innerHTML =
    'Résultat masque 1 : ' + tb1 +
    '<br>Résultat masque 2 : ' + tb2 +
    '<br>Résultat masque 3 : ' + tb3 +
    '<br>Résultat masque 4 : ' + tb4;