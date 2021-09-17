import React, { useState } from 'react'
import words from './words.json'
//snowman images
// import step0 from './images/step_0.png'
// import step1 from './images/step_1.png'
// import step2 from './images/step_2.png'
// import step3 from './images/step_3.png'
// import step4 from './images/step_4.png'
// import step5 from './images/step_5.png'
// import step6 from './images/step_6.png'
import step7 from './images/step_7.png'

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

export function App() {
  //Randomized Word
  const getRandomWord = words[Math.floor(Math.random() * 1024)]
  console.log(getRandomWord)

  //Split Random Word into array of letters
  const alphabetizeRandomWord = getRandomWord.split('')
  console.log(alphabetizeRandomWord)

  //Get the index of the letter to determine its positioning within the word

  const indexAlphabetizeRandomWord = alphabetizeRandomWord.forEach(
    (alphabetizeRandomWord) => console.log(alphabetizeRandomWord)
  )
  console.log(indexAlphabetizeRandomWord)

  //Guessed Letters state
  const [guessedLetters, setGuessedLetters] = useState([''])

  function clickOnLetter(letter: string) {
    const newValueForGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newValueForGuessedLetters)

    //Compares user's letter guess against random word's array of letters

    const matchAlphabetizeRandomWord = alphabetizeRandomWord.includes(letter)
    console.log(letter)
    console.log(matchAlphabetizeRandomWord)
  }
  // Next if true, display letter and image OR False and do nothing unless 26th word
  // Add reset button

  console.log(clickOnLetter)
  return (
    <body>
      <header>
        <h1>Build-A-Snowman</h1>
      </header>

      <section className="instructions">
        <p>
          <strong>Instructions:</strong> Select a letter to guess the random
          word. Each correct letter builds another piece of your snowman. Have
          fun!
        </p>
      </section>
      <section className="snowman-image">
        <img src={step7} alt="first step image of snow" />
      </section>
      <section className="word-display">
        <h1>Word to Guess</h1>
      </section>
      <section className="random-word-display">
        <h3 className="0index">
          <u>*</u>
        </h3>
        <h3 className="1index">
          <u>*</u>
        </h3>
        <h3 className="2index">
          <u>*</u>
        </h3>
        <h3 className="3index">
          <u>*</u>
        </h3>
        <h3 className="4index">
          <u>*</u>
        </h3>
        <h3 className="5index">
          <u>*</u>
        </h3>
        <h3 className="6index">
          <u>*</u>
        </h3>
      </section>
      <section className="letter-display">
        <h5>Guessed letters: {guessedLetters}</h5>
      </section>
      <section className="alphabet-buttons">
        {alphabet.map(function (letter) {
          return (
            <button
              key={letter}
              onClick={function () {
                clickOnLetter(letter)
              }}
              disabled={guessedLetters.includes(letter)}
            >
              {letter}
            </button>
          )
        })}
      </section>

      <footer>
        <p>Built with ♥ in St. Petersburg, Florida.</p>
      </footer>
    </body>
  )
}
