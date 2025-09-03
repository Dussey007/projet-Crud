//GESTION DES ERREURS
p1 = document.getElementById('p1');
p2 = document.getElementById('p2');
p3 = document.getElementById('p3');
p4 = document.getElementById('p4');

try {
    prenom;
    alert('y\'a erreur!');
} catch (err) {
    p1.textContent = 'nom : ' + err.name;
    p2.textContent = 'message : ' + err.message;
    p3.textContent = 'St : ' + err.stack;
}