// Nettoyeur de tableau 
function nettoyer(tableau) {
    var newArray = [];  
    tableau.forEach(e => { 
       if(e) {
        newArray.push(e);
       }   
    });
    return newArray.filter((v, i) => newArray.indexOf(v) === i);

}
const firstTest = nettoyer([3,1,2,1,3,0,'',5,null,2]);
const secondtTest = nettoyer([false,7,7,'',8,undefined,8]);
const thirdTest = nettoyer([0,0,0]);
console.log(thirdTest);
