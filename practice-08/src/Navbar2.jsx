import NavLinks2 from "./NavLinks2";
import { useState, createContext } from 'react'
import './style.css'

// use context api to avoid props drilling:
// first step, use createContext API to create a context
// then export this context to allowed other components to
// use it
// second step, use useContext hook in the children components 
// to use the context which you create in the parent component
// third step, provide the context you created in parent component
// and wrap the children components by context.Provider 
// *** Ps: the context.Provider has a value property, 
// which use to past the parameter(usually is a object) 
// for let children components to use ***
export const navBarContext = createContext();


const Navbar2 = () => {
  const [user, setUser] = useState({ name: "Toby" });
  const logout = () => {
    setUser(null);
  }

  return (
    <navBarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h4>Context API</h4>
        <NavLinks2 />
      </nav>
    </navBarContext.Provider>
  )
}
export default Navbar2;