//Les classes de caractères abrégées ou prédéfinies expression reguliere
let text = 'Bonjour, je m\'appelle Pierre et vous ?';
let search1 = /[aeiouy]/g; //pour chercher une voyelle
let search2 = /j[aeiouy]/g; //rechercher "j" suivi d'une voyelle
let search3 = /[aeiouy][aeiouy]/g; //Cherche une voyelle suivie d'une autre voyelle

let p0 = document.getElementById('p0');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

p0.textContent = text;
p1.textContent = 'Voyelles trouvées : ' + chaine.match(search1);
p2.textContent = 'j + voyelle trouvés : ' + chaine.match(search2);
p3.textContent = 'Voyelle + voyelle trouvées : ' + chaine.match(search3);