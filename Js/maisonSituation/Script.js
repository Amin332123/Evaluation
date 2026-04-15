const flotte = [
  { id: 1,  marque: "Toyota", modele: "Yaris", cat: "citadine", prix_jour: 35,  km: 42000,  note: 4.2, disponible: true  },
  { id: 2,  marque: "Toyota", modele: "Corolla", cat: "berline", prix_jour: 55,  km: 28000,  note: 4.6, disponible: true  },
  { id: 3,  marque: "Renault", modele: "Clio", cat: "citadine", prix_jour: 30,  km: 75000,  note: 3.8, disponible: false },
  { id: 4,  marque: "Renault", modele: "Megane", cat: "berline", prix_jour: 50,  km: 15000,  note: 4.8, disponible: true  },
  { id: 5,  marque: "Peugeot", modele: "208", cat: "citadine", prix_jour: 32,  km: 60000,  note: 4.0, disponible: true  },
  { id: 6,  marque: "Peugeot", modele: "3008", cat: "SUV", prix_jour: 80,  km: 22000,  note: 4.7, disponible: true  },
  { id: 7,  marque: "BMW", modele: "Serie 3", cat: "berline", prix_jour: 110, km: 8000,   note: 4.9, disponible: true  },
  { id: 8,  marque: "BMW", modele: "X3", cat: "SUV", prix_jour: 130, km: 5000,   note: 4.8, disponible: false },
  { id: 9,  marque: "Ford", modele: "Kuga", cat: "SUV", prix_jour: 75,  km: 38000,  note: 4.3, disponible: true  },
  { id: 10, marque: "Ford", modele: "Fiesta", cat: "citadine", prix_jour: 28,  km: 90000,  note: 3.6, disponible: true  },
  { id: 11, marque: "Tesla", modele: "Model 3", cat: "berline", prix_jour: 95,  km: 12000,  note: 4.9, disponible: true  },
  { id: 12, marque: "Tesla", modele: "Model Y", cat: "SUV", prix_jour: 115, km: 6000,   note: 5.0, disponible: true  },
  { id: 13, marque: "Volkswagen", modele: "Golf", cat: "berline", prix_jour: 58,  km: 45000,  note: 4.1, disponible: false },
  { id: 14, marque: "Volkswagen", modele: "Tiguan", cat: "SUV", prix_jour: 88,  km: 19000,  note: 4.5, disponible: true  },
  { id: 15, marque: "Hyundai", modele: "Tucson", cat: "SUV", prix_jour: 70,  km: 31000,  note: 4.4, disponible: true  },
];


// partie 1 : 
var filteredArray = filterArray(flotte);
function filterArray(array) {
    return array.filter(e => e.disponible)
}

// partie 2 : 

function FilterToNewArray(array) {
    return array.reduce((acc , e)=> {
        let remise = e.km > 50000 ? 0 : 8
        let prix5Joures = e.prix_jour * 5 
        let prixFinal = prix5Joures - ((prix5Joures * remise) / 100)
        let newObj = {
            label : e.marque ,
            prix5jous : prix5Joures,   
            remise :  remise ,
            prixfinal :  prixFinal
        }
         acc.push(newObj);
         return acc;
    }, [])
} 

var newArray = FilterToNewArray(filteredArray);

// console.log(newArray);

//  partie 3 

var newCatArray = filterWithCaegory(flotte);

function filterWithCaegory(array) {
    return array.reduce((acc, e) => {
        if (!acc[e.cat]) {
            let mainArray = array.filter(v => v.cat == e.cat)
            let nbTotalofVehicule = calculateLength(mainArray) ;
            let nbDisponibles = calculateLength(mainArray.filter(e => e.disponible));
            let prixMoyen = sum(mainArray, 'prix_jour') / nbTotalofVehicule;
            let noteMoyenne = sum(mainArray , 'note') / nbTotalofVehicule;
            let tauxDispo = nbDisponibles / nbTotalofVehicule * 100;
            acc[e.cat] = {
                nbTotal : nbTotalofVehicule,
                nbDisponibles : nbDisponibles,
                prixMoyen : prixMoyen,
                noteMoyenne : parseFloat(noteMoyenne).toFixed(1),
                tauxDispo : parseFloat(tauxDispo).toFixed(1)
            }
        }

        return acc
    }, {})
}

function sum(array , element) {
    return array.reduce((acc , v) => {
        acc += v[element];
        return acc
    },0);
    
}
function calculateLength(array) {
    return array.length
}
console.log(newCatArray);
