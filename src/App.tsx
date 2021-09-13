import React from 'react'
import step0 from './images/step_0.png'

export function App() {
  return (
    <main>
      <header>
        <h1>Build-A-Snowman</h1>
      </header>
      <body>
        <section className="instructions">
          <p>
            <strong>Instructions:</strong> lorem ipsum
          </p>
        </section>
        <section className="snowman-image">
          <img src={step0} alt="first step image of snow" />;
        </section>
        <section className="word-display">
          <h3 className="first-letter">*</h3>
          <h3 className="second-letter">*</h3>
          <h3 className="third-letter">*</h3>
          <h3 className="fourth-letter">*</h3>
          <h3 className="fifth-letter">*</h3>
          <h3 className="sixth-letter">*</h3>
          <h3 className="seventh-letter">*</h3>
        </section>
        <section className="alphabet-buttons">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
          <button>E</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>I</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button>M</button>
          <button>N</button>
          <button>O</button>
          <button>P</button>
          <button>Q</button>
          <button>R</button>
          <button>S</button>
          <button>T</button>
          <button>U</button>
          <button>V</button>
          <button>W</button>
          <button>X</button>
          <button>Y</button>
          <button>Z</button>
        </section>
      </body>
      <footer>
        <p>Built with ♥ in St. Petersburg, Florida.</p>
      </footer>
    </main>
  )
}
