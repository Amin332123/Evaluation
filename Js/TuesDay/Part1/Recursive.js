// Icreated this file to practice some challenges that i got online about Recursive

// first challenge : the function will end when n = 0 ;
function Countdown(n) {
  if (n == 0) return console.log(`countdown stopped`);

  console.log(`countdown will end after ${n} times`);

  Countdown(n - 1);
}
// Countdown(5);

// second : I want you to calculate the sum of all numbers from n down to 1 .

function sumRange(n) {
  if (n == 1) return 1;

  return n + sumRange(n - 1);
}

// console.log(sumRange(5));

// first way :
var counter = 1;
function power(a, n) {
  if (n == counter) return a;
  counter++;
  return a * power(a, n);
}

// second way :
function power(a, n) {
  if (n == 0) return 1;
  return a * power(a, n - 1);
}


// fourth challenge : sum of an array . 
function sumArray(arr) {
    if (arr.length == 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
// console.log(sumArray([1, 2 , 3]));



// last exercise : Write a function flatten(arr)

function flatten(arr) {
    if(arr.length == 0 ) return [];
    if (Array.isArray(arr[0])) {
        return flatten(arr[0]).concat(flatten(arr.slice(1)));
    }
    return [arr[0]].concat(flatten(arr.slice(1)));
}
console.log(flatten([1, [2, [3, 4]]]));
