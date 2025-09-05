import { user } from './modules.js';

console.log(user.nom);
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

p1.textContent = 'nom : ' + user.nom;
p2.textContent = '\nprenom : ' + user.prenom;