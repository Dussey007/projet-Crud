//Les classes de caractères abrégées ou prédéfinies expression reguliere
let chaine = 'Bonjour, je m\'appelle Pierre et vous ?';
let masque1 = /[aeiouy]/g; //Cherche une voyelle
let masque2 = /j[aeiouy]/g; //Cherche "j" suivi d'une voyelle
let masque3 = /[aeiouy][aeiouy]/g; //Cherche une voyelle suivie d'une autre voyelle

let p0 = document.getElementById('p0');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

p0.textContent = chaine;
p1.textContent = 'Voyelles trouvées : ' + chaine.match(masque1);
p2.textContent = 'j + voyelle trouvés : ' + chaine.match(masque2);
p3.textContent = 'Voyelle + voyelle trouvées : ' + chaine.match(masque3);