import React, { useState } from "react";

const FormSub = () => {
  const [myformData, setMyformData] = useState({
    fullname: "",
    age: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log(value);
    setMyformData({ ...myformData, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(myformData);
  };
  return (
    <React.Fragment>
      <form onSubmit={formSubmit}>
        <label htmlFor="MyName">Name</label>
        <input
          id="MyName"
          name="fullname"
          onChange={handleInput}
          value={myformData.fullname}
          type="text"
          placeholder="Enter Your Name"
        />
        <label htmlFor="MyAge">Age</label>
        <input
          id="MyAge"
          name="age"
          value={myformData.age}
          type="number"
          onChange={handleInput}
          placeholder="Enter Your Age"
        />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
};

export default FormSub;
