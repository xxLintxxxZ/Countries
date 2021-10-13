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

// first part is the nav bar -- in a box - flexbox

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
            {" "}
            Home{" "}
          </Link>
        </Box>
        <Box sx={{ p: 3}}>
          <Link component={RouterLink} to="/Form" sx={{ color: "white" }}>
            Search by Country
          </Link>
        </Box>

        <Box sx={{ p: 3 }}>
          <Link component={RouterLink} to="/Select" sx={{ color: "white" }}>
            Select Countries by Region
          </Link>
        </Box>
        <Box sx={{ p: 3 }}>
          <Link component={RouterLink} to="/Album" sx={{ color: "white" }}>
            Display Countries by Album (testing)
          </Link>
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
        <Route path="/Select">
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
