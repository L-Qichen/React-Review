import { useState, useRef, useEffect } from "react"
import './style.css'

export const UseRefUsage = () => {
  const [value, setValue] = useState(0);
  const refInstance = useRef(false);
  // use the feature of useRef to avoid the first render
  // (change the value useRef instance current property
  // will not trigger the re-render)
  useEffect(() => {
    if (!refInstance.current) {
      refInstance.current = true;
      return;
    }
    console.log("log every time except the initial render.");
  }, [value]);

  // check the result at console
  return (
    <>
      <h1 className="title" style={{ color: "#D781E3" }}>Avoid initial render</h1>
      <div className="main">
        <h1 className="title" style={{ color: "#D781E3" }}>{value}</h1>
        <button type="button" className="btn" onClick={() => {
          setValue(value + 1)
        }}>Add one</button>
      </div>
    </>
  );
}