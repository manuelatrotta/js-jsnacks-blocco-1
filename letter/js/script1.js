alert('welcome');
//L’utente inserisce due parole in successione
var parola1 = prompt('inserisci una parola');
var parola2 = prompt('inserisci una seconda parola');
//stampa prima la parola più corta
if(parola1.length == parola2.length){
  alert('hai inserito due parole della stessa lunghezza');
}else if (parola1.length > parola2.length) {
  console.log(parola2);
  console.log(parola1);
}else{
  console.log(parola2);
  console.log(parola1);
}
