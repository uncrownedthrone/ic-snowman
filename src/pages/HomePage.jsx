import React from 'react'

const HomePage = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const letterClicked = letter => {
    console.log(letter)
  }
  return (
    <main>
      <img src="" alt="snowman" />
      <section>
        <ul>
          <li> _ </li>
          <li> _ </li>
          <li> _ </li>
          <li> _ </li>
          <li> _ </li>
          <li> _ </li>
        </ul>
      </section>
      <section>
        <header>Guessed Letters:</header>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
        <ul className="letter-buttons">
          {letters.map(letter => {
            return (
              <li>
                <button onClick={() => letterClicked(letter)}>{letter}</button>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default HomePage
