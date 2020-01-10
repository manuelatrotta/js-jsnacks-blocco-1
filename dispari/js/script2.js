
alert('welcome');
//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
//step1:creare un array vuoto
var arrayNumeri = [];
console.log(arrayNumeri);
//step2 chiedere 6 numeri all'utente e verificare se è dispare dividendolo per 2 e imponendo che il resto sia diverso da 0
//soluzione con ciclo for
//for(var i=0; i<6; i++;){
//  var numeroUtente= parseInt(prompt(i + 'inserisci un numero'));
//  console.log(isNan(numeroUtente));
//richiesta numero se non è stato inserito
//while(isNan(numeroUtente)){
//numeroUtente =parseInt(prompt('Si prega di inserire un numero.Grazie'));
//}
//  if(numeroUtente % 2 !=0){
//    console.log('dispari', numeroUtente);
//    arrayNumeri.push(numeroUtente);
//  }
//}

//console.log(arrayNumeri);


//soluzione con ciclo while in cui il contatore si pone fuori e l'incremento nei comandi
var i=0;
while(i<6){
var numeroUtente= parseInt(prompt('inserisci un numero'));
console.log(numeroUtente);
if(numeroUtente % 2 !=0){
console.log('dispari', numeroUtente);
 arrayNumeri.push(numeroUtente);
i++;
  }
}
console.log(arrayNumeri);




//creare un array vuoto
//var numeri = [];
//for(var i=0; i<numeri.length; i++){
//  var numero=numeri[i];
//  if(numero%2 !=0){
//  console.log(numero);
//  }
//}
