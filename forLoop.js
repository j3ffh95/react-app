console.log('Numbers between -10 and 19');
for (var i = -10; i <= 19; i++) {
  console.log(i);
}

console.log('Even Numbers between 10 and 40');
for (var i = 10; i <= 40; i+=2) {
  console.log(i);
}

console.log('Odd Numbers between 300 and 333');
for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log('Numbers between -10 and 19');
for (var i = 5; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
