const a = parseFloat(prompt('Enter a first number', 1));
const b = parseFloat(prompt('Enter a second number', 1));
const c = parseFloat(prompt('Enter a quantity  of numbers', 15));

document.write('Number of Fibonacci across Array;' + '<br>');
let arr = [a, b];
function fibArr() {
  let i = 0;
  while (i < c - 2) {
    let fibPrePrev = arr[i];
    let fibPrev = arr[i + 1];
    let summ = fibPrev + fibPrePrev;
    arr.push(summ);
    i++;
  }
}
fibArr();
prt(arr.join(', '));
document.write('<br><br>');

document.write('Number of Fibonacci across Variable;' + '<br>');
  let fibPrePrev = a;
  let fibPrev = b;
  prt(a + ', ' + b + ', ');
function fibVar () {
  for (let i = 0; i <= c - 3; i++ ) {
    let adding = summ(fibPrePrev, fibPrev);
    prt(adding + ', ');
    fibPrePrev = fibPrev;
    fibPrev = adding;
  }
}
fibVar();
function summ(x, y) {
  return x + y;
}
document.write('<br><br>');

document.write('Number of Fibonacci across Recursion;' + '<br>');
function fibRec(n) {
  return n < 2 ? n : fibRec(n - 1) + fibRec(n - 2);
}
for (let i = 1; i <= c; i++) {
    document.write(fibRec(i) + ', ');
}

function prt(arg) {
    document.write(arg);
}