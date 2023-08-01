
import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

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
 * Challenge: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */

  React.useEffect( () => {
    const diceHeld = diceNum.every( e => e.isHeld === true)
    const diceValue = diceNum.every( e => e.value === diceNum[0].value)
    if(diceHeld && diceValue){
      console.log("You Won!")
      setTenzies(true)
      document.querySelector('.roll-btn').textContent = 'New Game';
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
      {tenzies && <Confetti />}
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
