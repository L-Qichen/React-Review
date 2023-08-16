import UserContainer2 from "./UserContainer2";

const NavLinks2 = ({ user, logout }) => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer2 user={user} logout={logout} />
    </div>
  )
}
export default NavLinks2;