import React, { useState } from 'react'
import words from './words.json'
//snowman images
import step0 from './images/step_0.png'
import step1 from './images/step_1.png'
import step2 from './images/step_2.png'
import step3 from './images/step_3.png'
import step4 from './images/step_4.png'
import step5 from './images/step_5.png'
import step6 from './images/step_6.png'
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
  const randomWord = words[0]
  console.log(randomWord)
  const [guessedLetters, setGuessedLetters] = useState('')

  function clickOnLetter(letter: string) {
    // Make a new state USING the old state plus the information
    const newValueForGuessedLetters = `${guessedLetters}${letter}`

    setGuessedLetters(newValueForGuessedLetters)
  }

  return (
    <main>
      <header>
        <h1>Build-A-Snowman</h1>
      </header>
      <body>
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
        <section className="letter-display">
          <h3 className="first-letter">*</h3>
          <h3 className="second-letter">*</h3>
          <h3 className="third-letter">*</h3>
          <h3 className="fourth-letter">*</h3>
          <h3 className="fifth-letter">*</h3>
          <h3 className="sixth-letter">*</h3>
          <h3 className="seventh-letter">*</h3>
        </section>
        <section className="alphabet-buttons">
          <div>Your guessed letters are: {guessedLetters}</div>
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

        {/* <div>Your guessed letters are {guessedLetters}</div> */}
      </body>
      <footer>
        <p>Built with ♥ in St. Petersburg, Florida.</p>
      </footer>
    </main>
  )
}
