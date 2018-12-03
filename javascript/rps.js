var userChoice = prompt("Choose Rock, Paper or Scissors");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        document.getElementById('game').innerHTML = "<h1>It's a tie!</h1>";
        
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            document.getElementById('game').innerHTML = "<h1>Rock breaks scissors!</h1>";
           
        }
        else{
            document.getElementById('game').innerHTML = "<h1>Paper covers rock!</h1>";
           
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            document.getElementById('game').innerHTML = "<h1>Paper covers rock!</h1>";
           
        }
        else{
            document.getElementById('game').innerHTML = "<h1>Scissors cuts paper!</h1>";
           
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            document.getElementById('game').innerHTML = "<h1>Rock breaks scissors!</h1>";
            
        }
        else{
            document.getElementById('game').innerHTML = "<h1>Scissors cuts paper!</h1>";
           
        }
    }
};
compare(userChoice,computerChoice);