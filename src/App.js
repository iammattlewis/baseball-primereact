import React, { useState } from "react";
import { ReactDOM } from "react-dom/client";
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"
import './App.css';
import GMName from "./GMName";
import Navbar from "./Navbar";
import About from "./About";



function App() {

  return (
    <div className="App">
      <Navbar />
      <GMName />
      <About />
    </div>
  );
}

export default App;
