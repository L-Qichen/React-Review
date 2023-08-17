import { useContext } from 'react'
import { navBarContext } from './Navbar2'

const UserContainer2 = () => {
  const { user, logout } = useContext(navBarContext);
  console.log('user');
  return (
    <div className='user-container'>
      {user ? <>
        <p>Hello, {user.name}</p>
        <button type='button' className="btn" onClick={logout}>logout</button>
      </> : <p>Please Login</p>}
    </div>
  )
}
export default UserContainer2;