import Links from "./Links";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Layout from "./Layout";

function App() {
  return (
    // <div className="app">
    //   <div className="container">
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    //   </div>
    // </div>
  );
}

export default App;
