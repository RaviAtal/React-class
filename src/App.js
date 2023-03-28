import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Feat } from "./components/Feat";
import { FlexGrow } from "./components/FlexGrow";
import Main from "./components/Main";

function App() {
  return (
    <>
      {/* route link */}
      {/* https://www.freecodecamp.org/news/how-to-use-react-router-version-6/ */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/feat" element={<Feat />} />
        <Route path="/flexGrow" element={<FlexGrow />} />
      </Routes>
    </>
  );
}

export default App;
