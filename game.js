// VARIABLES

var randomNumber = 10;
var userInput = document.getElementById("first-number-input");
var userNumber = userInput.value;
var guessButton = document.getElementById("guess-button");
var guessDisplay = document.getElementById("guess-display");
var guessDisplayTitle = document.getElementById("guess-display-title")
var clearButton = document.querySelector("#clear-button");
var resetButton = document.getElementById("reset-button");
var userFeedback = document.getElementById("user-feedback");
var goButton = document.getElementById("user-range-submit")
var userMin = 0;
var userMax = 10;

// EVENT LISTENERS

document.getElementById("user-range-submit").addEventListener('click', function(event) {
  event.preventDefault();
  rangeSet ();
});

document.getElementById("guessForm").addEventListener("click", function(event)
  { event.preventDefault()
    });

userInput.addEventListener('keyup', function (event) {
   if (userInput.value.length === 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
});

userInput.addEventListener('keyup', function () {
   if (userInput.value.length === 0) {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
});

clearButton.addEventListener("click", clearField);

resetButton.addEventListener("click", resetGame);

guessButton.addEventListener('click', updateGuess);

goButton.addEventListener('click', displayInstructions);

// USER SEES INSTRUCTIONS ONCE RANGE IS SUBMITTED

function displayInstructions () {
  document.getElementById("instructions-message").innerText = "Now guess the secret number in your range...";
}

// USER CAN SET THE RANGE OF THE GAME

function rangeSet () {
  userMin = parseInt(document.getElementById("user-min").value);
  userMax = parseInt(document.getElementById("user-max").value);
  // console.log(userMin)
  numberCreator(userMin, userMax);
}

// USER CAN'T USE THE CLEAR BUTTON UNTIL A NUMBER HAS BEEN TYPED

function clearField() {
  document.getElementById("first-number-input").value = "";
  clearButton.disabled = true;
}

// USER CAN RESET THE GAME ONCE A NUMBER HAS BEEN SUBMITTED AND CLEAR THE RANGE

function resetGame() {
  numberCreator(userMin, userMax);
  clearField();
  clearRange();
  clearUserFeedback();
}

function clearRange() {
  document.getElementById("user-min").value = "";
  document.getElementById("user-max").value = "";
}

function clearUserFeedback() {
  guessDisplay.innerText = "?";
  userFeedback.innerText = "";
  guessDisplayTitle.innerText = "";
}

// USER CAN PLAY THE GAME UPON RELOAD WITHOUT ENTERING A RANGE (THE GAME GENERATES A NEW RANDOM NUMBER UPON RELOAD BEFORE THE NEW RANGE IS ENTERED)

window.onload = function() {
  numberCreator(userMin, userMax);
}

// USER CAN SEE THEIR LAST GUESS IN THE NUMBER DISPLAY

function numberCreator(rangeMin, rangeMax) {
  randomNumber = Math.floor(Math.random()* (rangeMax - rangeMin + 1) + rangeMin);
  console.log(randomNumber)
}

// USER CAN ENTER A GUESS

function updateGuess () {
  userNumber = userInput.value;
  console.log(userNumber);
  compareNumbers()
  userInput.value = '';
  userInput.focus();
  console.log(userInput.focus)
  showGuess ()
}

// USER CAN SEE THEIR MOST RECENT GUESS

function showGuess() {
  guessDisplay.innerText = userNumber;
}

function showPrompt() {
  guessDisplayTitle.innerText = "Your last guess was:"
}

// USER SEES A RESULT AND HINT ABOUT THEIR GUESS

function compareNumbers () {
  console.log(userNumber)
  if (parseInt(userNumber) === randomNumber) {
    console.log(userNumber + " " + randomNumber);
    console.log("Boom!");
    userFeedback.innerText = "Boom! That's the secret number!";
    showPrompt();
    displayNewInstructions ()
    updateRange();

  } else if (userNumber < userMin) {
    console.log(userNumber + " " + randomNumber); 
    console.log("You went below the min");
    userFeedback.innerText = "ERROR - You went below the minimum!";
    showPrompt();
    
  } else if (userNumber < randomNumber) {
    console.log(userNumber + " " + randomNumber); 
    console.log("That's too low!");
    userFeedback.innerText = "That's too low!";
    showPrompt();

  } else if (userNumber > userMax) {
    console.log(userNumber + " " + randomNumber);
    console.log("You went above the max!");
    userFeedback.innerText = "ERROR - You went above the max!";
    showPrompt();
    
  } else if (userNumber > randomNumber) {
    console.log(userNumber + " " + randomNumber);
    console.log("That's too high!");
    userFeedback.innerText = "That's too high!";
    showPrompt();

  } else {
    console.log(userNumber + " " + randomNumber);
    console.log("That is not a number... try again!");
    alert("please put in a REAL number");
  }
}

// USER HAS TO PLAY A HARDER GAME IF THEY WIN. USER CAN SEE THE NEW MIN AND MAX VALUES

function updateRange() {
  var updatedMin = (userMin - 10);
  var updatedMax = (userMax + 10);
  console.log("updated min" + updatedMin);
  console.log("updated max" + updatedMax);
  numberCreator(updatedMin, updatedMax);
  console.log("new random number" + randomNumber);
  document.getElementById("user-min").value = updatedMin;
  document.getElementById("user-max").value = updatedMax;
}

// USER SEES NEW INSTRUCTIONS FOR INCREASED RANGE ONCE THEY WIN

function displayNewInstructions () {
  document.getElementById("instructions-message").innerText = "Congrats! We made your range above larger for the next round!";
}




