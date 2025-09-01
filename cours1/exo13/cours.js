//Notion valeur primitive ou objet
let ch1 = 'Chaine de caracteres';
let ch2 = 'Chaine de caracteres';

let caract1 = 'Une chaine de car';
let caract2 = new String('Une chaine de car');

document.getElementsById('p1').innerHTML = caract1.length;
document.getElementsById('p2').innerHTML = caract1.toLocaleUpperCase;
document.getElementsById('p6').innerHTML = caract1;



document.getElementsById('p3').innerHTML = 'ch1 == ch2 : ' + (ch1 === ch2);

let ob1 = { prenom: 'pierre' };
let ob2 = { prenom: 'pierre' };
let ob3 = ob1;

document.getElementsById('p4').innerHTML = 'ob1 == ob2 : ' + (ob1 === ob2);
document.getElementsById('p5').innerHTML = 'ob1 == ob3 : ' + (ob1 === ob3);
