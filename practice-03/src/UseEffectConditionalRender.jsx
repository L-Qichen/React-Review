import { useEffect, useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

const UseEffectConditionalRender = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  // use slow 3G to see the result
  if (!user) {
    return (
      <>
        <h1 className="title">Loading...</h1>
      </>);
  };

  return (
    <>
      <h1 className="title">UseEffect Conditional Render</h1>
      <div className="main">
        <div>{user.name}</div>
        <div>{user.bio}</div>
      </div>
    </>
  );
}

export default UseEffectConditionalRender;