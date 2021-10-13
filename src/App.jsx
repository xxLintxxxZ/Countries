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
import { Typography } from "@mui/material";
// first part is the nav bar -- in a box - flexbox
   {/* Something wrong with syntax? vercel not loading */}

function App() {

  return (
   
    <div className="App">
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: '#4c94f6',
        }}
      >
        <Box sx={{ p: 3}}>
          <Link component={RouterLink} to="/" sx={{ color: "white" }}>
            Home
          </Link>
        </Box>
        <Box sx={{ p: 2}}>
          <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/Form"
            >
              <Typography variant="button">Search by Country</Typography>
            </Button>
        </Box>
        <Box sx={{ py: 3, alignItems: "center" }}>
          <Link component={RouterLink} to="/Select" sx={{ color: "white" }}>
            Select Countries by Region
          </Link>
        </Box>
        <Box sx={{ p: 2}}>
        <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/Album"
            >
              <Typography variant="button">Display Countries by Album</Typography>
            </Button>
        </Box>
      </Box>
    </div>

    <main >
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
   
      </Switch>
  </main>
</div>
);


}

export default App;
