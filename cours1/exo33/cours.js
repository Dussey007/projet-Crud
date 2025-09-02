//expression irregulieres split
let text = 'BOnjour je m\'appel REGIS et vous';

let search1 = /Regis/;
let search2 = /[ ]/;
let search3 = /[A-Z]/g;
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

let chaine = text.split(search2);


for (let i = 0; i < chaine.length; i++) {
    p1.innerHTML += 'Chaine ' + i + ':' + chaine[i] + '<br>';
}


// document.getElementById('p2').innerHTML = 'Trouve : ' + text.match(search2);

