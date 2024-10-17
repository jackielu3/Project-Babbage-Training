"use strict";
let fib1 = 1;
let fib2 = 1;
let fibtemp = 0;
console.log(fib1);
console.log(fib2);
let i = 0;
while (i < 10) {
    fibtemp = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibtemp;
    console.log(fibtemp);
    i++;
}
