// rfce
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Usestat17() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <section>
        <div className="container py-3">
          <nav className="d-flex justify-content-between align-items-center">
            <a href="/">logo</a>
            <ul className="d-none d-sm-flex gap-5 align-items-center">
              <li>
                <a href="/">home</a>
              </li>
              <Link to="about">
                <li>
                  <a href="/">about</a>
                </li>
              </Link>

              <li>
                <a href="/">feature</a>
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
                  <a href="/">home</a>
                </li>
                <li>
                  <a href="/">about</a>
                </li>
                <li>
                  <a href="/">feature</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Usestat17;
