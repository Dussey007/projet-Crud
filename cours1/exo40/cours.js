let pierre = { name: 'Pierre' };
let mathilde = { name: 'Mathilde' };

function disBonjour() {
    alert('Bonjour ' + this.name);
}

pierre.bonjour = disBonjour;
mathilde.bonjour = disBonjour;
