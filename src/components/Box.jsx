import React from "react";
import { Container } from "react-bootstrap";

const Box = () => {
  return (
    <>
      <section className=" bg-danger">
        <Container>
          <div className=" py-5 ">
            <div className="row justify-content-center">
              <div className="col-4 mt-3">
                <div className=" h-100 ">
                  <div className="box_custom"></div>
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className=" h-100 ">
                  <div className="box_custom"></div>
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className=" h-100 ">
                  <div className="box_custom"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Box;
