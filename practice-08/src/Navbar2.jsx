import NavLinks2 from "./NavLinks";
import { useState, useContext } from 'react'
import './style.css'

const Navbar2 = () => {
  const [user, setUser] = useState({ name: "Toby" });
  const logout = () => {
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <h4>Context API</h4>
      <NavLinks2 />
    </nav>
  )
}
export default Navbar2;