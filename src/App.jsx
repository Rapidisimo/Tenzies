
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
  const [tenzies, setTenzies] = React.useState(false);

  /**
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */

  React.useEffect( () => {
    const diceHeld = diceNum.every( e => e.isHeld === true)
    const diceValue = diceNum.every( e => e.value === diceNum[0].value)
    if(diceHeld && diceValue){
      console.log("You Won!")
      setTenzies(true)
    }
  },[diceNum])

    function holdDice(id) {
      setDiceNum(prevData => prevData.map( diceData => {
        if(diceData.id === id){
          return {...diceData, isHeld: !diceData.isHeld}
        }else return diceData
      }))
    }

  const rollDice = () => {
    setDiceNum(prevData => prevData.map( diceData => {
      if(diceData.isHeld) {
        return diceData
      }else {
        return {
          value: Math.floor(Math.random() * 6 + 1),
          isHeld: false,
          id: nanoid()
        }
      }
    } ))
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
