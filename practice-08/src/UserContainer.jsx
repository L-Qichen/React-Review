const UserContainer2 = ({ user, logout }) => {
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