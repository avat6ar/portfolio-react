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
          <Route path="portfolio-react/" element={<Home />} />
          <Route path="portfolio-react/about" element={<About />} />
          <Route path="portfolio-react/projects" element={<Project />} />
          <Route path="portfolio-react/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
