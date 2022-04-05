/* 
  fai comparire nomecognomecolorepreferito22

  1 chiedere nome
  2 chiedere cognome
  3 colore preferito
  stampare il tutto
*/

const personalName = prompt('Insert your name');

const lastName = prompt('Insert your last name');

const favColor = prompt('Insert your favorite color');

// print all

const allTogether = personalName + lastName + favColor;

console.log(allTogether);

document.getElementById('longThing').innerHTML= allTogether + "22"