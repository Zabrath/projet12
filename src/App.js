import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Home from "./pages/home/Home";
import Infos from "./pages/infos/Infos";
import Projets from "./pages/projets/Projets";
import Skills from "./pages/skills/Skills";



function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Infos />
        <Projets />
        <Skills />
      </div>
    </Router>
  );
}

export default App;

