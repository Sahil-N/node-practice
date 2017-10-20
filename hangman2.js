

// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

var inquirer = require("inquirer");


var wordBank = ["astounding", "emergency", "growth", "commence", "ostrich", "blankness", "billionaire", "disbeliever", "luminous", "encryption", ];

//my chosen word:
var selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];


//array that holds guessed letters
var guessedLetters = [];

//array that holds each letter object.
var lettersofWord = [];

var displayString;



// 2. Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:
//   * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.



var guessesRemaining; //future if statement
var wins = 0;
var losses = 0;

(
  function start(){

    guessesRemaining = 15;
    console.log("");
    console.log("**********");
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("**********");
    console.log("");
    console.log("");
    console.log("");
    console.log("");

    createWordArray(selectedWord);
    refresh();
    gameLogic();
  }
)(); //run immediately after you write it.


function refresh (){
  display(lettersofWord);

  console.log("");
  console.log("Guessed Letters: ");
  console.log(guessedLetters  + "\n");
  console.log("Guesses left: " + guessesRemaining);
  console.log("");
}



function gameLogic() {

if (guessesRemaining > 0) {
    inquirer.prompt([
      {
        type: "input",
        name: "userInput",
        message: "Please guess a letter" 
      }
    ])
    .then(function(inquirerResponse) {
    guessedLetters.push(inquirerResponse.userInput); //add to array
  // console.log(JSON.stringify(inquirerResponse));
  for (var i = 0; i < selectedWord.length; i++) {
    // console.log("the letter: " + selectedWord[i])
    if (inquirerResponse.userInput === selectedWord[i]) {
      lettersofWord[i].guessed = true;
      // console.log(lettersofWord[i].guessed);
      // console.log("match");
    }
  }
  guessesRemaining --;
  refresh();
  gameLogic();
  winChecker();
  })
}

else {
  losses++;
  playAgain();
}

}


function winChecker(){
  if (displayString === selectedWord){
    console.log("Winner!");
    wins++ ; 
    guessesRemaining = 0;
    playAgain();
  }
}




//   * **Letter**: Used for each letter in the current word. Each letter object should either display:
function Letter(letter) {
  this.letter = letter;
  this.placeholder = "*";
  this.guessed = false;
}




//pass in current word to be guessed & push it to new array
//for the length of the word, create a new letter object (constructor)
//push each new object into the array "letter data"

function createWordArray(word){ 
  for (var i = 0; i < word.length; i++) {
    var letterData = new Letter (word[i]); //create new constructor object for each individual letter in word.
    lettersofWord[i] = letterData;//pass in new object into index of array
  }
  // console.log(lettersofWord);
}


function playAgain() {
  inquirer.prompt([

  {
  type: "list",
  name: "gameOver",
  message: "Would you like to play again?",
  choices: ["Yes", "No"]
  }

])
.then(function(inquirerResponse) {
console.log(JSON.stringify(inquirerResponse));
if (inquirerResponse.gameOver === "yes") {
  start();
}
else {
  console.log("goodbye");
}
})
}


//function that takes in my array of letter objects & displays a string to bash
//for each index of letters of word array, if value is fale
function display(letterArray) {
  displayString = "";
  for (var i = 0; i < letterArray.length; i++) {

    if (letterArray[i].guessed){//show placeholder
      displayString += letterArray[i].letter;
    }
    else {
      displayString += letterArray[i].placeholder;
      // console.log(displayString);
    }
  }
console.log("");  
console.log(displayString + "\n");


}


// an underlying character, 


//or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.








// 3. You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

// 4. Each constructor function should be in it's own file and be exported and required wherever needed.

// 5. Look into [function prototypes](https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/) and use them for a few of your constructor's methods.

// - - -

// ### Notes

// * Since this assignment is a command-line application, you don't need to deploy it anywhere. You will, however, be required to upload it to Github.

// * Remember to include a `package.json` file containing your project dependencies in your Github repo!

// ### Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

// - - -

// ### One More Thing

// If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

// **Good Luck!**

// - - -

// ## Copyright

// Coding Boot Camp © 2016. All Rights Reserved.
