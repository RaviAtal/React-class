import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section className=" bg-success">
        <div className="container min-vh-100">
          <h1 className="text-light text-center py-5 fw-bolder">About</h1>
          <h2 className="text-light px-5 text-center my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam obcaecati tenetur qui hic esse sed nam ipsum praesentium
            veritatis, iure velit dolore quas dolorem inventore nulla est
            architecto accusamus.
          </h2>

          <Link to="/">
            <button>next</button>{" "}
          </Link>
        </div>
      </section>
    </>
  );
};