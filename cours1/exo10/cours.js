//creation de deux objets litteraux

let MOise = {
    nom: ['Kodjo', 'Momo'],
    age: 28,
    mail: 'kodjo@gmail.com',

    bonjour: function () {
        alert('Bonjour je me nomme ' + this.nom['0'] + ' j\'ai ' + this.age + ' ans ' + ' voici mon mail ' + this.mail);
    }
}

let Regis = {
    nom: ['Regis', 'Reg'],
    age: 28,
    mail: 'regis@gmail.com',

    bonjour: function () {
        alert('Bonjour je me nomme ' + this.nom['0'] + ' j\'ai ' + this.age + ' ans ' + ' voici mon mail ' + this.mail);
    }
}



document.getElementById('p1').innerHTML = 'Nom : \n' + MOise[nom];
document.getElementById('p2').innerHTML = ' Age: \n ' + MOise[age];
document.getElementById('p3').innerHTML = '  mail \n' + MOise[mail];


document.getElementById('p1').innerHTML = 'Nom : \n' + Regis[nom];
document.getElementById('p2').innerHTML = ' Age: \n ' + Regis[age];
document.getElementById('p3').innerHTML = '  mail \n' + Regis[mail];

MOise.bonjour();
Regis.bonjour();



