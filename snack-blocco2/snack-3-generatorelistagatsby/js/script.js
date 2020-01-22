alert('welcome');
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
var listaNomi = ['luigi','simone','luca','mario'];
var listaCognomi = ['trotta', 'opach', 'linux', 'sampey'];
var listaNomiCognomi = [];
console.log(listaNomi);
console.log(listaCognomi);
function getRandomNumberFromZero(max) {
  var numeroRandom = Math.floor(Math.random() * (max + 1));
  return numeroRandom;
}

for(var i=0; i < listaNomi.length; i++) {
  listaNomiCognomi.push(listaNomi[getRandomNumberFromZero(listaNomi.length - 1)] + ' ' +
  listaCognomi[getRandomNumberFromZero(listaNomi.length -1)]);
}
console.log(listaNomiCognomi);
