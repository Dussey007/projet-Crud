let utilisateur = {
    nom: 'Bruce',
    prenom: 'Wayne',
    age: 30,


    [Symbol.iterator]() {
        let tableau = Object.values(this);
        let prop = 0;

        return {
            next() {
                if (prop < tableau.length) {
                    return {
                        value: tableau[prop++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
};

for (let p of utilisateur) {
    alert(p);
}
