import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Obrigado from "./obrigado/Obrigado";
import All from "./home/Home";
import Found404 from "./404/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="*" element={<Found404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
