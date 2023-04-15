import React from "react";
import OnInputBgChange from "./OnInputBgChange";

function Feature() {
  return (
    <>
      <section className=" bg-dark">
        <div className="container py-4 py-lg-4">
          <div className="d-flex flex-column min-vh-100">
            <h1 className=" text-center text-light">Feature</h1>
            <p className="text-danger text-center mt-5 m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam obcaecati tenetur qui hic esse sed nam ipsum
              praesentium veritatis, iure velit dolore quas dolorem inventore
              nulla est architecto accusamus.
            </p>
            <p className="text-light text-center mt-3 m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam obcaecati tenetur qui hic esse sed nam ipsum
              praesentium veritatis, iure velit dolore quas dolorem inventore
              nulla est architecto accusamus.
            </p>
            <p className="text-danger text-center mt-3 m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam obcaecati tenetur qui hic esse sed nam ipsum
              praesentium veritatis, iure velit dolore quas dolorem inventore
              nulla est architecto accusamus.
            </p>
            <p className="text-light text-center mt-3 m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam obcaecati tenetur qui hic esse sed nam ipsum
              praesentium veritatis, iure velit dolore quas dolorem inventore
              nulla est architecto accusamus.
            </p>
            <OnInputBgChange />
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
