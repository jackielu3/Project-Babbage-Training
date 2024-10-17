let fib1 : number = 1;
let fib2 : number = 1;

let fibtemp : number = 0;

console.log(fib1);
console.log(fib2);

let i : number = 0;

while (i < 10) {
    fibtemp = fib1 + fib2;
    
    fib1 = fib2;
    fib2 = fibtemp;

    console.log(fibtemp);
    i++;
}