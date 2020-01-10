alert('welcome');
//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for
//step1(usando ciclo for): chiedere per 5 volte all’utente di inserire un numero
var somma = 0;
//for(i=0; i<5; i++){
//  var numero = parseInt(prompt('inserire numero'));
//  console.log(numero);
//  somma = somma + numero;
//}
//console.log(somma);

//step2:con while
var i=0;
while(i<5){
  var numero = parseInt(prompt('inserire numero'));
  console.log(numero);
  somma = somma + numero;
  i++;
}
console.log(somma);
