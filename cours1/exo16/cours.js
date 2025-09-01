//fonction pour retourner la langue, cookies, nom du system utilise
document.getElementById('p1').innerHTML = 'Langue du navigateur : ' + navigator.language + '<br>Cookies autorisés : ' + navigator.cookieEnabled +
    '<br>Plateforme utilisée : ' + navigator.platform;

//trouver la longitude et latitude
function coordonnees(pos) {
    let crd = pos.coords;

    let latitude = crd.latitude;
    let longitude = crd.longitude;

    document.getElementById('p2').innerHTML = 'Latitude : ' + latitude.toFixed(2); //limite des virgules arrondi, ne jms montrer les d au complet
    document.getElementById('p3').innerHTML = 'Longitude : ' + longitude.toFixed(2);
}

navigator.geolocation.getCurrentPosition(coordonnees);