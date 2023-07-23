
import React from "react"
import Die from "./Die"

function App() {
  const value = 1;

  return (
    <main>
      <div className="game">
        <div className="intro">
          <h1>Tenzies Game</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="dice-group">
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
          <Die value={value}/>
        </div>
      </div>
    </main>
  )
}

export default App
