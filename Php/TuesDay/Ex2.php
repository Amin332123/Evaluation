<?php 

class CompteBancaire {
    private $titulaire;
    private $iban ;
    private $solde ;


    public function __construct($titulaire , $iban , $solde = 0 ) {
        $this->titulaire = $titulaire;
        $this->iban = $iban;
        $this->solde = $solde;
    }

    // getTitulaire(), getIban(), getSolde()

    public function getTitulaire() {
       return $this->titulaire;

    }
      public function getIban() {
       return $this->iban;

    }
      public function getSolde() {
       return $this->solde;

    }


    public function deposer($montant) {
        if ($montant < 0) return "Tu doit deposer un valeur positif";
        $this->solde += $montant;
    }

    public function retirer($montant) {
        if ($montant < 0 || $montant > $this->solde) return "Solde insuffisant";
    }


    public function afficherInfos() {
        return "titulaire : " . $this->titulaire . " -- Iban : " . $this->iban . " -- Solde : " . $this->solde ;
    }

}



$comptes = [
    new CompteBancaire("Alice", "FR76 3000 6000 0123 4567 8901 234", 1500.50),
    new CompteBancaire("Bob", "US12 BANK 9876 5432 10", ),
    new CompteBancaire("Charlie", "GB99 POGO 4040 2912 3456 78", 50000.00)
];


echo $comptes[0]->afficherInfos() . "\n";
$comptes[0]->deposer(500);
echo "After deposit: " . $comptes[0]->getSolde() . "€\n\n";


echo $comptes[1]->afficherInfos() . "\n";
$resultat = $comptes[1]->retirer(50);
echo "Withdrawal attempt: " . ($resultat ?: "Success") . "\n\n";