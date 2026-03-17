const prenoms = ['Alice', 'Bob', 'Clara', 'David', 'Eva'];


//         forEach

//  1 Utilisez forEach() pour afficher chaque prenom avec son rang : '1. Alice', '2. Bob'...

// prenoms.forEach((value , index) => {
//     console.log(`${index + 1}` + " " + `${value}`);
// })




/* 2. Utilisez forEach() pour construire un nouveau tableau longueurs contenant le nb de lettres
 de chaque prenom, puis affichez-le */


// var lenArray = []
//     prenoms.forEach((value) => {
//         lenArray.push(value.length);
//     })
// console.log(lenArray);


/* 3 Utilisez forEach() pour afficher uniquement les prenoms dont la longueur est superieure a
3 lettres */


// prenoms.forEach((value) => {
//     if (value.length > 3)
//     console.log(value);
// })







const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);














