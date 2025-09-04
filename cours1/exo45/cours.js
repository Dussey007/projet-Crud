//utilisation de async et await
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.onload = () => resolve('Fichier ' + src + ' bien chargé');
        script.onerror = () => reject(new Error('Echec de chargement de ' + src));
    });
}

async function test() {
    try {
        const test1 = await loadScript('boucle.js');
        alert(test1);
        const test2 = await loadScript('blblbl.js');
        alert(test2);
        const test3 = await loadScript('cdcdcd.js');
        alert(test3);
    } catch (err) {
        alert(err);
        let script = document.head.lastChild;
        script.remove();
    }
}

test();



// async function test() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Ok !'), 2000)
//     });

//     let result = await promise; //Attend que la promesse soit résolue ou rejetée
//     alert(result);
// }

//test();


