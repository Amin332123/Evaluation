// EX 1 Créer un tableau de fruits
var fruits = ["pomme", "banane", "orange"];
// console.log(fruits[1]);

// EX 2 Ajouter et compter
let couleurs = ["rouge", "bleu", "vert"];
couleurs.push("violet");
//console.log(couleurs.length);

// EX 3 Mon premier objet

var persone = {
  nom: "Alice",
  age: 25,
  ville: "Paris",
};
// console.log(persone.nom);

// EX 4 Parcourir un tableau

let animaux = ["chat", "chien", "lapin", "tortue"];
for (let i = 0; i < animaux.length; i++) {
  // console.log(animaux[i]);
}

// EX 5 Challenge : Liste de courses

let courses = [
  { nom: "Pain", prix: 20 },
  { nom: "Lait", prix: 50 },
  { nom: "Oeufs", prix: 70 },
];
let total = 0;
for(let i = 0 ; i < courses.length ; i++) {
    total += courses[i].prix;
}
    // console.log(total);




// BONUS — Challenge : Fiche produit




let Produict = {
    nom : "café",
    prix : 12,
    categorie : "boisson"
}
    // console.log("Le produit " + Produict.nom + " coûte " + Produict.prix + " euros (catégorie : " + Produict.categorie + ")");





    /* 
    Je comprends ce qu'est un tableau  : oui 
    Je peux créer un tableau et accéder à ses éléments  : oui 
    Je sais utiliser .push() et .length  : oui
    Je peux parcourir un tableau avec for : oui 
    Je comprends ce qu'est un objet  : oui 
    Je peux créer un objet et accéder à ses propriétés : oui
    J'ai réussi le challenge Liste de courses : oui 
    J'ai réussi le challenge Fiche produit : oui
    */ 


