// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

//1 --- alert espone 5 numeri casuali diversi
// funzioni che mi genera numri casuali
var min = 1;
var max = 100;

function randomNum(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
 }



 // voglio 5 numeri casuali li metto all interno del while e li popolo in un array

 var arrayNum = []
 var howManyNumber = 5

 while ( arrayNum.length < howManyNumber) {
   var randomNumber = randomNum(min,max)
   if (!arrayNum.includes(randomNumber)) {
      arrayNum.push(randomNumber)
   }
 }alert('prova a ricordare questi numeri' + ' ' + arrayNum);
 console.log(arrayNum);


  // Dopo 30 secondi l’utente deve inserire,
  setTimeout(function() {
  var arrayUtente = []
  var numeriUtente
  while (arrayUtente.length <  howManyNumber) {
  numeriUtente = parseInt(prompt('inserisci i numeri che ti ricordi'))

    if (numeriUtente > 100 || numeriUtente < 0  || isNaN(numeriUtente)) {
     alert('i numeri devono essere compresi tra 1 e 100 e non puoi inserire lettere !')
   }else {
     arrayUtente.push(numeriUtente)
   }


}
console.log('i numeri che hai inserito sono i seguenti ' + arrayUtente);

 // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


 var arrayNumeriRicordati = []

  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum.includes(arrayUtente[i])){
      arrayNumeriRicordati.push(arrayUtente[i])
    }
  }

 console.log( 'i numeri che hai ricordato correttamente sono ' + ' ' +  arrayNumeriRicordati.length);

 console.log('hai ricordato questi numeri' + arrayNumeriRicordati + ' ' + 'ed il tuo punteggio è' +  arrayNumeriRicordati.length);

}, 500)



 // un prompt alla volta, i numeri che ha visto precedentemente.

 // var arrayUtente = []
//  while (arrayUtente.length <  howManyNumber) {
//  var numeriUtente = parseInt(prompt('inserisci i numeri che ti ricordi'))
//  arrayUtente.push(numeriUtente)
// console.log('i numeri che hai inserito sono i seguenti ' + arrayUtente);
//
//
// // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
//
// var arrayNumeriRicordati= []
//
// if (arrayNum.includes(numeriUtente)){
//   arrayNumeriRicordati.push(numeriUtente)
// }
// console.log('hai ricordato questi numeri' + arrayNumeriRicordati + 'ed il tuo punteggio è' +  arrayNumeriRicordati.length);
// }
