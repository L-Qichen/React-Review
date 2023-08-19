import Customers from "./Customers"
import UseReducerVersion from "./UseReducerVersion"

function App() {

  return (
    <>
      <div className="container">
        <h1>useReducer hook practice:</h1>
        <Customers />
        <div style={{ margin: "2rem" }} />
        <UseReducerVersion />
      </div>
    </>
  )
}

export default App
