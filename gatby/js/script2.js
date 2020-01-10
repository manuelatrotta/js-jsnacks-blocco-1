
alert('welcome');
//creare lista di nomi
var lista = ['manuela', 'sampey', 'carlo', 'ashey'];
//chiedere nome all'utente
var nome = (prompt('inserisci il tuo nome per verificare se sei tra i partecipanti'));
console.log(nome);
var presente = false;
//verificare presenza nome dell'utente nella lista
for (var i=0; i<lista.length; i++){
  var invitato = lista[i];
  if(nome==invitato){
    presente = true;
  }
}
//comunicare il responso all'utente
console.log(presente);
if(presente==false){
  console.log('nome non presente');
}
else{
  console.log('nome presente');
}
//con while
//i=0;
//var presente = false;
//while(presente==false && i<lista.length)
