import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Biohazard from "./pages/biohazard/Biohazard";
import Blood from "./pages/blood/Blodd";
import Crime from "./pages/crime/Crime";
import Death from "./pages/death/death";
import Odor from "./pages/odor/Odor";
import Hoarder from "./pages/hoarder/Hoarder";
import Mold from "./pages/mold/Mold";
import Smoke from "./pages/smoke/Smoke";
import Fire from "./pages/fire/fire";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="biohazard" element = {<Biohazard />} />
        <Route path="blood" element = {<Blood />} />
        <Route path="crimeScene" element = {<Crime />} />
        <Route path="death" element = {<Death />} />
        <Route path="odor" element = {<Odor />} />
        <Route path="hoarder" element = {<Hoarder />} />
        <Route path="mold" element = {<Mold />} />
        <Route path="smoke" element = {<Smoke />} />
        <Route path="fire" element = {<Fire />} />
      </Routes>
    </>
  )
}

export default App;