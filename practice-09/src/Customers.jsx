import { useState } from "react";
import { customers } from "./data";
import './style.css'


const Customers = () => {
  const [customerList, setCustomerList] = useState(customers);

  const removeCustomer = (id) => {
    setCustomerList(customerList.filter((customer) => {
      return customer.id !== id;
    }));
  }

  const resetList = () => {
    setCustomerList(customers);
  };

  const clearList = () => {
    setCustomerList([]);
  };

  // show the reset button and onclick event to reset the customer 
  // list once the list is empty.

  return (
    <div style={{ color: "#D2686A" }}>
      <div className='main'>
        <h3 className='title' style={{ marginBottom: "2rem" }}>The first practice(Add reset function)</h3>
        <ol>
          {customerList.map((customer) => {
            const { id, name } = customer;
            return (<li key={id}>
              {name}
              <button type="button" onClick={() => removeCustomer(id)}>Remove</button>
            </li>);
          })}
          {customerList.length <= 0 ?

            (
              <button type="button" className="btn" onClick={resetList}>Reset</button>
            ) : (
              <button type="button" className="btn" onClick={clearList}>Delete All</button>
            )}
        </ol>
      </div>
    </div >
  );
};
export default Customers;