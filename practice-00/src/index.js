import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return <h1>Hello, this is a simple react component.</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);