HTML Static Implementation

Need 7 spaces for characters
Need 7 images
Need 26 buttons for A-Z letter options

Functionality

Add words list as words.json file - https://raw.githubusercontent.com/suncoast-devs/handbook/master/assignments/assets/words.jsonreact-project-template

//Randomize the word

When the player guesses a letter (clicks the button):
check if the letter is in the string of the random word
if yes -
display letter on random word line
increase the image to the next in the sequence

//The button becomes disabled, as it has already been guessed.

Add a reset button that -

resets snowman image
clears guessed letters
resets keyboard

Algorithim for obtaining a random word and apply letter guess

//Obtain the word as a string - const alphabetizeRandomWord takes getRandomWord to capture random word

//parse word into new array of individual letters

determine the index of the letters

compare guessed letter to the array

if match, use index to pair it with the display
