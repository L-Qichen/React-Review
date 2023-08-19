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

  return (
    <div style={{ color: "#D2686A" }}>
      <div className='main'>
        <h3 className='title' style={{ marginBottom: "2rem" }}>The first practice</h3>
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
export default Customers;