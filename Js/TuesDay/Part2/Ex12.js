function rotate(tableau, n) {
  if (n < 0) {
    return false;
  }
  if (n == 0) {
    return tableau;
  }
  if (n > tableau.length) {
    n = n % tableau.reduce((acc, n) => n > acc ? n : acc) ;
  }

  var newArray = [];

  for (let i = n + 1; i < tableau.length; i++) {
    newArray.push(tableau[i]);
  }
  for (let i = 0; i < n + 1; i++) {
    newArray.push(tableau[i]);
  }

  return newArray;
}
console.log(rotate([1,2,3,4,5], 8));

