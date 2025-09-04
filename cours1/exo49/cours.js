function* generateSequence1() {
    yield 1;
    yield 2;
    yield 3;
}
function* generateSequence2() {
    yield 4;
    yield* generateSequence1();
    yield 5;
}

let generateur = generateSequence2();

let quatre = generateur.next(); //{value: 4, done: false}
let un = generateur.next(); //{value: 1, done: false}
let deux = generateur.next(); //{value: 2, done: false}
let trois = generateur.next(); //{value: 3, done: false}
let cinq = generateur.next(); //{value: 5, done: false}
let und = generateur.next();  //{value: undefined, done: true}


alert(quatre.value + '\n' +
    un.value + '\n' +
    deux.value + '\n' +
    trois.value + '\n' +
    cinq.value + '\n' +
    und.value);
