//setTimer les intervalle de temps
let b0 = document.getElementById('b0');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let timeOutId;

b0.addEventListener('click', infos);
b1.addEventListener('click', clearT);
b2.addEventListener('click', afficherHeure);

function infos() {
    timeOutId = setTimeout(alert, 3000, 'Les 3s ce sont ecoule!');
}

function clearT() {
    clearTimeout(timeOutId);
}

function afficherHeure() {
    setInterval(function () {
        let d = new Date();
        b2.innerHTML = d.toLocaleTimeString();
    }, 1000)
}