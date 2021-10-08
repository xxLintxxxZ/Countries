import React from "react";
import "./App.css";
import { Box } from "@mui/system";
import Home from "./Home";
//import About from "./About";
import Form from "./Form";
import Album from './Album'
import { Route, Link as RouterLink} from "react-router-dom";
import { Toolbar } from "@mui/material";
import { Switch } from "react-router";
import TitlebarBelowImageList from "./ImageList";
import Playground from "./optionSelect";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "@mui/material";


// first part is the nav bar -- in a box - flexbox

function App() {

  return (
    <div className="App">
   
      <div style={{ width: '100%' }}> 
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>
        <Link component ={RouterLink} to="/">  Back to Home </Link> 
        </Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>
        <Link component ={RouterLink} to = "/Imagelist">Display countries by Region</Link>
         </Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>
        <Link component ={RouterLink} to = "/optionSelect">Drop Down List</Link> 
        </Box>
      </Box>
      </div>

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
          <Route path = "/optionSelect">
         <Playground/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
