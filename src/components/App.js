import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
