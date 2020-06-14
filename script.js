// Variable to store the list of guesses
var guesses = [];

// Variable for storing the correct random number

let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

// Functionality for playing the whole game

function playGame() {
  var numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

// Shows the result for if the guess it too high, too low, or correct

const displayResult = (numberGuess) => {
  if (numberGuess == correctNumber) {
    console.log("Congrats! your guess is correct");
    showYouWon();
  } else if (numberGuess > correctNumber) {
    console.log("Your Guess is too high");
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    console.log("Your Guess is too low");
    showNumberBelow();
  }
};

// Initialize a new game by resetting all values and content on the page

function initGame() {
  correctNumber = getRandomNumber();
  var guesses = [];
  resetResultContent();
  console.log(guesses);
  console.log(correctNumber);
}

// Reset the HTML content for guess history
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";
}

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  return randomNumber;
}
function saveGuessHistory(guess) {
  guesses.push(guess);
}

// Displays guess history to user

function displayHistory() {
  let index = guesses.length - 1;
  let list = '<ul class="list-group">';
  let message;
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "You guessed " +
      guesses[index] +
      "<li/>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

// Retrievs the dialog based on if the guess is wrong or correct

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
