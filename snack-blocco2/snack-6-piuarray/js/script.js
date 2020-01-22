alert('welcome');
//scrivete una funzione che genera array di numeri random diversi, dato il numero di elementi richiesto
var newArray = createArray(22,3,5);
console.log(newArray);

//funzione generazione di array
function createArray (numberElement, min, max){
  var array = [];
  while(array.length< numberElement) {
    var number = getRandomNumber (min, max);
    if(array.includes(number) == false) {
      array.push(number);
    }
  }
  return array;
}

//funzione per i numeri random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1 )+ min);
}
