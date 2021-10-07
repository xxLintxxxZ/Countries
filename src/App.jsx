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
        <Link to="/"> Back to Home Page </Link>
        <Link to="/Form"> Search by Country </Link>
        <Link to="/ImageList"> ImageList Test </Link>
        <Link to="/About"> About this App </Link>

      </nav>
      <main>
        <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Form">
       <Form/>
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
