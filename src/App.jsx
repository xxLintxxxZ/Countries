import React from "react";
import "./App.css";
import Home from "./Home";
//import About from "./About";
import Form from "./Form";
import Album from './Album'
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import TitlebarBelowImageList from "./ImageList";

function App() {
 

  return (
    <div className="App">
      <nav>
        <Link to="/"> Go to Home Page </Link>
        <Link to="/Form"> Mini - Game </Link>
        <Link to="/About"> About this App </Link>
        <Link to="/ImageList"> ImageList Test </Link>

      </nav>
      <main>
        <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Form">
       
        </Route>
       <Route path = "/ImageList">
         <TitlebarBelowImageList/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
