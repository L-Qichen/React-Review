import { useState, useEffect } from "react"
import './UseEffect.css'

export const UseEffectMulti = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
  }

  useEffect(() => {
    console.log("Hello from first useEffect hook.");
  }, []);

  useEffect(() => {
    console.log("Hello from second useEffect hook.");
  }, [value, secondValue]);

  return (
    <>
      <h1 className="title">Use Effect Multiple</h1>
      <div className="main">
        {value}
        <button type="button" onClick={(increaseValue)}>increase</button>
        {secondValue}
        <button type="button" onClick={() => {
          setSecondValue(secondValue + 1);
        }}>add</button>
      </div>
    </>
  )
}