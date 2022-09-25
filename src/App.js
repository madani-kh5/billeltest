import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import JournalOne from "./components/JournalOne";
import JournalTwo from "./components/JournalTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="journal1" element={<JournalOne />} />
      <Route path="journal2" element={<JournalTwo />} />
    </Routes>
  );
}

export default App;
