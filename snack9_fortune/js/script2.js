
alert('welcome');
// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l'oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

var frase = ['Oggi troverai una cosa dimenticata', 'Ciò che è fatto è fatto', 'Il buon giorno si vede dal mattino',
'Sicuro di aver chiuso il gas?', 'Il mattino ha l\'oro in bocca', 'tanto va la gatta al lardo che ci lascia lo zampino'];

var numRand = getRandomNumber (0, frase.length - 1);
alert(frase[numRand]);

function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
