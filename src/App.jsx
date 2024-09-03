import { useState } from 'react'
import './App.css'

function App() {
let [Bulbapp , setBulbApp] = useState(false)
let [countapp , setCountApp] = useState(false)
let [count, setCount] = useState(0)
let [bulb , setBulb] = useState(true)


  let incre = () => {
      setCount(count < 20 ? count + 1 : count)
  }
  let decre = () => {
    setCount(count > 0 ? count - 1 : count)
}


let ToggleButton = () => {
  setBulb(!bulb)
}

let home = () => {
  setBulbApp(false)
  setCountApp(false)
}

const handleApp1 = () => {
  setCountApp(true);
  setBulbApp(false);
};

const handleApp2 = () => {
  setBulbApp(true);
  setCountApp(false);
};
  return (
    <div className="app-container">
    {
    !Bulbapp && !countapp ? (
    <>
        <h1>Choose The Task</h1>
        <div className="buttons">
          <button onClick={handleApp1}>Counter-App</button>
          <button onClick={handleApp2}>Toggle-Bulb-App</button>
        </div>
    </>
    ) : countapp ? (
      <div className="count-container">
      <h1>Counter-App</h1>
      <h3>{count}</h3>
      <button onClick={incre} >Increment</button>
      <button onClick={decre}>Decrement</button> 
      <button onClick={home}>Go To Home</button>
      </div>
    ) : (
    <div className="bulb-container">
      <img src={bulb ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25C0t7Ak4B5qWwT4nUMqlbGqF51wUK6xMyw&s' :
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2WAnExtUFXg74jTjfvC7aReqFGm5TFdZ4g&s'
      } alt="" />
    <button onClick={ToggleButton}>Toggle</button>
    <button onClick={home}>Go To Home</button>
    </div>
    )}
    </div>
  )
}

export default App
