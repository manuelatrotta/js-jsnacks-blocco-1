
alert('welcome');

//Stampa il cubo dei primi N numeri, dove N è un numero
//creare una variabile in cui il numero nella condizione viene data dall'utente.Stampare il cubo dei numeri antecedenti a quello dato dall'utente mediante formula Math.pow(base, esponente)
//var n = prompt('inserisci un numero');
//for(var i=1; i<=n; i++){
//  console.log(Math.pow(i, 3));
//}

//risoluzione con while
var n= prompt('inserisci un numero');
var i=1;
while(i<=n){
  console.log(Math.pow(i, 3));
  i++;
}
