
alert('welcome to the Great Gatsby\'s Party');
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//creare lista di nomi
var lista = ['daisy', 'nick', 'tom', 'jordan'];
//chiedere nome all'utente
var nome = (prompt('Vecchio mio, inserisci il tuo nome per verificare se sei tra i partecipanti al mio party.J.Gatsby'));
console.log(nome);
var presente = false;
//verificare presenza nome dell'utente nella lista
for (var i=0; i<lista.length; i++){
  var invitato = lista[i];
  if(nome == invitato){
    presente = true;
  }
}
//comunicare il responso all'utente
console.log(presente);
if (presente == false) {
  console.log('mi dispiace vecchio mio,il tuo nome non è presente');
}else{
  console.log('benvenuto vecchio mio,il tuo nome è presente');
}
//con while
//var i=0;
//var presente = false;
//var messaggio ='mi dispiace vecchio mio,il tuo nome non è presente';

//while(presente == false && i<lista.length){
// if (nome == lista[i]){
//messaggio = 'benvenuto vecchio mio,il tuo nome è presente';
//presente = true;
// }
//i++;
//}
