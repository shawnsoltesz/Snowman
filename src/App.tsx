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
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export function App() {
  //Randomized Word
  const getRandomWord = words[Math.floor(Math.random() * 1034)]
  console.log(getRandomWord)

  //Split Random Word into array of letters
  const alphabetizeRandomWord = getRandomWord.split('')
  console.log(alphabetizeRandomWord)

  //Compares user's letter guess against random word's array of letters
  function matchRandomWord(letter: string) {
    const result = alphabetizeRandomWord.includes(letter)

    return result
  }

  const shawn = matchRandomWord
  console.log(shawn)

  const [guessedLetters, setGuessedLetters] = useState([''])

  function clickOnLetter(letter: string) {
    const newValueForGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newValueForGuessedLetters)
  }

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
        <h3 className="0">
          <u>*</u>
        </h3>
        <h3 className="1">
          <u>*</u>
        </h3>
        <h3 className="2">
          <u>*</u>
        </h3>
        <h3 className="3">
          <u>*</u>
        </h3>
        <h3 className="4">
          <u>*</u>
        </h3>
        <h3 className="5">
          <u>*</u>
        </h3>
        <h3 className="6">
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
