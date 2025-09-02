//expression irregulieres
let text = 'BOnjour je m\'appel REGIS et vous';

let search1 = /Regis/;
let search2 = /[A-Z]/;
let search3 = /[A-Z]/g;
let search4 = /vous/;
let search5 = /REGIS/;
let search6 = /appel/;

document.getElementById('p1').innerHTML = 'Trouve : ' + text.match(search1);
document.getElementById('p2').innerHTML = 'Trouve : ' + text.match(search2);
document.getElementById('p3').innerHTML = 'Trouve : ' + text.match(search3);
document.getElementById('p4').innerHTML = 'Trouve : ' + text.search(search4);

document.getElementById('p5').innerHTML = 'Trouve : ' + text.replace(search5, 'Moise');
document.getElementById('p6').innerHTML = 'Trouve : ' + text.replace(search6, 'e nomme');