import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Layout from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <ToastContainer closeOnClick />
    </>
  );
}

export default App;
