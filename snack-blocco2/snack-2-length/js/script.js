alert('welcome');
//una funzione che le due parole abbiano la stessa lunghezza.Se hanno la stessa lunghezza, stamparle entrambe altrienti stampare la più lunga delle due.
//stampa due parole

var parola1 = prompt('scrivi una parola');
var parola2 = prompt('scrivi una seconda parola');
console.log(parola1);
console.log(parola2);

//verifica se sono uguali o se una è più lunghezza
//if(parola1.length == parola2.length){
//  console.log(parola1);
//  console.log(parola2);
//}else if(parola1.length > parola2.length){
//  console.log(parola1);
//}else{
//  console.log(parola2);
//}
var parolaStampare = controlloParola(parola1, parola2);
console.log(parolaStampare);


function controlloParola(parola1, parola2){
  var stampaParola = '';
  if(parola1.length == parola2.length){
    var stampaParola = parola1 + ' ' + parola2;
  }else if(parola1.length > parola2.length){
    var stampaParola = parola1;
  }else{
    var stampaParola = parola2;
  }
  return stampaParola;
}
