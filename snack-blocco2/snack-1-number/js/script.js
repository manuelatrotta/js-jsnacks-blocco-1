alert('welcome');
//Inserisci un numero, se è pari stampa il numero, se è dispari
//stampa il numero successivo

//variabile con numero chiesto all'utente
var numero = parseInt(prompt('inserisci un numero'));
console.log(numero);
//condizione per vedere se il numero è pari o dispari
if (numero % 2 ==0 ){
  console.log(numero);
}
else{
  console.log(numero+1);
}
//funzione se è pari allora è true altrimenti è false e stampa numero successivo
function isEven(numero) {
  if (numero % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}
