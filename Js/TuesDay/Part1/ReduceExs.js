/* 
Challenge 1: The "Word Counter"

Imagine you have an array of words (maybe from a chat log or a blog post). Use reduce to create an object that shows how many times each word appears.

    Input: ['apple', 'orange', 'apple', 'banana', 'orange', 'apple']

    Goal: { apple: 3, orange: 2, banana: 1 }

*/

const words = ["apple", "orange", "apple", "banana", "orange", "apple"];

var numberOfWords = words.reduce((acc, v) => {
  if (!acc[v]) {
    acc[v] = 0;
  }
  acc[v] += 1;

  return acc;
}, {});
// console.log(numberOfWords);

/*
Challenge 2: Finding the Maximum

While Math.max() exists, I want you to rebuild it using reduce. Iterate through an array of numbers and return only the largest one.

    Input: [15, 42, 7, 88, 12]

    Goal: 88

*/

const numbers = [15, 42, 7, 88, 12];
const maxNumber = numbers.reduce((acc, v) => {
  if (acc < v) {
    acc = v;
  }
  return acc;
});
// console.log(maxNumber);

/* 
Challenge 3: Flattening a Matrix

Sometimes data comes in nested arrays (an array of arrays). Use reduce to turn a 2D array into a single "flat" array.

    Input: [[1, 2], [3, 4], [5, 6]]

    Goal: [1, 2, 3, 4, 5, 6]
    
*/

const UndspreadedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const spreadedArray = UndspreadedArray.reduce((acc, v) => {
  if (v.length) {
    acc.push(...v);
  }
  return acc;
}, []);
// console.log(spreadedArray);

/* 
Challenge 4: The Data "Cleaner"

You have an array of mixed data. Use reduce to create a new array that only contains numbers, but multiplies them by 10 at the same time. (This is essentially doing a filter and a map in one single pass).

    Input: [5, 'hello', 10, null, 2]

    Goal: [50, 100, 20]
*/

const messedArray = [5, "hello", 10, null, 2];
const cleanArray = messedArray
  .reduce((acc, v) => {
    if (Number.isInteger(v) && v != true) {
      acc.push(v);
    }
    return acc;
  }, [])
  .map((v) => v * 10);

// console.log(cleanArray);

/* 
Challenge 5: Converting an Array to a "Lookup Table"

In big applications, searching through a long array for a specific ID is slow. Developers use reduce to turn arrays into "Lookup Objects" for instant access.

    Input: ```javascript
    const posts = [
    { id: 'p1', title: 'Hello World' },
    { id: 'p2', title: 'JS is Great' }
    ];

    Goal: ```javascript
    {
    p1: { id: 'p1', title: 'Hello World' },
    p2: { id: 'p2', title: 'JS is Great' }
    }
*/

const posts = [
  { id: "p1", title: "Hello World" },
  { id: "p2", title: "JS is Great" },
];


const fastSearchWay = posts.reduce((acc , v) => {
    if (!acc[v.id]) {
        acc[v.id] = v;
    }
    return acc;
}, {});

// console.log(fastSearchWay);




