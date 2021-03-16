// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter

// in aggiunta all' esercizio ho definitio il mio array di numeri con un ciclo for banalissimo così che mi creasse i numeri da 1 a 100.
// per i parametri a e b uso la funzione randomNumbers e pongo a compreso tra 1 e 5- e e b tra 51 e 100 così da rispettare la condizione a<b.

const arrayNumeri = [];
const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (var i = 0; i < 101;i++) {
     arrayNumeri.push(i);
};

console.log(arrayNumeri);


const a = randomNumbers(1, 50);
const b = randomNumbers(51, 100);
console.log(a, b);

// DEFINISCO LA FUNZIONE CHE CREA IL NUOVO ARRAY
function newArrayNumeri(array, min, max){ 
    const newArray = [];

    array.forEach((element, index) => {
        if (index >= min && index <= max) {
            newArray.push(element);
        }
    });
    return newArray;
}

console.log(newArrayNumeri(arrayNumeri, a, b));