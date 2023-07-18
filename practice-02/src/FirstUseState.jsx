import { useState } from "react";

export const FirstUseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3 className='title' style={{ color: "#EA542A" }}>This example shows how useState hook work on re-render the data:</h3 >
      <div className='main'>
        <h3 style={{ color: "#EA542A" }}>{count}</h3>
        <button type='button' onClick={() => {
          setCount(count + 1)
        }}>increase</button>
      </div >
    </>
  )
}