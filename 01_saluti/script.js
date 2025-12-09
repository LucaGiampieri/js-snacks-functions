/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

const userNamePrompt = prompt('Inserisci il tuo nome');

// Dichiara la funzione qui.
const helloUser = (nameUser) => 'Ciao ' + nameUser;


// Invoca la funzione qui e stampa il risultato in console
console.log(helloUser(userName));

console.log(helloUser(userNamePrompt));

//Risultato atteso se si passa 'Mario': // ciao Mario
