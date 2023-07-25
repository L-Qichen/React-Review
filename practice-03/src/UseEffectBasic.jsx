import { useState, useEffect } from "react"
import './UseEffect.css'

export const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
  }
  const sayHello = () => {
    console.log("Hello");
  }

  sayHello();

  useEffect(() => {
    console.log("Hello from useEffect hook.");
  }, [])

  return (
    <>
      <h1 className="title">Use Effect Basic</h1>
      <div className="main">
        {value}
        <button type="button" onClick={increaseValue}>increase</button>
      </div>
    </>
  )
}