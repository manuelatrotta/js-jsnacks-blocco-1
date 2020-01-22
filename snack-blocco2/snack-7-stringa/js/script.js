//data una stringa controlliamo che un'altra stringa sia presente al suo interno
//mettiamo una var con testo
var stringa = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

var nuovaStringa = new String('lorem ');

var concatenata = stringa + nuovaStringa;

//con indexOf troviamo la posizione della parola che vogliamo cercare. Se la parola non è presente ci darà un -1. Usando invece includes se c'è darà true se non c'è false.
var searchTerm = 'amet';
var indexOfFirst = stringa.indexOf(searchTerm);

console.log(indexOfFirst);
