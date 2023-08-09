import { useToggle } from './useToggle'
import './style.css'

export const FirstExample = () => {
  const { value, toggle } = useToggle(false);

  return (
    <>
      <h1 className='title'>Custom hooks First example</h1>
      <div className='main'>
        <button type='button' className='btn' onClick={toggle}>Toggle</button>
        {value && <p>This is an example of custom hooks.
          Basically it's encapsulation a state value and
          some actions(function/handler) together.</p>}
      </div>
    </>
  )
}