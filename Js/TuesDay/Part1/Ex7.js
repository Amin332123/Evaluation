const scores = [45, 12, 78, 3, 99, 56, 23, 67];
const noms = ['Zoe','Alice','Marc','Bob','Yasmine','Chloe'];


console.log([...scores].sort((a , b) => a - b)); // asc
console.log([...scores].sort((a , b) => b - a));  // desc


const numberAlphabet = noms.sort((a, b) => a.localeCompare(b));

const maxThreeNumbers = scores.sort((a, b) => b - a).slice(0, 3);


