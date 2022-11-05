import Links from "./Links";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
function App() {
  return (
    <div className="app">
      <div className="container">
        <Profile />
        <Links />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
