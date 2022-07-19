import React from "react";
import Nav from "./components/Nav"
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import './App.css';
import TopButton from "./components/button";
import { BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";


function App() {
  return (
    <Router>
        <Nav/>
        <TopButton/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  );
}


export default App;
