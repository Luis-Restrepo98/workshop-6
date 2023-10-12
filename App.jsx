import { Route, Routes } from "react-router-dom";
import { Vehicles } from "./src/components/vehicle";
/* import { Mars } from "./src/components/destination/Mars";  */
/* import DestinationMoon from "./src/components/destination/PersonajeMoon"; */
/* import Home from "./src/components/Home"; */
 

function App() {


  return (
    <>
      <Routes>
{/*         <Route path="/" element={<Home />} /> */}
{/*         <Route path="/moon" element={<DestinationMoon />} />
        <Route path="/mars" element={<Mars />} /> */}
        <Route path="/" element={<Vehicles />} />
      </Routes>
    </>
  );
}

export default App;