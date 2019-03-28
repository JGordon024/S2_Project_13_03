"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: 
   Date:   
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
// Creates several variables
window.onload = init;
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection;
// Creates a function that runs some of the variables above and defines them. Creates 2 new variables as well
function init() {
      allLetters = document.querySelector("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.dataSet.clueA;
      var downID = currentLetter.dataSet.clueD;
      acrossClue = document.getElementById("acrossID");
      downClue = document.getElementById("downID");
}
// Creates a function that uses puzzleLetter as the parameter. The currentLetter is set equal to the puzzleLetter, and a for loop is defined to change the allLetter background to empty ""
function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.background = "";
      }
      acrossClue.style.color = "";
      downClue.style.color = "";
      // Creates an if statement, deciding that if the currentLetter.dataset.clueA is not equal to undefined, then it will change the color to blue, change the acrossClue to be currentLetter.dataset.clueA, and changes the background color to a light blue      
      if (currentLetter.dataSet.clueA != 'undefined') {
            acrossClue = currentLetter.dataSet.clueA;
            acrossClue.style.color = "blue";
            wordLetters = document.getElementById("data-clue-A");
            wordLetters.querySelectorAll().style.backgroundColor = "rgb(231,231,255";
      }

}










/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}