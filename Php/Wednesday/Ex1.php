<?php

use BcMath\Number;

class Task
{
    private $id;
    private $description;
    private $estimatedHours;

    public function __construct($id, $estimatedHours, $description = "no description")
    {
        $this->id = $id;
        $this->description = $description;
        $this->estimatedHours = $estimatedHours;
    }

    public function getId() {
        return $this->id;
    }

     public function getDescription() {
        return $this->description;
    }

     public function getEstimateHOurs() {
        return $this->estimatedHours;
    }
    
    public function isBig($threshold):bool{
        return $this->estimatedHours > $threshold ?? false ;
    }
}


class Project
{
    private $title;
    private $dailyRate;
    private $tasks = [];

    public function __construct($title , $dailyRate) {
        $this->title = $title;
        $this->dailyRate = $dailyRate;
    }


    public function getTasks() {
        return $this->tasks;
    }

    public function addTask(Task $task){
        $this->tasks[] = $task;
    }

    public function calculateTotalHours(){
        $totalHours = 0;
        foreach($this->tasks as $task ) {
            $totalHours += $task->getEstimateHOurs();
        }
        return $totalHours;
    }

    public function calculateTotalWithBuffer($bufferPercent = 10) {
        return $this->calculateTotalHours() * (1 + $bufferPercent / 100);
    }

    public function calculateBudget() {
        return $this->calculateTotalWithBuffer() * ($this->dailyRate / 8);
    }


    public function getBigTasks($threshold) {
        $bigTasks = [];
        foreach($this->tasks as $task) {
            if($task->isBig($threshold)) {
                $bigTasks[] = $task;
            }
        }
        return $bigTasks;
    }
}

$project1 = new Project('Refonte site web', 600);

$project1->addTask(new Task('addTask', 12));
$project1->addTask(new Task('Dev fron', 30));
$project1->addTask(new Task('Dev back', 45));

// total hours : 
echo '__ total hours : ' . $project1->calculateTotalHours() . ' __ ';

// total hours with buffer :
echo ' With buffer ' . $project1->calculateTotalWithBuffer() . ' __ ';


// estimate budget : 
echo ' Estimate budget ' .  $project1->calculateBudget() . ' __ ';


// tasks that has more than 20 hours : 
var_dump($project1->getBigTasks(20)) ;





