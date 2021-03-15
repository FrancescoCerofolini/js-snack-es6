// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//  Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var biciclette = [
    {
        nome: 'Scott',
        peso: '10',
    },

    {
        nome: 'Specialized',
        peso: '6,9',
    },

    {
        nome: 'Bianchi',
        peso: '9',
    },

    {
        nome: 'Cannondale',
        peso: '7,5',
    },

    {
        nome: 'Ktm',
        peso: '10,5',
    },

];

// VANILLA JS

// var biciMenoPesante = biciclette[0]
// for (var i = 0; i < biciclette.length; i++) {
//     if (biciclette[i].peso < biciMenoPesante.peso) {
//         biciMenoPesante = biciclette[i]
//     }
// };

// console.log(biciMenoPesante);

// JS ES6

let biciMenoPesante = biciclette[0]
for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciMenoPesante.peso) {
        biciMenoPesante = biciclette[i]
    }
}
console.log(biciMenoPesante);

const {nome, peso} = biciMenoPesante;

console.log(`
    ${nome}
    ${peso}
`);
