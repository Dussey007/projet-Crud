//Condition if
let e1 = prompt('Entrez la valeur!');
let d1 = 0;

let e = parseInt(e1);
let d = parseInt(d1);


if (e < d){
    alert(`${e} est inferieure a ${d}`);
} else if (e1==NaN){
    alert('Veuillez saisir un entier ou un decimal');
 } else {
    alert(`${e} est superieure a ${d}`);
}

if (e==d) {
    alert(`${e} est egal a ${d}`)
}
 
