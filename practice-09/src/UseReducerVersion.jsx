import { useReducer } from "react";
import { customers } from "./data";

// initialize the default state
// usually it should be a object
// since we can add more states as a property of 
// defaultState. As result, we can use one reducer to
// manage more states
const defaultState = {
  customerList: customers,
}

// reducer is kind of plus version of state
// it contains the state and the actions of how you 
// want to manipulate the state value
// In other words, reducer is use to manage the state(s)
const reducer = (state, action) => {
  switch (action.type) {
    case 'remove_customer': {
      let newList = state.customerList.filter(
        (customer) => { return customer.id !== action.payload.id; }
      );
      return { ...state, customerList: newList };
    };
    case 'reset_list': {
      return { ...state, customerList: customers };
    }
    case 'clear_list': {
      return { ...state, customerList: [] }
    }
  };
  throw Error('Unknown action: ' + action.type);
};
// The return value of reducer is the state value after updated

const UseReducerVersion = () => {
  // there are two common parameters of useReducer hook:
  // 1. the reducer that you create before
  // 2. the initial(default) state value
  // useReducer hook return an array which contain two elements:
  // 1. ***current*** value of the state
  // 2. dispatch function use to update state and also
  // trigger the rerender of the component
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeCustomer = (id) => {
    dispatch({ type: 'remove_customer', payload: { id } });
  }

  const resetList = () => {
    dispatch({ type: 'reset_list' });
  };

  const clearList = () => {
    dispatch({ type: 'clear_list' });
  };

  return (
    <div style={{ color: "#D2686A" }}>
      <div className='main'>
        <h3 className='title' style={{ marginBottom: "2rem" }}>The second practice(use useReducer replace useState)</h3>
        <ol>
          {state.customerList.map((customer) => {
            const { id, name } = customer;
            return (<li key={id}>
              {name}
              <button type="button" onClick={() => removeCustomer(id)}>Remove</button>
            </li>);
          })}
          {state.customerList.length <= 0 ?
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
export default UseReducerVersion;