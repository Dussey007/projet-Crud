//Notion valeur primitive ou objet
let ch1 = 'Moise';
let ch2 = 'Moise Bruce';


document.getElementsById('p1').innerHTML = 'ch1.length ' + ch1.length;
document.getElementsById('p2').innerHTML = 'ch1.length' + ch2.length;




document.getElementsById('p3').innerHTML = 'ch1 == ch2 : ' + (ch1 === ch2);

let ob1 = { prenom: 'pierre' };
let ob2 = { prenom: 'pierre' };
let ob3 = ob1;

document.getElementsById('p4').innerHTML = 'ob1 == ob2 : ' + (ob1 === ob2);
document.getElementsById('p5').innerHTML = 'ob1 == ob3 : ' + (ob1 === ob3);
