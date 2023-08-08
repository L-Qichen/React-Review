import { useState } from 'react'
import './controlledInputs.css'
import { customers } from './data'

export const FirstPractice = () => {
  const [name, setName] = useState('');
  const [customersList, setCustomersList] = useState(customers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newCustomer = {
      id: fakeId,
      name
    }
    setCustomersList([...customersList, newCustomer]);
    setName('');
  }
  const handleRemove = (id) => {
    // Important:
    // when we use the arrow function, be careful to
    // use return in {}(function body)
    // if we don't use return, it means this function no
    // return value.
    // When there only is one statement or value in {}
    //(function body), we can omit {} and return.
    // in this case: 
    // (customer) => { return customer.id !== id } === customer => customer.id !== id
    const newCustomersList = customersList.filter((customer) => { return customer.id !== id });
    setCustomersList(newCustomersList);
  }

  return (
    <>
      <h1 className='title' style={{ color: "#D781E3" }}>Practice: add and delete user</h1>
      <div className='main'>
        <form>
          <div className='form-row'>
            <label htmlFor='customerName' className='form-label'>Name:</label>
            <input id='customerName' type='text' className='form-input'
              value={name} onChange={e => { setName(e.target.value) }}></input>
            <button type='submit' className='btn' onClick={handleSubmit}>Add</button>
          </div>
        </form>
        <hr />
        <ol>
          {customersList.map((customer) => {
            return (
              <li key={customer.id}>
                {customer.name}
                {/* important:
                here we need to use callback function in 
                OnClick event.
                So, we cannot use onClick(handleRemove(customer.id)) here.
                Since it is not a callback and the handleRemove
                function will be called immediately.
                */}
                <button type='button' onClick={() => { handleRemove(customer.id) }}>remove</button>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  )
}