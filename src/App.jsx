import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
