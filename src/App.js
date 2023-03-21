import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Usestat17 from "./components/Usestat17";
import Rough from "./components/Rough";
import { UseOfCards } from "./components/UseOfCards";

function App() {
  return (
    <>
      {/* ROUGHT of usestate 17-03 */}
      {/* <Rough /> */}
      <Usestat17 />

      {/* use of Map in Cards 21-03*/}
      <UseOfCards />
    </>
  );
}

export default App;
