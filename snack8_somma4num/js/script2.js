
alert('welcome');


//Chiedi un numero di 4 cifre all’utente e calcola la somma
//di tutte le cifre che compongono il numero.

var numero = prompt('inserisci un numero a 4 cifre');
var somma = 0;
for( var i=0; i <numero.length; i++){
  somma = somma + parseInt(numero[i]);
}
console.log(somma);
