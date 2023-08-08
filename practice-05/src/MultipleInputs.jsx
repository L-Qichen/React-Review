import { useState } from 'react';
import './controlledInputs.css'

const MultipleInputs = () => {
  // use an object to get all the inputs value of a form
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <h1 className="title" style={{ color: '#FF9973' }}>Controlled Inputs</h1>
      <form className='main'>
        <div className='form-row'>
          <label htmlFor='nameOfMulti' className='form-label'>Name:</label>
          {/* inputs must have name attribute,
          then we can use e.target.name to located which
          input value changed */}
          <input type='text' id='nameOfMulti' className='form-input'
            value={user.name} name='name'
            // here we used Dynamic Object key which is a feature from es6
            // [key]:value => the key inside[] is dynamic
            // therefore, we can extract the callback of onChange function
            // to a function which can be called by all input onChange event
            onChange={e => { setUser({ ...user, [e.target.name]: e.target.value }) }}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='emailOfMulti' className='form-label'>Email:</label>
          <input type='email' id='emailOfMulti' className='form-input'
            value={user.email} name='email'
            onChange={e => { setUser({ ...user, [e.target.name]: e.target.value }) }}></input>
        </div>
        <div className='form-row'>
          <label htmlFor='passwordOfMulti' className='form-label'>Password:</label>
          <input type='password' id='passwordOfMulti' className='form-input'
            value={user.password} name='password'
            onChange={e => { setUser({ ...user, [e.target.name]: e.target.value }) }}></input>
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>submit</button>
      </form >
    </>
  )
}

export default MultipleInputs;