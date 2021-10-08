import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
        paper: '#e2efef',
    },
  },
});

function Country(props) {
  console.log("Props ", props);
  const myStyle = { width: "18rem" };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200" width ="248" fit="crop" auto="format"
          image={props.img}
          alt="green iguana"
        />
        <br/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Name : {props.name} Capital : {props.capital}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

//? export the component
export default Country;
