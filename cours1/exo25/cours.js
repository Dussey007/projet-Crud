let p1 = document.getElementById('p1');

let p1PreviousSibling = p1.previousSibling;
let p1PreviousElementSibling = p1.previousElementSibling;

alert(
    'Nom noeud p1 : ' + p1.nodeName +
    '\nValeur du noeud p1 : ' + p1.nodeValue +
    '\nType du noeud p1 : ' + p1.nodeType +
    '\n\nNom p1PreviousSibling  : ' + p1PreviousSibling.nodeName +
    '\n\nNom p1PreviousElementSibling : ' + p1PreviousElementSibling.nodeName +
    '\nValeur du premier noeud enfant de p1 : ' + p1.firstChild.nodeValue
);