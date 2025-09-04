let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function () {
    db = openRequest.result;

    //Si l'objet de stockage users n'existe pas, on le crée
    if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'id' });
    }
};

openRequest.onerror = function () {
    alert('Impossible d\'accéder à IndexedDB');
};

openRequest.onsuccess = function () {
    db = openRequest.result;
    let transaction = db.transaction('users', 'readwrite');

    transaction.oncomplete = function () {
        alert('Transaction terminée');
    };

    let users = transaction.objectStore('users');

    let user = {
        id: 1,
        prenom: 'Moise',
        mail: 'moise@momo.com',
        inscription: new Date()
    };

    let ajout = users.add(user);

    ajout.onsuccess = function () {
        alert('Utilisateur ajouté avec la clef ' + ajout.result);
    };

    ajout.onerror = function () {
        alert('Erreur : ' + ajout.error);
    };
    let supprimer = users.delete(1);
    supprimer.onsuccess = function () {
        alert('Utilisateur supprimé de la base de données');
    };
    supprimer.onerror = function () {
        alert('Erreur : ' + supprimer.error);
    };
};
