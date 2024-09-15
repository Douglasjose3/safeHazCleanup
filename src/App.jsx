import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Biohazard from "./pages/biohazard/Biohazard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="biohazard" element = {<Biohazard />} />
      </Routes>
    </>
  )
}

export default App;