import React from "react";
import Usestat17 from "./Usestat17";

export const FlexGrow = () => {
  return (
    <>
      <section className="d-flex flex-column min-vh-100 bg-secondary">
        <Usestat17 />
        <div className="container flex-grow-1 bg-light">
          <p className="py-2 m-0">
            r sit amet consectetur adipisicing elit. Iusto autem quas quaerat
            incidunt sapiente, sit ut accusamus animi sunt magnam eius a ullam,
            fugiat rem non soluta ducimus adipisci nobis!
          </p>
        </div>
        <div className="container flex-grow-0 bg-danger">
          <p className="py-2 m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </section>
    </>
  );
};
