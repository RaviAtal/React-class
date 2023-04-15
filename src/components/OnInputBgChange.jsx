import React, { useState } from "react";

const OnInputBgChange = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container py-5">
      <div className="text-center">
        <input
          style={{ backgroundColor: `${inputValue}` }}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Color"
        />
      </div>
    </div>
  );
};

export default OnInputBgChange;
