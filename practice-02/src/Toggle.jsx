import { useState } from "react";
import './FirstExample.css'

const TogglePractice = () => {
  const [showContent, setShowContent] = useState(false);

  const clickHandle = () => {
    setShowContent(!showContent);
  }

  return (
    <>
      <h3 className="title">Toggle Case to Show the Short Circuit and Ternary Usage in React</h3>
      <div className="main">
        {/* ternary */}
        <button type="button" onClick={clickHandle}>{showContent ? "hide banner" : "display banner"}</button>
        {/* short circuit */}
        {showContent && <Banner />}
      </div>
    </>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      This is a banner.
    </div>
  );
};

export default TogglePractice;
