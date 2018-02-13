var prize = 0;
var possiblePrize = 10;
var lvl2;
var prize2 = 0;
var query = confirm("Do you want to play a game ?");
if (query == true) {
  var random = Math.floor(Math.random() * 6);
  var attempts = 3;
  game();

  function game() {
    for (var i = 0; i < 3; i++) {
      var userAnswer = +prompt("Enter number from 0 to 5\n" + "Attempts left: " + attempts + "\nTotal Prize: " + prize + "$" + "\nPossible prize on current attempt: " + possiblePrize + "$");
      if (random !== userAnswer) {
        --attempts;
        if (attempts == 3) {
          possiblePrize = 10;
        } else if (attempts == 2) {
          possiblePrize = 5;
        } else if (attempts == 1) {
          possiblePrize = 2;
        }
      } else if (random == userAnswer) {
        if (attempts == 3) {
          prize = 10;
          var mazltoff = confirm("Do you wanna continue? It's gonna be harder!");
          if (mazltoff == true) {
            game2();
          }
          break;
        } else if (attempts == 2) {
          prize = 5;
          var mazltoff = confirm("Do you wanna continue? It's gonna be harder!");
          if (mazltoff == true) {
            game2();
          }
          break;
        } else if (attempts == 1) {
          prize = 2;
          var mazltoff = confirm("Do you wanna continue? It's gonna be harder!");
          if (mazltoff == true) {
            game2();
          }

          break;
        }
      }
      if (attempts == 0) {
        console.log("Thank you for a game. Your prize is: " + prize);
      }
      if (userAnswer == false) {
        break;
      }
    }
  }

  function game2() {
    attempts = 3;
    random = Math.floor(Math.random() * 11);
    possiblePrize = 30;
    for (var i = 0; i < 3; i++) {
      var userAnswer = +prompt("Enter number from 0 to 10\n" + "Attempts left: " + attempts + "\nTotal Prize: " + prize + "$" + "\nPossible prize on current attempt: " + possiblePrize + "$");
      if (random !== userAnswer) {
        --attempts;
        if (attempts == 3) {
          possiblePrize = 30;
        } else if (attempts == 2) {
          possiblePrize = 15;
        } else if (attempts == 1) {
          possiblePrize = 7;
        }
      } else if (random == userAnswer) {
        if (attempts == 3) {
          prize2 = 30;
          break;
        } else if (attempts == 2) {
          prize2 = 15;
          break;
        } else if (attempts == 1) {
          prize2 = 7;
          break;
        }
      }
      if (attempts == 0) {
        let totalPrize = prize + prize2;
        console.log("Thank you for a game. Your prize is " + totalPrize);
      }
      if (userAnswer == false) {
        break;
      }
    }
  }
  var again = confirm("Do you want to play again? ");
  if (again == true) {
    random = Math.floor(Math.random() * 6);
    attempts = 3;
    prize = 0;
    possiblePrize = 10;
    game();
  } else {
    let totalPrize = prize + prize2;
    console.log("Thank you for a game. Your prize is: " + totalPrize);
  }
} else {
  console.log("You did not become a millionaire.");
}
