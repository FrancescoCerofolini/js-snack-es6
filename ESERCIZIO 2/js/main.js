// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function randomNumbers(min,max) {
    return Math.floor(Math.random() * (max - min) + 1) - min;   
}

const squadreCalcio = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Milan',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Juventus',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Atalanta',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Napoli',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Roma',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Lazio',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Sassuolo',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Hellas Verona',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Udinese',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Sampdoria',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Bologna',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Genoa',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Spezia',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Benevento',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Cagliari',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Torino',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Parma',
        punti: 0,
        falli: 0, 
    },

    {
        nome: 'Crotone',
        punti: 0,
        falli: 0, 
    },
];

for (let i = 0; i < squadreCalcio.length; i++) {
    let squadra = squadreCalcio[i]
    squadra.punti = randomNumbers(1,65)
    squadra.falli = randomNumbers(1,67)
}
console.log(squadreCalcio);

const arrayFalli = [];

for (let i = 0; i < squadreCalcio.length; i++) {
    let classificaFalli = squadreCalcio[i];
    const {nome, falli} = classificaFalli;

    arrayFalli.push({
        nome: nome,
        falli: falli,
    });
}

console.log(arrayFalli);