import FrontLayout from "@/layout/FrontLayout";
import { Routes, Route } from 'react-router-dom';
import PokedexPage from "./pages/PokedexPage";
import Navbar from "./modules/pokedex/components/Navbar";


function App() {
  return (
    <div className=" items-center">
      <Navbar />
      {/* <FrontLayout /> */}
      <Routes>
        <Route path="/" element={<FrontLayout />} />
        <Route path="/PokedexPage" element={<PokedexPage />} />
      </Routes>
    </div>
  );
}

export default App;