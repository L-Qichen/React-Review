import './controlledInputs.css'

const ControlledInputs = () => {
  return (
    <>
      <h1 className="title">Controlled Inputs</h1>
      <form className='main'>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='text' id='name' className='form-input'></input>
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='email' id='email' className='form-input'></input>
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' id='password' className='form-input'></input>
        </div>
        <button type='submit' className='btn'>submit</button>
      </form>
    </>
  )
}

export default ControlledInputs;