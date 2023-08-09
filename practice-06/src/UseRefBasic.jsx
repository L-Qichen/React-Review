import { useEffect, useRef } from 'react'
import './style.css'

export const UseRefBasic = () => {
  // unlike the useState hook, useRef will not trigger
  // re-render, which means even if we change the value
  // of it, the page will not re-render to show the new value.
  // Moreover, the useRef hook will return a object contain
  // a property called "current". And the value is stored in 
  // the current property.
  // In other words,useRef is more like a container which
  // contain a value/object/node(whatever you pass to it)
  const inputRef = useRef(null);
  // here is run before mounted
  console.log(inputRef);
  useEffect(() => {
    // after initial render
    console.log(inputRef);
    // inputRef.current === the input DOM node
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h1 className='title'>UseRef Basic: bind an real DOM node</h1>
      <div className='main'>
        <form>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>Name:</label>
            <input type='text' id='name' name='name'
              // used ref property to bind this input and 
              // the useRef instance(inputRef)
              //
              // its also called uncontrolled inputs
              className='form-input' ref={inputRef}></input>
            <button type='submit' className='btn'>submit</button>
          </div>
        </form>
      </div>
    </>
  )
}