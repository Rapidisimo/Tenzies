
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
      return <Die value={data.value} key={data.id} held={data.isHeld} id={data.id} hold={holdDice} />
  })

    /**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */

    function holdDice(id) {
      setDiceNum(prevData => prevData.map( diceData => {
        if(diceData.id === id){
          return {...diceData, isHeld: !diceData.isHeld}
        }else return diceData
      }))
    }

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
