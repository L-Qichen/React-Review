import React from "react";
import ReactDOM from "react-dom/client";

// create component
// usually separate component in different files, and 
// import it when we need to use it
const Greeting = () => {
  return <h1>Hello, this is a simple react component.</h1>
}

// create root dom
// root is like the entry of react
// it links to index.html and include everything of react stuff
const root = ReactDOM.createRoot(document.getElementById('root'));

// render component on page
root.render(<Greeting />);