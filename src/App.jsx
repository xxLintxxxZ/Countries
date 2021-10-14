import React from "react";
import "./App.css";
import { Box } from "@mui/system";
import Home from "./pages/Home";
import Form from "./pages/Form"
import { Route, Link as RouterLink } from "react-router-dom";
import { Switch } from "react-router";
import { Link } from "@mui/material";
import Select from "./pages/Select";
import Album from "./pages/Album";
import One from "./pages/One";
import { Button } from "@mui/material";
import About from "./pages/About"
import { Typography } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";

// first part is the nav bar -- in a box - flexbox

function App() {

  return (
   
    <div className="App">
    <AppBar sx= {{bgcolor: '#4c94f6'}}>
        <Toolbar>
        <Box sx={{ p: 2}}>
          <Link component={RouterLink} to="/" sx={{ color: "white" }}>
            Home
          </Link>
        </Box>
        <Box sx={{ p: 2}}>
        <Link component={RouterLink} to="/Form" sx={{ color: "white" }}>
          Search by Country
          </Link>
        </Box>
        <Box sx={{ py: 2}}>
          <Link component={RouterLink} to="/Select" sx={{ color: "white" }}>
            Select Countries by Region
          </Link>
        </Box>
        <Box sx={{ p: 2}}>
        <Link component={RouterLink} to="/Album" sx={{ color: "white" }}>
          Asia Countries Only
          </Link>
        </Box>
        <Box sx={{ p: 1, position: "absolute", right: "6%"}}>
          <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/About"
            >
              <Typography variant="button">About</Typography>
            </Button>
        </Box>
        </Toolbar>
    </AppBar>
      

    <main >
    <Toolbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        <Route path ="/Select">
          <Select />
        </Route>
        <Route path="/Album">
          <Album/>
        </Route>
        <Route path="/:id/:den" children={<One />} />
        <Route path="/About">
          <About/>
        </Route>
      </Switch>
  </main>
</div>
);


}

export default App;
