import UserContainer2 from "./UserContainer2";

console.log('NavLinks2');
const NavLinks2 = () => {
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
      <UserContainer2 />
    </div>
  )
}
export default NavLinks2;