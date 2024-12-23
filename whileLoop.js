console.log('Numbers Between -10 to 19');
var num = -10;
while ( num <=19) {
  console.log(num);
  num++;
}
console.log('even numbers between 10 to 40');
var num = 10;
while (num <= 40) {
  console.log(num);
  num += 2;
}
console.log('odd numbers between 300 to 333');
var num = 300;
// while (num <= 333) {
//   console.log(num);
//   num += 2;
// }
while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num ++;
}
console.log('divisible by 5 and 3 numbers between 5 to 50');
var num = 5;
while (num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num ++;
}
