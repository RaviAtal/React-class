import React from "react";
import { UseOfCards } from "./UseOfCards";
import Usestat17 from "./Usestat17";
import img_demo from "../assets/images/png/girl_nootpad.png";
import Usestat17Props from "./Usestat17Props";
// import Rough from "./Rough";

function Main() {
  return (
    <>
      {/* ROUGHT of usestate 17-03 */}
      {/* <Rough /> */}

      {/* Nav bar is there in Usestat17 */}
      <Usestat17 />
      <Usestat17Props text="second">
        <img src={img_demo}></img>
      </Usestat17Props>

      {/* use of Map in Cards 21-03 */}
      <UseOfCards />
    </>
  );
}

export default Main;
