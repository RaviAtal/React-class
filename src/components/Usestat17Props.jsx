import React, { useState } from "react";
import { Link } from "react-router-dom";

function Usestat17Props(props) {
  const [showNav, setShowNav] = useState(false);
  if (showNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <section className=" bg-danger">
        <div className="container py-3">
          <nav className="d-flex justify-content-between align-items-center">
            <Link to="/">logo</Link>
            <ul className="d-none d-sm-flex gap-5 align-items-center">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/feat">feature</Link>
              </li>
              <li>
                <Link to="/flexGrow">Flex Grow</Link>
              </li>
              <li>
                <a href="/">{props.text}</a>
                {/* <a href="/">{props.children}</a> */}
              </li>
            </ul>
            <button
              onClick={() => setShowNav(true)}
              className="btn btn-primary d-sm-none"
            >
              Open
            </button>
            <div className={showNav ? "show_nav" : "hide_nav"}>
              <ul className="d-flex d-sm-none flex-column mb-5 align-items-center justify-content-center">
                <button
                  onClick={() => setShowNav(false)}
                  className="btn btn-danger btn-close p-3 rounded-5"
                ></button>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/feat">feature</Link>
                </li>{" "}
                <li>
                  <Link to="/flexGrow">Flex Grow</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>{" "}
    </>
  );
}

export default Usestat17Props;
