// var answer = prompt('Are we there yet?');
//
// while (answer !== 'yes' && answer !== 'yeah') {
//   var answer = prompt('are we there yet?');
// }
//
// alert('yay, we made it!');
// if (answer === 'yes') {
//   alert('yay, we made it!');
// } else {
//   var answer = prompt('are we there yet?');
// }
var answer = prompt('Are we there yet?');

while (answer.indexOf('yes') === -1) {
  var answer = prompt('are we there yet?');
}

alert('yay, we made it!');
