import { useState, useEffect } from "react"
import './UseEffect.css'

const url = 'https://api.github.com/users';

export const UseEffectFetch = () => {
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    fetch(url).then(response => response.json()).then(console.log);
  }, [])

  return (
    <>
      <h1 className="title" style={{ color: "#D781E3" }}>Use Effect Basic</h1>
      <div className="main" style={{ color: "#D781E3" }}>
        {userList}
      </div>
    </>
  )
}