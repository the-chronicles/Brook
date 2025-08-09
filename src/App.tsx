import { Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/integration" element={<Integrations />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
