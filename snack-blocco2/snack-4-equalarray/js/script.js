alert('welcome');
//ea due array che hanno un numero di elementi diversi.Aggiungi elementi casuali all’array che ha meno elementi,fino a quando ne avrà tanti quanti l’altro.
var array1 = ['1','2','3','4','5'];
var array2 = ['2','3'];
console.log(array1.length);
console.log(array2.length);

var arrayMin;
var arrayMax;

if(array1 == array2){
  console.log('stessa lunghezza');
}else if(array1 > array2){
  arrayMax = array1;
  arrayMin = array2;
}else{
  arrayMin = array1;
  arrayMax = array2;
}
var sottrazione = arrayMax.length - arrayMin.length;
var i= 0;
while(i<sottrazione){
  i++;
  arrayMin.push();
}
console.log(arrayMin);
