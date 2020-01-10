alert('enjoy!');
//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
//step 1: inserimento due numeri da parte dell'utente
var numero1 = parseInt(prompt('inserisci un numero'));
var numero2 = parseInt(prompt('inserisci un secondo numero'));
console.log(numero1);
console.log(numero2);
//step2: caso di numero uguale e condizioni per numero maggiore
if(numero1 == numero2){
  alert('hai inserito due numeri uguali');
}
else if(numero1 > numero2){
  console.log(numero1);
}else{
  console.log(numero2);
}
