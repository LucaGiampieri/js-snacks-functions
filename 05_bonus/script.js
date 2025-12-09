/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const userNamePrompt = prompt('Inserisci il tuo nome');


// Dichiara la funzione qui.

const hourlyGreeting = (userName) =>{
    const now = new Date();
    const hour = now.getHours(); 

    if ( hour >= 5 && hour < 13 ) {
        return `Buongiorno ${userName}`;
    } else if (hour >=13 && hour < 17) {
        return `Buon pomeriggio ${userName}`;
    } else {
        return `Buona sera ${userName}`;
}
}

// Invoca la funzione qui e stampa il risultato in console
console.log(hourlyGreeting(name));
console.log(hourlyGreeting(userNamePrompt));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario