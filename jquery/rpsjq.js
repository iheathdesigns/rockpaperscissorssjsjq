$(document).ready(function() { 
  $("#scissors").on('click', function(){
    var result = compare('scissors', computerChoice());
    $("#decision").html(result);
  });
  
  $('#rock').on('click', function(){
    var result = compare('rock', computerChoice());
    $("#decision").html(result);
  });
  
  $('#paper').on('click', function(){
    var result = compare('paper', computerChoice());
    $("#decision").html(result);
  });
});

var compare = function(me, opponent) {
  if(me === 'rock') {
    
      if(opponent === 'rock') {
          return 'Tie';
      } else if (opponent === 'paper') {
        return 'Paper covers rock!';
      } else if (opponent === 'scissors') {
        return 'Rock breaks scissors!';
      }
    
  } else if (me === 'paper') {
    
      if(opponent === 'paper') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'Paper covers rock';
      } else if (opponent === 'scissors') {
        return 'Scissors cuts paper!';
    }
  } else if (me === 'scissors') {
    
      if(opponent === 'scissors') {
        return 'Tie';
      } else if (opponent === 'paper') {
        return 'Scissors cuts paper!';
      } else if (opponent === 'rock') {
        return 'Rock breaks scissors!';
    }
  } else {
    return "Invalid input"
  }
};
var computerChoice = function() {
        var random = Math.random();
        if (random < 0.333) {
	      return  'rock';
        } else if(random < 0.67777) {
	      return 'paper';
        } else {
	      return 'scissors';
        } 
};