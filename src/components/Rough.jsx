import React, { useState } from "react";

const Rough = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div className="container">
        <button onClick={() => setShowNav(true)} className="btn btn-primary">
          open
        </button>
        <div>
          <ul className={showNav ? "show_nav" : "hide_nav"}>
            <button
              onClick={() => setShowNav(false)}
              className=" btn btn-primary"
            >
              close
            </button>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <div className="min-vh-100"></div>{" "}
    </>
  );
};

export default Rough;
