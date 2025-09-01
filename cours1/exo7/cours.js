//LES fonctions
let texts = "Bonjour monsieur Moise";
let a = 12, b = 4;

document.getElementById('p1').innerHTML = Math.random() * 250;

res = texts.replace("Moise", "Regis");

document.getElementById("p2").innerHTML = res;

function aleatoire() {
    return n = Math.random();
}

function multiplier(nbre1, nbre2) {
    return multiplication = nbre1 * nbre2;
}

document.getElementById('p3').innerHTML = aleatoire();
document.getElementById('p4').innerHTML = multiplier(2, 4);

function portee1() {
    return document.getElementById('p5').innerHTML = "variable globale a * b = " + (a * b);
}
portee1();

function portee2(c, d) {
    c = 50;
    d = 20;
    return document.getElementById('p6').innerHTML = "variable locale a + b = " + (c + d);
}
portee2();