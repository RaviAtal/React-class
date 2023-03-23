import React from "react";
import { carddata } from "./DataOfCadArray";

export const UseOfCards = () => {
  return (
    <>
      <section className=" bg-secondary">
        <div className="container py-4 py-lg-5">
          <h1 className=" text-center text-light">Cards</h1>
          <div className="row justify-content-center">
            {carddata
              .map((param) => {
                return (
                  <div className="col-md-6 col-lg-4 mt-4 h-100">
                    <div className=" bg-warning p-3 card_hover_1">
                      <img className="w-100" src={param.img} alt="Img" />
                      <h2 className="m-0 mb-3 text-white mt-3 pt-2">
                        {param.head}
                      </h2>
                      <p className="m-0 text-white">{param.para}</p>
                    </div>
                  </div>
                );
              })
              .slice(0, 4)}
          </div>
        </div>
      </section>
    </>
  );
};
