const fiche = { prenom:'Bob', nom:'Dupont', age:34, ville:'Lyon' };


// 1 : console.log(fiche.prenom.concat(' ', fiche.nom));



// 2 :

function getProp(obj, cle) {
    return obj[cle];
}
//  console.log(getProp(fiche, 'salaire'));


// 3 : 

// first method:
// function renommerCle(obj, ancienne, nouvelle) {
//     obj[nouvelle] = obj[ancienne];
//     delete obj[ancienne];
//     return obj
// }

// second method:

function renommerCle(obj, old, nouvelle) {
    const {[old] : oldval , ...rest} = obj;
    const newobj = {[nouvelle] : obj[old] , ...rest};
    return newobj
}

// console.log(renommerCle(fiche, 'name', 'nom'));


