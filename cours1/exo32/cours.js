//expression irregulieres
let envoie = document.getElementById('btn_envoi');

envoie.addEventListener('click', infos);

function infos(e) {
    alert('Envoie du for;ulaire bloque!');
    e.preventDefault;
}