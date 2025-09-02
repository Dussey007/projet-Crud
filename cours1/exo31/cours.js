let d1p2 = document.querySelector('#d1');
let d1p3 = document.querySelector('#d1p3');

d1p2.addEventListener('click', function () { alert('text click!'), true });
d1p3.addEventListener('click', ClickStop);


function ClickStop(e) {
    alert('click et arret de la propagation');
    e.stopPropagation;
};

