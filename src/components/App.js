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
        <Contact />
      </div>
    </div>
  );
}

export default App;
