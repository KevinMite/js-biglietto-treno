// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
// Questo richiederà un minimo di ricerca.

const numeroChilometri = prompt("quanti chilometri vuoi percorrer?");
const eta = prompt("età del passeggero? ");


const prezzoAlChilometro = 0.21;

let prezzo = numeroChilometri * prezzoAlChilometro;

if(eta < 18){
    
}

console.log(prezzo);

document.getElementById(`prezzo-totale`).innerHTML = `<p>Questo è il prezzo ${prezzo}</p>`