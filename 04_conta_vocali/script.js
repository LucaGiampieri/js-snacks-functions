/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelsCounter (myWord){
    let counter = 0;
     const vowels = 'aeiouAEIOU';
    for (let i = 0; i < myWord.length; i++)
        if(vowels.includes(myWord[i])){
            counter = counter +1;
        }
        return counter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsCounter(word));
console.log(vowelsCounter('aBCdEfaaaghI'));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)