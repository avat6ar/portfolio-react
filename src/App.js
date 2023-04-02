import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./App.css";
import About from "./Components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
