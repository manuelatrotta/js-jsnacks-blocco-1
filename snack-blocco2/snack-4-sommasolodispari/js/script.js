alert('welcome');
//blocco 2snack3 Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeriInteri = ['1','2','3','4','5'];
var somma;
//  var somma = 0;
//funzione per vedere i numeri in posizione dispari e sommarli
function number (numeriInteri) {
  var somma = 0;
  for (var i=0; i<numeriInteri.length; i++) {
    if(i%2 == 0)
    somma = somma + numeriInteri[i];
  }
  return somma;
}

var numeriInteri  = number(somma);
console.log(numeriInteri);
