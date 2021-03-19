import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url("/fern.jpg")`,
          // backgroundSize: "100% 100%",
        }}
      >
        <Navbar />
        <Route exact path="/" component={Intro} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
