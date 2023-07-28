
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

  React.useEffect( () => {
    console.log('Dice state changed')
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
