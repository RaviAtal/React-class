import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Usestat17 from "./components/Usestat17";
import Rough from "./components/Rough";
import { UseOfCards } from "./components/UseOfCards";
import { About } from "./components/About";
import Main from "./components/Main";

function App() {
  return (
    <>
      {/* ROUGHT of usestate 17-03 */}
      {/* <Rough /> */}
      {/* use of Map in Cards 21-03*/}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <UseOfCards /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
