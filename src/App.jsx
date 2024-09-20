import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Biohazard from "./pages/biohazard/Biohazard";
import Crime from "./pages/crime/Crime";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="biohazard" element = {<Biohazard />} />
        <Route path="crimeScene" element = {<Crime />} />
      </Routes>
    </>
  )
}

export default App;