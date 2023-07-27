import { useState, useEffect } from "react"
import './UseEffect.css'

const url = 'https://api.github.com/users';

export const UseEffectFetch = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(url).then(response => response.json()).then(setUserList);
  }, [])

  return (
    <>
      <h1 className="title" style={{ color: "#D781E3" }}>Use Effect Basic</h1>
      <div className="main" style={{ color: "#D781E3" }}>
        <ol>
          {userList.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return <li key={id}>
              <img src={avatar_url} />
              <div>
                <h5>{login}</h5>
                <a href="html_url"> Profile </a>
              </div>
            </li>
          })}
        </ol>
      </div>
    </>
  )
}