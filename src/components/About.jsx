import React from "react";
import Usestat17 from "./Usestat17";
import NestingOfMap from "./NestingOfMap";
import FormSub from "./FormSub";

export const About = () => {
  return (
    <>
      <section className=" bg-success min-vh-100">
        <Usestat17 />
        <div className="container">
          <h1 className="text-light text-center py-5 fw-bolder">About</h1>
          <h2 className="text-light px-5 text-center my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam obcaecati tenetur qui hic esse sed nam ipsum praesentium
            veritatis, iure velit dolore quas dolorem inventore nulla est
            architecto accusamus.
          </h2>
        </div>
      </section>
      <NestingOfMap />
      <FormSub />
    </>
  );
};
