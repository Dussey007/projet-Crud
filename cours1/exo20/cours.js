let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

b1.addEventListener('click', recharge);
b2.addEventListener('click', assigne);
b3.addEventListener('click', remplace);

function recharge() {
    location.reload();
}
function assigne() {
    location.assign('http://127.0.0.1:5500/exo16/cours.html');
}
function remplace() {
    location.replace('http://127.0.0.1:5500/exo17/cours.html');
}