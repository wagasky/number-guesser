// VARIABLES

var randomNumber = 10;
var userInput = document.getElementById("first-number-input");
var userNumber = userInput.value;
var guessButton = document.getElementById("guess-button");
var guessDisplay = document.getElementById("guess-display");
var clearButton = document.querySelector("#clear-button");
var resetButton = document.getElementById("reset-button");
var userFeedback = document.getElementById("user-feedback");
var min = 0;
var max = 10;

// USER CAN PLAY A GAME THAT GENERATES A RANDOM NUMBER
// USER MAKES A GUESS
// USER CAN CLEAR THEIR GUESS BEFORE SUBMITTING

userInput.addEventListener('keyup', function (event) {
   if (userInput.value.length === 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
});

// USER CAN RESET THE GAME ONCE A NUMBER HAS BEEN SUBMITTED

userInput.addEventListener('keyup', function () {
   if (userInput.value.length === 0) {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
});

document.getElementById("guessForm").addEventListener("click", function(event)
  { event.preventDefault()
    });

clearButton.addEventListener("click", clearField) 

function clearField() {
  document.getElementById("first-number-input").value = "";
  clearButton.disabled = true;
}

resetButton.addEventListener("click", resetGame)

function resetGame() {
  window.location.reload();
}


// USER CAN SEE THEIR LAST GUESS IN THE NUMBER DISPLAY

function numberCreator() {
  randomNumber = Math.floor(Math.random()* (max - min + 1) + min);
  console.log(randomNumber)
}

numberCreator ()

guessButton.addEventListener('click', updateGuess);

function updateGuess () {
  userNumber = userInput.value;
  // parseInt(userNumber.value);
  console.log(userNumber);
  compareNumbers()
  userInput.value = '';
  userInput.focus();
  console.log(userInput.focus)
  showGuess ()
}

function showGuess() {
  guessDisplay.innerText = userNumber;
}

// USER SEES RESULTS FROM THEIR GUESS

function compareNumbers () {
  console.log(userNumber)
  if (parseInt(userNumber) === randomNumber) {
    console.log(userNumber + " " + randomNumber);
    console.log("Boom!");
    userFeedback.innerText = "Boom! That's the secret number!";

  } else if (userNumber < min) {
    console.log(userNumber + " " + randomNumber); 
    console.log("You went below the min");
    userFeedback.innerText = "ERROR - You went below the minimum!";
    
  } else if (userNumber < randomNumber) {
    console.log(userNumber + " " + randomNumber); 
    console.log("That's too low!");
    userFeedback.innerText = "That's too low!";

  } else if (userNumber > max) {
    console.log(userNumber + " " + randomNumber);
    console.log("You went above the max!");
    userFeedback.innerText = "ERROR - You went above the max!";
    
  } else if (userNumber > randomNumber) {
    console.log(userNumber + " " + randomNumber);
    console.log("That's too high!");
    userFeedback.innerText = "That's too high!";

  } else {
    console.log(userNumber + " " + randomNumber);
    console.log("That is not a number... try again!");
    alert("please put in a REAL number");
  }
}



