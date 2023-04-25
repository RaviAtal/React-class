import React, { useState } from "react";

const UseOfTabChange = () => {
  const [tabActive, setTabActive] = useState(null);
  const [first, setFirst] = useState(null);
  const array = [
    {
      tab: "tab1",
      desc: "this is my first tab desc",
    },
    {
      tab: "tab2",
      desc: "this is my second tab desc",
    },
    {
      tab: "tab3",
      desc: "this is my third tab desc",
    },
  ];
  const clickHandler = (value) => {
    setTabActive(value);
    setFirst(value);
  };
  return (
    <section>
      <div className="container p-5">
        <div className="d-flex ">
          {array.map((obj, i) => {
            return (
              <>
                <h1
                  className={first === obj.desc ? "text-primary" : "text-black"}
                  onClick={() => clickHandler(obj.desc)}
                >
                  {obj.tab}
                </h1>
              </>
            );
          })}
        </div>
        <h1>{tabActive}</h1>
      </div>
    </section>
  );
};

export default UseOfTabChange;
