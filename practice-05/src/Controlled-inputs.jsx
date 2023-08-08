import { useState } from 'react';
import './controlledInputs.css'

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <h1 className="title">Controlled Inputs</h1>
      <form className='main'>
        <div className='form-row'>
          {/* Important:
          1. label for property called htmlFor in react
          and its value should be equal to the id property 
          value of input to combine them
          2. when we provided a 'value' to the value property 
          of an input element, we must provide a onChange 
          handler to the input element. Otherwise, the react 
          will complain and show a warning on console
           */}
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='text' id='name' className='form-input'
            value={name} onChange={e => { setName(e.target.value) }}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='email' id='email' className='form-input'
            value={email} onChange={e => { setEmail(e.target.value) }}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' id='password' className='form-input'
            value={password} onChange={e => { setPassword(e.target.value) }}></input>
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>submit</button>
      </form>
    </>
  )
}

export default ControlledInputs;