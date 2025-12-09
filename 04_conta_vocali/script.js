/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelsCounter (myWord){
    let counter = 0;
    for (let i = 0; i < myWord.length; i++)
        if(myWord[i] === 'a' || myWord[i] === 'e' || myWord[i] === 'i' || myWord[i] === 'o' || myWord[i] === 'u' || myWord[i] === 'A' || myWord[i] === 'E' || myWord[i] === 'I' || myWord[i] === 'O' || myWord[i] === 'U'){
            counter = counter +1;
        }
        return counter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsCounter(word));
console.log(vowelsCounter('aBCdEfghI'));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)