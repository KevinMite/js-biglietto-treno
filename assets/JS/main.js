// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
// Questo richiederà un minimo di ricerca.

let numeroChilometri = parseFloat(prompt("quanti chilometri vuoi percorrere?"));
let eta = parseInt(prompt("età del passeggero? "));


const prezzoAlChilometro = 0.21;

let prezzo = numeroChilometri * prezzoAlChilometro;
let persona = `maggiorenne`;
if(eta < 18){
    prezzo *= 0.80;
    document.writeln (`il costo del biglietto per i minorenni è : ${ prezzo.toFixed(2) }€`);

}else if(eta > 65){
    prezzo *= 0.60
    document.writeln (`il costo del biglietto per gli over 65 è : ${ prezzo.toFixed(2) }€`);

}else{
    document.writeln(`il costo del biglietto è : ${prezzo.toFixed(2)}€ per i ${persona} `);
}

// console.log(parseFloat(prezzo.toFixed(2)));