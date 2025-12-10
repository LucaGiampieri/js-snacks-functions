/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const userLetter = prompt('inserisci una lettera');

// Dichiara la funzione qui.

const oneLetterArray = (myArray, myLetter) =>{
    const singleLetterArray = [];
    for ( let i = 0; i < myArray.length; i++){
        if (myArray[i].charAt(0).toLowerCase() === myLetter.toLowerCase()){
            singleLetterArray.push(myArray[i])
    }
} 
    if (singleLetterArray.length === 0){
        singleLetterArray.push('Nessun nome corrisponde alla tua lettera');
    }
    return singleLetterArray;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(oneLetterArray(names, userLetter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]