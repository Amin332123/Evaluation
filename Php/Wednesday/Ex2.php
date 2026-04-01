<?php

abstract class Vehicule
{
    protected $marque;
    protected $modele;
    protected $annee;
    protected $prixBase;

    public function __construct($marque, $modele, $annee, $prixBase)
    {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->annee = $annee;
        $this->prixBase = $prixBase;
    }

    public function __get($name)
    {
        return $this->$name;
    }


    public function getPrixFinal()
    {
        return $this->prixBase;
    }

    abstract public function getDescription();

    public static function getMostExpensive(array $vehicules)
    {
        
        $TheMostExpensiveVehicule = [];
        foreach ($vehicules as $vehicule) {
            $TheMostExpensiveVehicule[] = $vehicule->getPrixFinal();
        }

        foreach ($vehicules as $vehicule) {
            if($vehicule->getPrixFinal() == max($TheMostExpensiveVehicule)) {

                return $vehicule;
            }
           
          
        }

    }



    public function isRecent() {
        return $this->annee >= (date('Y') -3 ) ?? false;
    }


}


class Voiture extends Vehicule
{

    public function __construct($marque, $modele, $annee, $prixBase)
    {
        parent::__construct($marque, $modele, $annee, $prixBase);
    }

    public function getPrixFinal()
    {
        return parent::getPrixFinal() + 150;
    }



    public function getDescription()
    {
        return "marque : " . $this->marque . "_ Model : " . $this->modele . " _ Annee : " . $this->annee . " _  PrixBase : " . parent::getPrixFinal() . " _ Prix Final : " . $this->getPrixFinal();
    }


}


class Moto extends Vehicule
{
    public function __construct($marque, $modele, $annee, $prixBase)
    {
        parent::__construct($marque, $modele, $annee, $prixBase);
    }



    public function getPrixFinal()
    {
        return $this->annee > 2200 ? parent::getPrixFinal() : parent::getPrixFinal() - ((parent::getPrixFinal() * 5) / 100);
    }

    public function getDescription()
    {
        return "marque : " . $this->marque . "_ Model : " . $this->modele . " _ Annee : " . $this->annee . " _  PrixBase : " . parent::getPrixFinal() . " _ Prix Final : " . $this->getPrixFinal();
    }

}



class Camionnette extends Vehicule
{
    private $chargeUtile;

    public function __construct($marque, $modele, $annee, $prixBase, $chargeUtile)
    {
        parent::__construct($marque, $modele, $annee, $prixBase);
        $this->chargeUtile = $chargeUtile;
    }

    public function getPrixFinal()
    {
        return parent::getPrixFinal() * 0.10;
    }

    public function getDescription()
    {
        return "marque : " . $this->marque . "_ Model : " . $this->modele . " _ Annee : " . $this->annee . " _  PrixBase : " . $this->prixBase . " _ Prix Final : " . $this->getPrixFinal() . " _ chargeUtile : " . $this->chargeUtile;
    }
}


$catalogues = [new Voiture("Toyota", "Corolla", 2022, 22000), new Voiture("BMW", "Serie 3", 2021, 42000), new Moto("Yamaha", "MT-07", 2023, 7500), new Camionnette("Ford", "Transit", 2020, 30000, 5500)];

foreach ($catalogues as $catalogue) {

    echo "\n";
    echo "prix final : " . $catalogue->getPrixFinal();
    echo "\n";
    echo $catalogue->getDescription();
    echo "\n";
}

// calculate avg of the previous caltalog : 
$Total = 0;
foreach ($catalogues as $catalogue) {
    $Total += $catalogue->getPrixFinal();
}

echo "AVG : " . $Total / count($catalogues) . "\n";

var_dump(Vehicule::getMostExpensive($catalogues));


echo "\n" . "Is Recent : " ; var_dump($catalogues[2]->isRecent());
