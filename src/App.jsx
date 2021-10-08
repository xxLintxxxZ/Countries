import React from "react";
import "./App.css";
import Home from "./Home";
//import About from "./About";
import Form from "./Form";
import Album from './Album'
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import TitlebarBelowImageList from "./ImageList";
import HomeIcon from '@mui/icons-material/Home';

function App() {

  return (
    <div className="App">
      
      <nav>
        <Link to="/">  Back to Home <HomeIcon/> </Link> 
       <Link to = "/Form">Search a Country</Link> 
       <Link to = "/Imagelist">Display countries by Region</Link> 

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
