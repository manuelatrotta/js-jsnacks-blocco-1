alert('welcome');
//Snack blocco 2 Scrivi una funzione per stabilire se un numero è primo.Chiedi un numero all’utente e utilizza la funzione percomunicargli se il numero inserito è primo oppure no.
$(document).ready(function(){
  numeroUtente = parseInt(prompt('inserire un numero e verificheremo se esso è un numero primo'));
  isPrime(numeroUtente);
});

//funzione per classificare un numero primo
function isPrime(num) {
  if(Math.pow(2,num) % num == 2) {
    alert('è un numero primo');
  } else{
    alert('non è un numero primo');
  }
}
