import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Form from "./Form";
import { Route, Link } from "react-router-dom";



function App() {
 

  return (
    <div className="App">
      <nav>
        <Link to="/"> Go to Home Page </Link>
        <Link to="/Form"> Mini - Game </Link>
        <Link to="/About"> About this App </Link>
     
      </nav>
      <main>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Form">
        <Form />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </main>
    </div>
  );
}

export default App;
