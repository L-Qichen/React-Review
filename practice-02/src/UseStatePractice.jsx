import { useState } from "react";
import { customers } from "./data";


const UseStatePractice = () => {
  const [customerList, setCustomerList] = useState(customers);
  const removeCustomer = (id) => {
    setCustomerList(customerList.filter((customer) => {
      return customer.id !== id;
    }));
  }

  return (
    <div style={{ color: "#D2686A" }}>
      <h3 className='title'>A practice of useState hook:</h3>
      <div className='main'>
        <ol>
          {customerList.map((customer) => {
            const { id, name } = customer;
            return (<li key={id}>
              {name}
              <button type="button" onClick={() => removeCustomer(id)}>Remove</button>
            </li>);
          })}
          <button type="button" className="btn" onClick={() => {
            setCustomerList([]);
          }}>Delete All</button>
        </ol>
      </div>
    </div >
  );
};
export default UseStatePractice;