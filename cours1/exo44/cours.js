//les promesses
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.onload = () => resolve('Fichier ' + src + ' bien chargé');
        script.onerror = () => reject(new Error('Echec de chargement de ' + src));
    });
}

const promesse1 = loadScript('boucle.js');
// const promesse2 = loadScript('script2.js');

promesse1.then(result => alert(result), error => alert(error));
// promesse2.then(
//     function (result) { alert(result); },
//     function (error) { alert(errror); }
// )

/*
loadScript('boucle.js')
.then(result => loadScript('script2.js', result))
.then(result2 => loadScript('script3.js', result2))
.catch(alert)
.then(() => alert('Blabla'));//On peut imaginer d\'autres opérations ici
*/



