import NavLinks from "./NavLinks";
import { useState } from 'react'
import './style.css'

const Navbar = () => {
  const [user, setUser] = useState({ name: "Toby" });
  const logout = () => {
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <h4>Context API</h4>
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}
export default Navbar;