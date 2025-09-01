//Notion valeur primitive ou objet
let word = 'Hello my name is Moses and i am 24';
let space = '   Hello my name is Moses and i am 24  ';
//includes()

if (word.includes('Moses')) {
    document.getElementById('p1').textContent = 'Moses find';
}
if (word.includes('moses')) {
    document.getElementById('p2').textContent = 'moses find';
}

//end and startwith
if (word.startsWith('Hello')) {
    document.getElementById('p3').textContent = 'begin by Hello';
}
if (word.endsWith('24')) {
    document.getElementById('p4').textContent = 'end by 24';
}

//substring
document.getElementById('p5').textContent = word.substring(9, 24);
document.getElementById('p6').textContent = word.substring(29, 9);

//imdexOf
document.getElementById('p7').textContent = word.indexOf('e');
document.getElementById('p8').textContent = word.indexOf('Hello');

//lastIndexof
document.getElementById('p9').textContent = word.lastIndexOf('e');

//tolowerCase and toUpperCase
document.getElementById('p10').textContent = word.toLowerCase('e');
document.getElementById('p11').textContent = word.toUpperCase('e');

//TRIM
document.getElementById('p1').textContent = space.trim();
document.getElementById('p2').textContent = space;



