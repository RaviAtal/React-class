import React, { useState } from "react";

const NestingOfMap = () => {
  const [textValue, setTextValue] = useState([
    {
      text: "Hello",
      btn: [
        {
          btnText: "plant",
        },
        {
          btnText: "Ground",
        },
        {
          btnText: "Grass",
        },
        {
          btnText: "Sky",
        },
      ],
    },
    {
      text: "2Hello",
    },
    {
      text: "3Hello",
    },
    {
      text: "4Hello",
    },
  ]);
  return (
    <>
      <section>
        <div className="container py-4">
          {textValue.map((obj) => {
            return (
              <div className=" border-1 border m-2 ">
                <h1>{obj.text}</h1>
                {obj.btn &&
                  obj.btn.map((o) => (
                    <button className="btn border m-2">{o.btnText}</button>
                  ))}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NestingOfMap;
