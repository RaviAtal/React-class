import React, { useState } from "react";

function ButtonForChangeClor() {
  const [clored, setClored] = useState(false);
  return (
    <>
      <section>
        <div className="container d-flex flex-column align-items-center py-5">
          <p className={clored ? "m-0 text-danger" : "m-0  "}>Hello</p>
          <button onClick={() => setClored(!clored)} className="px-3 py-2 mt-3">
            Change Col
          </button>
        </div>
      </section>
    </>
  );
}

export default ButtonForChangeClor;
