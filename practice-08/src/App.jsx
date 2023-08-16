import Navbar from "./NavBar"
import Navbar2 from "./Navbar2"

function App() {

  return (
    <>
      <h1>Prop drilling: </h1>
      <Navbar />
      <h1>Context API: </h1>
      <Navbar2 />
    </>
  )
}

export default App
