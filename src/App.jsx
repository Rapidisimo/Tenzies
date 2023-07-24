
import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

function App() {

  const allNewDice = () => {
    const numArray = [];
    for(let i = 1; i <= 10; i++){
        const randNum = Math.floor(Math.random() * 6 + 1);
        numArray.push({value: randNum, isHeld: false, id: nanoid()})
    }
    return numArray
  }
  const [diceNum, setDiceNum] = React.useState(allNewDice())
  const dieComp = diceNum.map( (data) => {
      return <Die value={data.value} key={data.id} />
  })

  const rollDice = () => {
    setDiceNum(allNewDice())
  }

  return (
    <main>
      <div className="game">
        <div className="intro">
          <h1>Tenzies Game</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="dice-group">
          {dieComp}
        </div>
        <div className="roll-grp">
          <button className="roll-btn" onClick={rollDice}>Roll</button>
        </div>
      </div>
    </main>
  )
}

export default App
