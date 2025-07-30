import { Routes, Route } from "react-router-dom";
import Integration from "./pages/Integration";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/integration" element={<Integration />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default App;
