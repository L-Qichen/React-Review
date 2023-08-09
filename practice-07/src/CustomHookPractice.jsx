import { useFetch } from "./useFetch";

const url = 'https://api.github.com/users/QuincyLarson';

const CustomHookPractice = () => {
  const { data: user, isLoading, isError } = useFetch(url);

  // use slow 3G to see the result
  if (isLoading) {
    return (
      <>
        <h1 className="title">Loading...</h1>
      </>);
  };
  if (isError) {
    return (
      <>
        <h1 className="title">Error!!!</h1>
      </>
    );
  };

  return (
    <>
      <h1 className="title">UseEffect Conditional Render</h1>
      <div className="main">
        <img src={user.avatar_url} alt={user.name}
          style={{ width: "200px" }} />
        <div>{user.name}</div>
        <div>{user.bio}</div>
      </div>
    </>
  );
}

export default CustomHookPractice;