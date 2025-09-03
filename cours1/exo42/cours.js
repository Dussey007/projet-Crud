//setTimer les intervalle de temps
let b0 = document.getElementById('b0');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let p1 = document.getElementById('p1');
let timeOutId;
let intervalId;


b0.addEventListener('click', infos);
b1.addEventListener('click', clearT);
b2.addEventListener('click', timer);
b3.addEventListener('click', stopTimer);

let heu = 0;
let min = 0;
let sec = 0;
let dec = 0;
dec += 1;


function infos() {
    timeOutId = setTimeout(alert, 3000, 'Les 3s ce sont ecoule!');
}

function clearT() {
    clearTimeout(timeOutId);
}

function timer() {
    intervalId = setInterval(function () {
        p1.textContent = heu + ' : ' + min + ' : ' + sec + ' . ' + dec;
        dec += 1;
        if (dec >= 10) { dec = 0; sec += 1; }
        if (sec >= 60) { sec = 0; min += 1; }
        if (min >= 60) { min = 0; heu += 1; }
    }, 100)
}
function stopTimer() {
    clearInterval(intervalId);
}