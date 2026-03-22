const inventaire = {
stylo: { prix: 1.5, stock: 200 },
cahier: { prix: 3.5, stock: 85 },
regle: { prix: 0.8, stock: 0 },
compas: { prix: 8.5, stock: 12 },
};

// 1 console.log(Object.keys(inventaire));


// 2

Object.entries(inventaire).forEach( ([key , val]) => {
    console.log(`${key} => ` + `${val.prix * val.stock}`); 
});



