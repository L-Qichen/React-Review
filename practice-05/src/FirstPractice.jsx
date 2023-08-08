import { useState } from 'react'
import './controlledInputs.css'
import { customers } from './data'

export const FirstPractice = () => {
  const [name, setName] = useState('');

  return (
    <>
      <h1 className='title' style={{ color: "#D781E3" }}>Practice: add and delete user</h1>
      <div className='main'>
        <form>
          <div className='form-row'>
            <label htmlFor='customerName' className='form-label'>Name:</label>
            <input id='customerName' type='text' className='form-input'></input>
            <button type='submit' className='btn'>Add</button>
          </div>
        </form>
        <hr />
        <ol>
          {customers.map((customer) => {
            return (
              <li key={customer.id}>{customer.name}</li>
            )
          })}
        </ol>
      </div>
    </>
  )
}