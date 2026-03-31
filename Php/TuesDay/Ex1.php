<?php 

class Product {
    private $nom ;
    private $prix;
    private $stock;


    public function __construct($nom, $prix, $stock) {
        $this->nom = $nom;
        $this->prix = $prix ;
        $this->stock = $stock;
    }

    // getNom(), getPrix(), getStock()
    public function getNom() {
         return $this->nom;
    }
    public function getPrix() {
         return $this->prix;
    }
    
    public function getStock() {
         return $this->stock;
    }

    public function setPrix($prix) {
        if ($prix < 0) return ;
        $this->prix = $prix;
    }

    public function setStock($stock) {
         if ($stock < 0) return ;
         $this->stock = $stock;
    }

    public function afficher() {
        return $this->nom . " —— " . $this->prix . "$  ( Stock :" . $this->stock . ")";
    }
}


$product1 = new Product("Phone" , 1279 , 20 );
$product2 = new Product("lap" , 5999 , 5 );

echo $product1->afficher() .  "\n";
echo $product2->afficher() . "\n";

// it wont update the value because the parameter given is negative; 
$product1->setPrix(-5);

echo $product1->getPrix(). "\n";
echo $product2->getNom();
