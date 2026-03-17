// 1.1 
var taches = [];
taches.push('Coder', 'Tester', 'Deployer');

taches.unshift('Analyser');


taches.pop();


taches.shift();


taches.splice(1 , 0 , 'Documenter');


taches.splice(1 , 1, 'Revue de code'); 

// console.log(taches);[ 'Coder', 'Revue de code', 'Tester' ]



// 1.2


const nombres = [10, 20, 30];
// forEach
nombres.forEach((value , index) => {
    console.log(`[${index}]` + " => " + `${value}`);
})






