import { Route, Routes } from "react-router-dom";
import Architect from "./components/Architect";
import Ecole from "./components/Ecole";
import Home from "./components/Home";
import Information from "./components/Information";
import Manga from "./components/Manga";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ecole" element={<Ecole />} />
      <Route path="information" element={<Information />} />
      <Route path="architect" element={<Architect />} />
      <Route path="manga" element={<Manga />} />
    </Routes>
  );
}

export default App;
