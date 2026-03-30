<?php 

class Animal {
    public $nom ;
    public $race;

    public function __construct($nom , $race) {
        $this->nom = $nom;
        $this->race = $race;
    }

    public function parler() {
        return $this->nom . " dit : Grr! " ;
    }


}

$animal1 = new Animal('Rex', 'Chien');
$animal2 = new Animal('Mimi', 'Chat');

echo $animal1->parler() . " --another-- " . $animal2->parler();

echo $animal1->nom;