import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import "../Assets/Css/Routers.css";
import About from "../Components/About";
import Home from "../Components/Home";
import Projects from "./Projects";

function Routers() {
  return (
    <div className="container routers_main">
      <Header />
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default Routers;
