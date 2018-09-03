// Function expression (IIFE): starts with "("
var hi = (function messageFunction(message) {
  return message + ' World!';
})('Hello');
console.log(hi);

// with IIAF and arrow
console.log(((message) => {
    return message + ' World!';
    }
) ('Hello'));

// anonyme
let square = function (x) { return x * x };

//arrow
let square = x => x * x;

// anonyme
var multiply = function(x,y) {
return x*y;
}

// arrow
var multiply = (x, y) => x*y;

const toCelsius = (fahrenheit) => {
  return (5/9) * (fahrenheit-32);
}

const area = (radius) => {
  return Math.PI * radius * radius;
}