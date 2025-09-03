let nom = 'DUSSEY', prenom = 'Moise';
function profil(nom, prenom, ...hobbies) {
    let h = '';
    for (hobbie of hobbies) {
        h += hobbie + ', ';
    }
    alert('Nom : ' + nom + '\nPrénom : ' + prenom + '\nHobbies : ' + h);
}


profil('DUSSEY', 'Moise');
profil('DUSSEY', 'Moise', 'Regis');
profil('DUSSEY', 'Moise', 'Regis', 'Bruce');
